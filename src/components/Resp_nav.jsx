import React from 'react'
import { Link } from 'react-router-dom';
import './respo.scss';
function Resp_nav({handleresp}) {
  return (
    <div className="overlay">
      <div className="modal-content">
        <div><h2 onClick={handleresp}>x</h2></div>
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
            <a href="/#pages-land">Portfolio</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resp_nav