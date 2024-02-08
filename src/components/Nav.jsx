import React from 'react'

import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import './nav1.scss';
function Nav() {
  return (
    <section className="container">
      {/* <div className="allhold">
        <div>
          <div className="nav1">
            <div>
              <TiSocialLinkedin />
            </div>
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaXTwitter />
            </div>
          </div>
        </div>

        <div className="email_p">
          <div className="email1">
            <div>
              <MdOutlineEmail className="email2" />
            </div>
            <div className="email3"> dushimiyimanaelisa@gmail.com</div>
          </div>

          <div className="phone1">
            <div>
              <IoIosCall className="phone2" />
            </div>

            <div className="phone3">0787239952</div>
          </div>
        </div>
      </div> */}

      <div className="second_nav">
        <div>
          <img src="logo.png.webp" />
        </div>
        <div>
          <ul className="pages">
            <li>
              <a href="#land1">Home</a>
            </li>
            <li>
              <a href="#land2">About</a>
            </li>
            <li>
             <a href="#land3">Services</a>
            </li>
            <li><a href='#land4'>Blog</a></li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="padding1">
          <div>
            <CiSearch className="icon1" />
          </div>
          <div className="quate2">
            <button type="button" className="quate">
              Get Quate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nav