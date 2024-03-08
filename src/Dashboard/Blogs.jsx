import React, { useState } from "react";
import "./blogs.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Notify } from "notiflix";
import { FaUpload } from "react-icons/fa6";
import { ClipLoader } from "react-spinners"; // Import ClipLoader from react-spinners

function Blogs() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    setLoading(true);

    const { image, date, title, content } = data;

    try {
      const formData = new FormData();
      formData.append("date", date);
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", image[0]);

      const res = await axios.post(
        "https://api-potf.onrender.com/blogposting",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Notify.success("you have logged successfuly");
      if (res.data) {
        console.log("you have logged", res.data);
      }
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Any">
      <div className="title-blog">Create a New Blog Post</div>

      <form className="whole-blog-form" onSubmit={handleSubmit(onsubmit)}>
        <div className="title-blog1">
          <FaUpload />
          Upload Your Blogs
        </div>
        <label className="blogs-laber">Image</label>
        <div className="blog-input">
          <input
            type="file"
            id="image"
            name="image"
            {...register("image", { required: true })}
          />
        </div>

        <label className="blogs-laber">Date</label>
        <div className="blog-input">
          <input
            type="text"
            id="date"
            name="date"
            {...register("date", { required: true })}
          />
        </div>

        <label className="blogs-laber">Title</label>
        <div className="blog-input">
          <input
            type="text"
            id="title"
            name="title"
            {...register("title", { required: true })}
          />
        </div>

        <label className="blogs-laber">Content</label>
        <div className="blog-input">
          <textarea
            type="text"
            id="content"
            name="content"
            className="text-fromarea"
            {...register("content", { required: true })}
          />
        </div>
        <div className="padding-b">
          <button className="blog-sub" type="submit" disabled={loading}>
            {loading ? (
              <ClipLoader color="#ffffff" loading={loading} size={22} />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Blogs;
