"use client";
import React from "react";
import { Link } from "react-router-dom";
import "./respo.scss";
import { IoCloseSharp } from "react-icons/io5";
import "./nav1.scss";
import Profile from "./Profile";
import { useState } from "react";
import Status_loged from "./Status_loged";
function Resp_nav({ handleresp }) {
  const [profile, setProfile] = useState(false);
  const handleprofile = () => {
    setProfile(!profile);
  };
  return (
    <div className="overlay">
      <div className="modal-content">
        <div className="close-resp">
          <IoCloseSharp onClick={handleresp} />
        </div>
        <ul className="pages">
          <li>
            <a href="/#home" onClick={handleresp}>
              Home
            </a>
          </li>
          <li>
            <a href="/#about" onClick={handleresp}>
              About
            </a>
          </li>
          <li>
            <a href="/#services" onClick={handleresp}>
              Services
            </a>
          </li>
          <li>
            <a href="/#blog" onClick={handleresp}>
              Blog
            </a>
          </li>
          <li>
            <a href="/#portfolio" onClick={handleresp}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={handleresp}>
              Contact
            </a>
          </li>

          {/* <li>
            <Link to="/log">
              <button type="button" className="quate2">
                Login
              </button>
              <Status_loged/>
            </Link>
          </li> */}
        </ul>
      </div>
      {profile && <Profile handleprofile={handleprofile} />}
    </div>
  );
}

export default Resp_nav;
