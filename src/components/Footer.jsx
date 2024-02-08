
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
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-top">
            <div>
              <h6 class="footer-title">
                <img src="logo.png.webp" className="im" />
              </h6>
              <div className="edit2">
                We believe that as a boutique practice,
                <div>we are better placed to respond quickly</div>
                <div>to our clients’ needs and to provide</div> bespoke service
                to our clients
              </div>
            </div>
            <div>
              <h6 class="footer-title">Qick Links</h6>
              <ul class="footer-list">
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
                    Testmonial
                  </a>
                </li>
                <li class="footer-list-item">
                  <a href="#" class="footer-list-link">
                    Team
                  </a>
                </li>
                <li class="footer-list-item">
                  <a href="#" class="footer-list-link">
                    contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 class="footer-title">Support</h6>
              <ul class="footer-list">
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
              </ul>
            </div>
            <div>
              <h6 class="footer-title">Address</h6>
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
            <span class="copyright">
              &copy; Legal-Tech. All rights reserved.
            </span>
            <ul class="h">
              <li class="footer-list-item">
                <FaFacebook />
              </li>
              <li class="footer-list-item">
                <FaInstagramSquare />
              </li>
              <li class="footer-list-item">
                <FaXTwitter />
              </li>
              <li class="footer-list-item">
                <FaSquareWhatsapp />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
