import React from "react";
import "../components/resetform.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
function Resetform() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    const { email, otp, newPassword } = data;

    try {
      
      const formData = new FormData();
      formData.append("email", email);
      formData.append("otp", otp);
      formData.append("newPassword", newPassword);
      const res = await axios.post(
        "https://api-potf.onrender.com/verify-otp",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      Notify.success("password reset successfuly");
      if (res.data) {
        console.log("password reset sucessfully", res.data);
      }
      navigate("/log");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="containerform" onSubmit={handleSubmit(onsubmit)}>
        <div className="resetform">
          <div className="resettitle">Reset Form</div>
          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="inputreset"
              name="email"
              id="email"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter OTP"
              name="otp"
              id="otp"
              className="inputreset"
              {...register("otp", {
                required: true,
                pattern: /^[0-9]{6}$/,
              })}
              maxLength={6}
            />
          </div>
          <div>
            <input
              type="password"
              name="newPassword"
              id="password"
              placeholder="Enter Your New Password"
              className="inputreset"
              {...register("newPassword", { required: true })}
            />
          </div>
          <div>
            <button type="submit" className="restformbutto">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Resetform;
