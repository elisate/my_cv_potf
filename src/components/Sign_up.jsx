import React, { useState } from "react";
import "./Signup.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Notify } from "notiflix";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function Sign_up() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    const { name, lastname, email, phone, password } = data;

    try {
      setLoading(true);
      const formData = { name, lastname, email, phone, password };

      const res = await axios.post(
        "https://api-potf.onrender.com/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      Notify.success("You have registered successfully");
      if (res.data) {
        console.log("You have registered", res.data);
        navigate("/log");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        if (error.response.data.message === "user already registered") {
          Notify.failure("User already registered");
        } else {
          Notify.failure(error.response.data.message);
        }
      } else {
        Notify.failure("An unexpected error occurred. Please try again.");
      }
      console.error("Error during registration:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-container-s">
      <div className="log-form-image-s">
        <div className="form-login-s">
          <div className="text-head-s">Sign up Form</div>

          <form className="form-container-s" onSubmit={handleSubmit(onsubmit)}>
            <div className="user-n">
              <label className="form-container-label-s">First Name</label>
              <br />
              <input
                type="text"
                placeholder="Mucyo"
                name="name"
                id="name"
                {...register("name", { required: "First name is required" })}
              />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </div>
            <div className="user-l">
              <label className="form-container-label-s">Last Name</label>
              <br />
              <input
                type="text"
                placeholder="Elive"
                name="lastname"
                id="lastname"
                {...register("lastname", { required: "Last name is required" })}
              />
              {errors.lastname && (
                <p className="error-message">{errors.lastname.message}</p>
              )}
            </div>
            <div className="email-s">
              <label className="form-container-label-s">Email</label>
              <br />
              <input
                type="email"
                placeholder="info@gmail.com"
                name="email"
                id="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>
            <div className="phone-s">
              <label className="form-container-label-s">Phone Number</label>
              <br />
              <input
                type="number"
                placeholder="+250-----------"
                name="phone"
                id="phone"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="error-message">{errors.phone.message}</p>
              )}
            </div>
            <div className="password-s">
              <label className="form-container-label-s">Password</label>
              <br />
              <input
                type="password"
                placeholder="@xyH64x1"
                name="password"
                id="password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>
            <div className="submit-login-s">
              <button
                type="submit"
                className="button-login-s"
                disabled={loading}
              >
                {loading ? (
                  <ClipLoader color="#ffffff" loading={loading} size={22} />
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="image-s">
          <img src="login_svg.png" className="image-sv" alt="login" />
        </div>
      </div>
    </section>
  );
}

export default Sign_up;
