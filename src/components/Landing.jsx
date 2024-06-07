import React from "react";
import "./Landing.scss";
import { GrCaretNext } from "react-icons/gr";
import WordWriter from "./WordWriter";
import { CgWebsite } from "react-icons/cg";
import { FaAppStoreIos } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdAccountBalance } from "react-icons/md";
import { RiAnticlockwise2Line } from "react-icons/ri";
import { RiAppsFill } from "react-icons/ri";
import { HiArrowLongRight } from "react-icons/hi2";
import { ClipLoader } from "react-spinners";
//contact import
import "./Contact.scss";
import { FaStreetView, FaPhone } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { SlLocationPin } from "react-icons/sl";
import { FaUser, FaEnvelope} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { FaMessage } from "react-icons/fa6";
import { Notify } from "notiflix";
import axios from "axios";
import { useEffect, useState } from "react";



function Landing() {
  const words = [
    "Web Developer",
    "UI/UX Designer",
    "System Dev",
    "App Developer",
    "Backend dev",
    "Full Stack "
  ];

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onsubmit = async (data) => {
    console.log(data);
    const { name, email, subject, message } = data;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);

      const res = await axios.post(
        "https://api-potf.onrender.com/postcontact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            // "Content-Type": "multipart/form-data",
          },
        }
      );

      Notify.success("contact submitted successfuly");
      if (res.data) {
        console.log("contact submitted", res.data);
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
 
  //getting blogs

  const [blogss, setBlogs] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://api-potf.onrender.com/getblogs",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        setBlogs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <section className="land1" id="home">
        <div className="landf1">
          <div className="text_home">
            <div className="name">Hello my name is</div>
            <div className="name">Dushimiyimana Elisa</div>

            <div className="type">
              <div>And I'm</div>
              <div>
                <WordWriter words={words} />
              </div>
            </div>

            <div className="butto_holder">
              <div>
                <a href="/#contact">
                  {" "}
                  <button type="button" className="butto1">
                    Hire Me
                  </button>
                </a>
              </div>
              <div>
                <a href="/#services">
                  <button type="button" className="butto2">
                    <GrCaretNext />
                    Our Services
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="my_profile">
            <img src="elisa.png" className="my_pic" />
          </div>
        </div>
      </section>
      <section className="land2" id="about">
        <div className="about-exp">
          <p className="text1">Explore Our Solutions</p>
        </div>
        <div></div>
        <div className="type1">
          <div>I'm Elisa And I'm a</div>
          <div>
            <WordWriter words={words} />
          </div>
        </div>

        <div className="img-text">
          <div className="imgh">
            <img src="elisa-b.png" className="imge" />
          </div>
          <div className="img-text1">
            <div className="text2">
              Crafting Digital Experiences: Bridging Design and Functionality.
              Welcome to my portfolio! I'm a passionate web developer and
              designer dedicated to transforming ideas into captivating online
              realities. Explore a fusion of creativity and code through my
              projectsCrafting Digital Experiences: Bridging Design and
              Functionality. Welcome to my portfolio! I'm a passionate web
              developer and designer dedicated to transforming ideas into
              captivating online realities. Explore a fusion of creativity and
              code through my projects
            </div>
            <div className="text-icon">
              <div className="text-a">
                <div>
                  We're committed to delivering tailored solutions and
                  exceptional service
                </div>
              </div>
              <div className="text-b">
                <div>
                  Excellence drives us to continuously innovate and improve.
                </div>
              </div>
              <div className="text-c">
                <div>
                  At our company, we're dedicated to providing exceptional
                  service and innovative solutions
                </div>
              </div>
            </div>

    <a href="Elisa_resume.pdf" download="Elisa_resume.pdf" className="b">
  <button type="button" className="but">
    Download CV
  </button>
</a>

          </div>
        </div>
      </section>
      <section className="land3" id="services">
        <div className="serv-text1">our services</div>

        <div className="serv-text2">
          <div className="text-s1">We Are Here To Develop Your</div>
          <div className="text-s1">
            Project With <span className="text-s1a"> Experience</span>
          </div>
        </div>

        <div className="card-service">
          <div className="card1-serv">
            <div className="card1-a1">
              <CgWebsite className="card-icon" />
            </div>
            <div className="text-head1">Web Development</div>
            <div className="text-head2">
              Transform your digital presence with our expert web development
              services. From custom designs to seamless functionality, we bring
              your vision to life. Let us help you stand out online
            </div>
          </div>
          <div className="card1-serv">
            <div className="card1-a1">
              <FaAppStoreIos className="card-icon" />
            </div>
            <div className="text-head1">Mobile App Development</div>
            <div className="text-head2">
              Elevate your business with our mobile app development expertise.
              From concept to launch, we craft intuitive and engaging
              applications tailored to your needs. Let us bring your ideas to
              users' fingertips
            </div>
          </div>
          <div className="card1-serv">
            <div className="card1-a1">
              <AiOutlineLineChart className="card-icon" />
            </div>
            <div className="text-head1">UI/UX Design</div>
            <div className="text-head2">
              Enhance user satisfaction and engagement with our UI/UX design
              services. We specialize in creating intuitive interfaces that
              delight users and elevate your brand's digital experience.
            </div>
          </div>
        </div>
      </section>
      <section className="land4" id="blog">
        <div className="land4-head1">
          Discover the latest updates and insights on our{" "}
          <span className="blog-deco">blog!</span>
        </div>

        <div className="blogs-container">
          {blogss.map((item) => (
            <div className="blogs-database" key={item._id}>
              <div>
                <img src={item.image} className="blog-image1" />
              </div>
              <div className="blog-date">{item.date}</div>
              <div className="blog-text1">{item.title}</div>
              <div className="blog-text2">{item.content}</div>
              <div className="blog-read">
                <a href="/">Read Blog</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="pages-land" id="portfolio">
        <div className="pages-1">Projects</div>
        <div className="project-holder">
          <div className="page-card-holder">
            <div>
              <MdAccountBalance className="icon-page" />
            </div>
            <div className="project-title">Legal Tech</div>
            <div className="pages-text1">
              Revolutionize the way you handle legal cases! Our innovative legal
              tech project enables seamless online case submissions,
              streamlining the entire process for users.
            </div>

            <div className="read-text1">
              <div>
                <a href="https://legal-tech-seven.vercel.app/">Read more</a>
              </div>
              <div>
                <a href="https://legal-tech-seven.vercel.app/">
                  <HiArrowLongRight className="icon-page2" />
                </a>
              </div>
            </div>
          </div>
          <div className="page-card-holder">
            <div>
              <RiAnticlockwise2Line className="icon-page" />
            </div>
            <div className="project-title">Holday Planner</div>
            <div className="pages-text1">
              Plan your dream getaway hassle-free! Our holiday planner project
              simplifies tour booking online, offering a seamless experience for
              users.
            </div>

            <div className="read-text1">
              <div>
                <a href="https://tour-booking-alpha.vercel.app/">Read more </a>
              </div>
              <div>
                <a href="https://tour-booking-alpha.vercel.app/">
                  <HiArrowLongRight className="icon-page2" />
                </a>
              </div>
            </div>
          </div>
          <div className="page-card-holder">
            <div>
              <RiAppsFill className="icon-page" />
            </div>
            <div className="project-title">E-Buy</div>
            <div className="pages-text1">
              Welcome to E-Buy - your ultimate online shopping destination!
              Browse, click, and purchase with ease using our user-friendly
              platform.
            </div>

            <div className="read-text1">
              <div>
                <a href="https://elisa-cart.vercel.app/" className="readhover">
                  Read more{" "}
                </a>
              </div>
              <div>
                <a href="https://elisa-cart.vercel.app/">
                  <HiArrowLongRight className="icon-page2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="contact-title">
          <p className="contact-sub">
            Contact our support guys or make appointment with
            <span className="contact-sub1">consultan</span>
          </p>
        </div>
        <div className="cont-justfy">
          <div className="cont-big-text">
            <div>
              Please contact us using the information below. For additional
              information on our management consulting services, please visit
              the appropriate page on our site.
            </div>

            <div>
              <div className="contact-sub-sub">
                <div className="cont-sub-a">
                  <div>
                    <FaStreetView className="cont-icon" />
                  </div>
                  <div className="cont-icon-tex">
                    131 Biryogo Street Nyarugenge, CST 012
                  </div>
                </div>
                <div className="cont-sub-b">
                  <div>
                    <FaPhone className="cont-icon" />
                  </div>
                  <div className="cont-icon-tex">+250 787239952</div>
                </div>
                <div className="cont-sub-c">
                  <div>
                    <CgMail className="cont-icon" />
                  </div>
                  <div className="cont-icon-tex">
                    <a href="/">infodtechel@gmail.com</a>
                  </div>
                </div>
                <div className="cont-sub-d">
                  <div>
                    <SlLocationPin className="cont-icon" />
                  </div>
                  <div className="cont-icon-tex">
                    <a href="https://www.google.com/maps/place/UR+College+of+Science+and+Technology/@-1.958692,30.0642158,17z/data=!3m1!4b1!4m6!3m5!1s0x19dca5d5b9897711:0x34e7b1e5cded7867!8m2!3d-1.958692!4d30.0642158!16zL20vMDgxMGJk?entry=ttu">
                      View On Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit(onsubmit)}>
              <div className="input-container">
                <FaUser className="icon" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="input-container">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="input-container">
                <FaMessage className="icon" />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="subject"
                  {...register("subject", { required: true })}
                />
              </div>
              <div className="input-container">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="memu"
                  {...register("message", { required: true })}
                />
              </div>
              <button type="submit" className="cont-button">
                {loading ? (
                  <ClipLoader
                    color="#ffffff"
                    loading={loading}
                    size={22}
                    className="clipper"
                  />
                ) : (
                  " Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
