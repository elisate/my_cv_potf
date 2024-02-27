import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { Notify } from "notiflix";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function Login() {
const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onsubmit = async (data) => {
    console.log(data);
    const {email,password } = data;
    try {
      const formData = new FormData();
      
      formData.append("email", email);
      formData.append("password", password);

      const res = await axios.post(
        "https://api-potf.onrender.com/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            // "Content-Type": "multipart/form-data",
          },
        }
      );
      
      Notify.success("you have logged successfuly");
      if (res.data) {
        console.log("you have logged", res.data);
      }

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="login-container">
      <div className="log-form-image">
        <div className="form-login">
          <div className="text-head">Login Form</div>
          <div className="text-head1">
            Does n't have an account{" "}
            <span className="text-signup">
              <Link to="/sign">sign up</Link>
            </span>
          </div>
          <form className="form-container" onClick={handleSubmit(onsubmit)}>
            <div className="username">
              <label className="form-container-label">username</label>
              <br />
              <input
                type="text"
                placeholder="info@gmail.com"
                name="email"
                id="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="password">
              <label className="form-container-label">password</label>
              <br />
              <input
                type="password"
                placeholder="12345678"
                name="password"
                id="password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="submit-login">
              <button type="submit" className="button-login">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="image">
          <img src="login_svg.png" className="image-sv" />
        </div>
      </div>
    </section>
  );
}

export default Login;
