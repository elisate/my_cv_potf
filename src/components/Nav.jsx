import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./nav1.scss";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { FaBars } from "react-icons/fa"; 
import Resp_nav from "./Resp_nav";
import Status_loged from "./Status_loged";
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
          <div className="anychange-text">
            <div className="imerge-resp">
              <FaBars className="fabar" onClick={handleresp} />{" "}
              <img src="elogoo.png" className="logo-resp" />
            </div>
            <div className="account-log">
              <Status_loged />
            </div>
          </div>
          <div>
            <ul className="pages">
              <li>
                <a href="/#home">Home</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#blog">Blog</a>
              </li>
              <li>
                <a href="/#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* <FaBars  className="fabar" onClick={handleresp}/> */}
          <div className="padding1">
            <div className="quate2">
             
              <Status_loged />
            </div>
          </div>
        </div>
        {profile && <Profile handleprofile={handleprofile} />}
        {resp && <Resp_nav handleresp={handleresp} />}
      </section>
    </>
  );
}
export default Nav;
