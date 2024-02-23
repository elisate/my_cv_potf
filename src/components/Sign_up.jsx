import React from 'react'
import './Signup.scss'
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Notify } from 'notiflix';
function Sign_up() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onsubmit = async (data) => {
    console.log(data);
    const { name, email, phone, password} = data;
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password",password);

      const res = await axios.post(
        "https://api-potf.onrender.com/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            // "Content-Type": "multipart/form-data",
          },
        }
      );

      Notify.success("you have registered successfuly");
      if (res.data) {
        console.log("you have registered", res.data);
      }

     history.push("/log");
    } catch (error) {
      console.log(error);
    
    }
  };
  return (
    <section className="login-container-s">
      <div className="log-form-image-s">
        <div className="form-login-s">
          <div className="text-head-s">Sign up Form</div>

          <form className="form-container-s" onClick={handleSubmit(onsubmit)}>
            <div className="user-n">
              <label className="form-container-label-s">Username</label>
              <br />
              <input
                type="text"
                placeholder="mucyo Elive"
                name="name"
                id="name"
                {...register("name", { required: true })}
              />
            </div>
            <div className="email-s">
              <label className="form-container-label-s">Email</label>
              <br />
              <input
                type="email"
                placeholder="info@gmail.com"
                name="email"
                id="email"
                {...register("email", { required: true})}
              />
            </div>
            <div className="phone-s">
              <label className="form-container-label-s">Phone number</label>
              <br />
              <input
                type="number"
                placeholder="+250-------------"
                name="phone"
                id="phone"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="password-s">
              <label className="form-container-label-s">password</label>
              <br />
              <input
                type="password"
                placeholder="---------"
                name="password"
                id="password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="submit-login-s">
              <button type="submit" className="button-login-s">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="image-s">
          <img src="login_svg.png" className="image-sv" />
        </div>
      </div>
    </section>
  );
}

export default Sign_up