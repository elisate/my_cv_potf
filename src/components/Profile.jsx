import React from 'react'
import './profile.scss' 
import { IoMdCloseCircle } from "react-icons/io";
import { FaUserAlt, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import { Link } from 'react-router-dom';
import Status_loged from './Status_loged';


function Profile({handleprofile}) {

  let userLogin = JSON.parse(localStorage.getItem("userLogin"));
  let token = userLogin?.access_token;
  let username = userLogin?.name;
  let appeared_name = userLogin?.lastname;
  let Email = userLogin?.email;
  let Xloged = userLogin?.role;
  console.log("wwww", Xloged);
  console.log("nnnnnnnnn",username);
  function Logout() {
    localStorage.removeItem("userLogin");
    window.location.href = "/";
  }


  return (
    <div className="modal-overlay">
      <div className="profile-container">
        <div className="prof-a">
          <div className="prof-text">
            Welcome! <b>{appeared_name}</b>
          </div>

          <IoMdCloseCircle onClick={handleprofile} className="close-profile" />
        </div>

        <div className="prof-user1">
          <div>
            <FaUserAlt className="icon-profile" />
          </div>
          <div>
            {username} {appeared_name},<br />
            <span className="user-email">{Email}</span>
          </div>
        </div>
        <div className="prof-user2">
          {" "}
          <div>
            <Link to="https://wa.me/250787239952">
              <FaWhatsapp className="icon-profile" />
            </Link>
          </div>
          <div className="texoc">
            <Link to="https://wa.me/250787239952">Click To Chat</Link>
          </div>
        </div>
        <div className="prof-user3">
          {" "}
          <div className="contacp">
            <Link to="/contact">
              <CgMail className="icon-profile" />
            </Link>
          </div>
          <div className="contactp1">
            <Link to="/contact">Post Your Contact</Link>
          </div>
        </div>
        <div className="prof-user4">
          <div>
            <IoMdLogIn className="icon-profile" onClick={Logout} />
          </div>
          <div>
            <button type="submit" className="quate1" onClick={Logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile