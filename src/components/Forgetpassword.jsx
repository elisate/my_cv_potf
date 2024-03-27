import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import'./forgot.scss';
function Forgetpassword() {
  const {
    register,
    handleSubmit,
    formState:{ errors },
  } = useForm();
  console.log(errors);
  const onsubmit =async(data)=>{
    const {email}=data;
    console.log(data);
   
    try{
        const formData = new FormData();
        formData.append("email", email);
       const res = await axios.post(
         "http://localhost:3000/forgotpassword",
         formData,
         {
           headers: {
             "Content-Type": "application/json",
           },
         }
       );
    console.log(res.data);
}
catch(error)
    {
console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)} className="for">
        <input
          type="text"
          placeholder="reset pin"
          name="email"
          id="email"
          className="otp"
          {...register("email", { required: true })}
        />

        <button type="submit" className="buttof">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Forgetpassword;
