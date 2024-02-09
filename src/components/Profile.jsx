import React from 'react'
import './profile.scss' 
import { IoMdCloseCircle } from "react-icons/io";
import { FaUserAlt, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import { Link } from 'react-router-dom';


function Profile({handleprofile}) {
  return (
    <div className="modal-overlay">
      <div className="profile-container">
        <div className="prof-a">
          <div className="prof-text">Welcome!</div>

          <IoMdCloseCircle onClick={handleprofile} className="close-profile" />
        </div>

        <div className="prof-user1">
          <div>
            <FaUserAlt className="icon-profile" />
          </div>
          <div>Dushimiyimana Elisa</div>
        </div>
        <div className="prof-user2">
          {" "}
          <div>
            <FaWhatsapp className="icon-profile" />
          </div>
          <div>Click To Chat</div>
        </div>
        <div className="prof-user3">
          {" "}
          <div>
            <Link to="/contact">
              <CgMail className="icon-profile" />
            </Link>
          </div>
          <div>
            <Link to="/contact">Post Your Contact</Link>
          </div>
        </div>
        <div className="prof-user4">
          {" "}
          <div>
            <IoMdLogIn className="icon-profile" />
          </div>
          <div>
            <button type="submit" className="login-logout">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile