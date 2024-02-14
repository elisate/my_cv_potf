import React from "react";
import "./footer.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-holder" id="contact">
      <div class="footer">
        
          <div class="footer-top">
            <div>
              <span class="footer-title">
                <img src="logo.png.webp" className="im" />
              </span>
              <div className="edit2">
                We believe that as a boutique practice,
                <div>we are better placed to respond quickly</div>
                <div>to our clients’ needs and to provide</div> bespoke service
                to our clients
              </div>
            </div>
            <div>
              <span class="footer-title">Qick Links</span>
              <div class="footer-list">
                <li class="footer-list-item">
                  <a href="/#home" class="footer-list-link">
                    Home
                  </a>
                </li>
                <li class="footer-list-item">
                  <a href="#about" class="footer-list-link">
                    About Us
                  </a>
                </li>
                <li class="footer-list-item">
                  <a href="#" class="footer-list-link">
                    Services
                  </a>
                </li>

                <li class="footer-list-item">
                  <a href="#" class="footer-list-link">
                    Projects
                  </a>
                </li>
                <li class="footer-list-item">
                  <a href="#" class="footer-list-link">
                    contact
                  </a>
                </li>
              </div>
            </div>
            <div>
              <span class="footer-title">Support</span>
              <div class="footer-list">
                <li class="footer-list-item">
                  <a href="#" class="footer-list-link">
                    About
                  </a>
                </li>
                <li class="footer-list-item">
                  <a href="#" class="footer-list-link">
                    Refund Policy
                  </a>
                </li>
                <li class="footer-list-item">
                  <a href="#" class="footer-list-link">
                    Support System
                  </a>
                </li>
                <li class="footer-list-item">
                  <a href="#" class="footer-list-link">
                    Professional Services
                  </a>
                </li>
              </div>
            </div>
            <div>
              <span class="footer-title">Address</span>
              <div className="can5">
                <div className="can1">
                  <div>
                    <FaPhoneFlip />
                  </div>
                  <div>+250 787239952</div>
                </div>
                <div className="can2">
                  <MdEmail />
                  <div>info@teckel.com</div>
                </div>
                <div className="can3">
                  <div>
                    <FaHome />
                  </div>
                  <div>380 St nyarugenge</div>
                </div>
              </div>
            </div>
          </div>

          <hr class="footer-divider" />
          <div className="but">
          <div class="copyright">
           <div>&copy; Elisa-Tech.All rights reserved</div>
            </div>
            <div class="h">
              <div class="footer-list-item">
                <FaFacebook />
              </div>
              <div class="footer-list-item">
                <FaInstagramSquare />
              </div>
              <div class="footer-list-item">
                <FaXTwitter />
              </div>
              <div class="footer-list-item">
                <FaSquareWhatsapp />
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Footer;
