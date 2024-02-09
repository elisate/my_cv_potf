import React from 'react';
import { CiSearch } from "react-icons/ci";
import './nav1.scss';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <section className="container">
      <div className="second_nav">
        <div>
          <img src="logo.png.webp" />
        </div>
        <div>
          <ul className="pages">
            <li>
              <a href="/#land1">Home</a>
            </li>
            <li>
              <a href="/#land2">About</a>
            </li>
            <li>
              <a href="/#land3">Services</a>
            </li>
            <li>
              <a href="/#land4">Blog</a>
            </li>
            <li>
              <a href="/#pages">Portfolio</a>
            </li>
            <li>
              {/* <a href="/contact">Contact</a> */}
              <Link to="/contact">Contact</Link>
            </li>
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