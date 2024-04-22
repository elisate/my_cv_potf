import React from "react";
import "../components/resetform.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
function Resetform() {
  const resetEmail = sessionStorage.getItem("resetEmail");


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
      setLoading(true); // Set loading state to true when submitting
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
      Notify.success("Password reset successfully");
      navigate("/log");
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        if (errorMessage === "User not found.") {
          Notify.warning("User not found.");
        } else if (errorMessage === "Invalid OTP.") {
          Notify.warning("Invalid OTP.");
        } else {
          console.log(error);
        }
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false); // Set loading state to false after request completion
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
              value={resetEmail}
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
            <button type="submit" className="restformbutto" disabled={loading}>
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Resetform;
