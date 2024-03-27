import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { Notify } from "notiflix";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners"; // Import ClipLoader from react-spinners

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Add loading state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onsubmit = async (data) => {
    console.log(data);
    const { email, password } = data;
    try {
      setLoading(true); // Set loading to true when submitting
      const formData = new FormData();

      formData.append("email", email);
      formData.append("password", password);

      const res = await axios.post("http://localhost:3000/login", formData, {
        headers: {
          "Content-Type": "application/json",
          // "Content-Type": "multipart/form-data",
        },
      });

      Notify.success("you have logged successfuly");
      if (res.data) {
        console.log("you have logged", res.data);
      }
      // Save data to local storage
      console.log(res.data);
      localStorage.setItem("userLogin", JSON.stringify(res.data));
      if (res.data.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log(error.response.data); // Log the response data
      if (
        error.response &&
        error.response.data &&
        (error.response.data.message === "Invalid credentials" ||
          error.response.data.message === "User not found")
      ) {
        Notify.failure(error.response.data.message);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false); // Set loading back to false when submission is completed
    }
  };

  return (
    <section className="login-container">
      <div className="log-form-image">
        <div className="form-login">
          <div className="text-head">Login Form</div>
          <div className="text-head1">
            <span>Does n't have an account</span>
            <span className="text-signup">
              <Link to="/sign">sign up</Link>
            </span>
          </div>
          <form className="form-container" onSubmit={handleSubmit(onsubmit)}>
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
                placeholder="@xYvZ64"
                name="password"
                id="password"
                {...register("password", { required: true })}
              />
            </div>

            <div>
              <span>
                {" "}
                <Link to="/reset"> forget your password </Link>{" "}
              </span>{" "}
            </div>
            <div className="submit-login">
              <button type="submit" className="button-login" disabled={loading}>
                {loading ? (
                  <ClipLoader color="#ffffff" loading={loading} size={22} />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="image">
          <img src="login_svg.png" className="image-sv" alt="login image" />
        </div>
      </div>
    </section>
  );
}

export default Login;
