import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./forgot.scss";
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
function Forgetpassword({ handlemodal }) {
    const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    const { email } = data;

    try {
      
      const formData = new FormData();
      formData.append("email", email);
      const res = await axios.post(
        "https://api-potf.onrender.com/send-otp",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      Notify.success("otp verification have been sent");
      if (res.data) {
        console.log("otp verification", res.data);
      }
      navigate("/newpin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overlay">
      <form onSubmit={handleSubmit(onsubmit)} className="for">
        <input
          type="text"
          placeholder=" Enter Your Email To Reset Pin"
          name="email"
          id="email"
          className="otp"
          {...register("email", { required: true })}
        />
        <div className="buttocontainer">
          <button type="submit" className="buttof" >
            
              Submit
           
          </button>
          <button className="closeButton" onClick={handlemodal}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forgetpassword;
