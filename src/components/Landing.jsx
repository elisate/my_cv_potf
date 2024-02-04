import React from "react";
import "./Landing.scss";
import { GrCaretNext } from "react-icons/gr";
import WordWriter from "./WordWriter";
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
        <div>
          <p className="text1">Explore Our Solutions</p>
        </div>
        <div className="type1">
          <div>I'm Elisa And I'm a</div>
          <div>
            <WordWriter words={words} />
          </div>
        </div>
        <div className="text2">
          Crafting Digital Experiences: Bridging Design and Functionality.
          Welcome to my portfolio! I'm a passionate web developer and designer
          dedicated to transforming ideas into captivating online realities.
        </div>
        <div className="imgh">
          <img src="about1.png" className="imge" />
        </div>
      </section>
    </>
  );
}

export default Landing;
