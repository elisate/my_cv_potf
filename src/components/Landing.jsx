import React from "react";
import "./Landing.scss";
import { GrCaretNext } from "react-icons/gr";
import WordWriter from "./WordWriter";
import { CgWebsite } from "react-icons/cg";
import { FaAppStoreIos } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";;
function Landing() {
  const words = ["Web Developer", "UI/UX Designer", "System Anlyser"];
  return (
    <>
      <section className="land1" id="land1">
        <div className="landf1">
          <div className="text_home">
            <div className="name">Hello my name is</div>
            <div className="name">Dushimiyimana Elisa</div>

            <div className="type">
              <div>And I'm a</div>
              <div>
                <WordWriter words={words} />
              </div>
            </div>

            <div className="butto_holder">
              <div>
                <button type="button" className="butto1">
                  Our services
                </button>
              </div>
              <div>
                <button type="button" className="butto2">
                  <GrCaretNext /> See how it work
                </button>
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
        <div className="type1">
          <div>I'm Elisa And I'm a</div>
          <div>
            <WordWriter words={words} />
          </div>
        </div>
        <div className="img-text">
          <div className="imgh">
            <img src="elisa4.jpeg" className="imge" />
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
            <button type="button" className="but">
              Download cv
            </button>
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
    </>
  );
}

export default Landing;
