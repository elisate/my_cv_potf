import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./nav1.scss";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { FaBars } from "react-icons/fa"; 
import Resp_nav from "./Resp_nav";
function Nav() {
  const [profile, setProfile] = useState(false);
  const[resp,setResp]=useState(false);
  const handleprofile = () => {
    setProfile(!profile);
  };
  const handleresp=()=>
  {
    setResp(!resp)
  }
  return (
    <>
      <section className="container">
        <div className="second_nav">
          <div>
            <img src="elogoo.png" />
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
                <a href="/#pages-land">Portfolio</a>
              </li>
              <li>
                <a href="/#cont">Contact</a>
              </li>
            </ul>
          </div>
          <FaBars  className="fabar" onClick={handleresp}/>
          <div className="padding1">
            <div className="quate2">
            <Link to="/log">  <button type="button" className="quate">
                Login
              </button></Link>
            </div>
          </div>
        </div>
        {profile && <Profile handleprofile={handleprofile} />}
        {resp && <Resp_nav handleresp={handleresp}/>}
      </section>
    </>
  );
}
export default Nav;
