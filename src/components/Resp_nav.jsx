import React from 'react'
import { Link } from 'react-router-dom';
import './respo.scss';
import { IoCloseSharp } from "react-icons/io5";
import'./nav1.scss';
import Profile from './Profile';
import { useState } from 'react';

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
            <a href="/#land1" onClick={handleresp}>
              Home
            </a>
          </li>
          <li>
            <a href="/#land2" onClick={handleresp}>
              About
            </a>
          </li>
          <li>
            <a href="/#land3" onClick={handleresp}>
              Services
            </a>
          </li>
          <li>
            <a href="/#land4" onClick={handleresp}>
              Blog
            </a>
          </li>
          <li>
            <a href="/#pages-land" onClick={handleresp}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="/#cont" onClick={handleresp}>
              Contact
            </a>
          </li>

          <li>
       <Link to='/log'><button type="button" className="quate2">
              Login
            </button></Link>
          </li>
        </ul>
      </div>
      {profile && <Profile handleprofile={handleprofile} />}
    </div>
  );
}

export default Resp_nav