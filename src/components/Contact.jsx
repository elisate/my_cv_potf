import React from 'react';
import './Contact.scss';
import { FaStreetView, FaPhone} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { SlLocationPin } from "react-icons/sl";
import { FaUser, FaEnvelope,FaRegEnvelope } from "react-icons/fa";


function Contact() {
  return (
    <section className="contact">
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
          information on our management consulting services, please visit the
          appropriate page on our site.
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
                <div className="cont-icon-tex">elisatech@gmail.com</div>
              </div>
              <div className="cont-sub-d">
                <div>
                  <SlLocationPin className="cont-icon" />
                </div>
                <div className="cont-icon-tex">View On Map</div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
         
          <form className="contact-form">
            <div className="input-container">
              <FaUser className="icon" />
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="input-container">
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="input-container">
              <FaPhone className="icon" />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone (optional)"
              />
            </div>
            <div className="input-container">
              <FaRegEnvelope className="icon" />
              <input
                name="message"
                placeholder="Your Message"
                className='message'
                required
              ></input>
            </div>
            <button type="submit" className='cont-button'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact