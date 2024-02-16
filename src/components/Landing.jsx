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
function Landing() {
  const words = [
    "Web Developer",
    "UI/UX Designer",
    "System Devpmt",
    "App Developer",
    
  ];
  return (
    <>
      <section className="land1" id="land1">
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
                <a href="#land3">
                  {" "}
                  <button type="button" className="butto1">
                    Our services
                  </button>
                </a>
              </div>
              <div>
                <a href="#pages-land">
                  <button type="button" className="butto2">
                    <GrCaretNext /> See how it work
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
      <section className="land2" id="land2">
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
            <img src="aboutp.JPG" className="imge" />
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

            <a href="Elisa_Cv.pdf" download="Elisa_Cv.pdf">
              <button type="button" className="but">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="land3" id="land3">
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
      <section className="land4" id="land4">
        <div className="land4-head1">
          Discover the latest updates and insights on our{" "}
          <span className="blog-deco">blog!</span>
        </div>
        <div className="blogs">
          <div className="blog-holder1">
            <img src="blog4.jpg" className="blog-image1" />
            <div className="blog-date">10 OCTOBER 2023 -TRAINING SESSION AT KLAB</div>
            <div className="blog-text1">
              THE ONGOING IMPACTFUL JOURNEY OF TECH TALENTS IN ICT Chamber
            </div>
            <div className="blog-text2">
              The Tech UpSkill program, an initiative under the umbrella of AIPI
              (Access International Partnership in IT), represents a
              collaborative effort between the Rwanda ICT Chamber and BITMi
              (Bundesverband IT-Mittelstand e.V.). […]
            </div>
            <div className="blog-read">
              <a href="/">Read Blog</a>
            </div>
          </div>
          <div className="blog-holder1">
            <img src="blog1.jpg" className="blog-image1" />
            <div className="blog-date">30 FEB 2024 - UI DESIGN OF MY APP</div>
            <div className="blog-text1">
              THE ONGOING IMPACTFUL JOURNEY OF TECH TALENTS IN ELISA TECH
            </div>
            <div className="blog-text2">
              The Tech UpSkill program, an initiative under the umbrella of AIPI
              (Access International Partnership in IT), represents a
              collaborative effort between the Rwanda ICT Chamber and BITMi
              (Bundesverband IT-Mittelstand e.V.). […]
            </div>
            <div className="blog-read">
              <a href="/">Read Blog</a>
            </div>
          </div>
        </div>
        <div className="blog-gradu">
          <div className="blog-holder1-gradu">
            <img src="blog2.webp" className="blog-image1-gradu" />
            <div className="blog-date-gradu">
              13 JAN 2024 - LAUNCHING OF MP MOBILE APP
            </div>
            <div className="blog-text1-gradu">
              THE ONGOING IMPACTFUL JOURNEY OF TECH TALENTS IN ICT Chamber
            </div>
            <div className="blog-text2-gradu">
              The Tech UpSkill program, an initiative under the umbrella of AIPI
              (Access International Partnership in IT), represents a
              collaborative effort between the Rwanda ICT Chamber and BITMi
              (Bundesverband IT-Mittelstand e.V.). […]
            </div>
            <div className="blog-read-gradu">
              <a href="/">Read Blog</a>
            </div>
          </div>
          <div className="blog-holder1-gradu">
            <img src="blogklab.JPG" className="blog-image1-gradu1" />
            <div className="blog-date-gradu">
              16 Feb 2024 - MY GRADUTION IN KLAB
            </div>
            <div className="blog-text1-gradu">
              THE ONGOING IMPACTFUL JOURNEY OF TECH TALENTS IN ICT Chamber
            </div>
            <div className="blog-text2-gradu">
              The Tech UpSkill program, an initiative under the umbrella of AIPI
              (Access International Partnership in IT), represents a
              collaborative effort between the Rwanda ICT Chamber and BITMi
              (Bundesverband IT-Mittelstand e.V.). […]
            </div>
            <div className="blog-read-gradu">
              <a href="/">Read Blog</a>
            </div>
          </div>
        </div>
      </section>
      <section className="pages-land" id="pages-land">
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
                <a href="https://holyday-planner-k.vercel.app/">Read more </a>
              </div>
              <div>
                <a href="https://holyday-planner-k.vercel.app/">
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
                <a href="https://elisaweb.vercel.app/">Read more </a>
              </div>
              <div>
                <a href="https://elisaweb.vercel.app/">
                  <HiArrowLongRight className="icon-page2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
