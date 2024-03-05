import React from "react";
import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import './status_loged.scss';
import Profile from "./Profile";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Status_loged = () => {
    //any change
    const [profile, setProfile] = useState(false);
    
    const handleprofile = () => {
      setProfile(!profile);
    };

  let userLogin = JSON.parse(localStorage.getItem("userLogin"));
  let token = userLogin?.access_token;
  let username = userLogin?.name;
  let Email = userLogin?.email;
  let Xloged = userLogin?.role;
  console.log("wwww", Xloged);
  console.log("nnnnnnnnn",username);
  function Logout() {
    localStorage.removeItem("userLogin");
    window.location.href = "/";
  }
  if (Xloged == undefined){
    return (
      <div className="status-a">
        <Link to="/log" title="Reserve">
          <button className="quate">Login</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="logout-status">
        <div>
          <div className="text-status">
            <FaRegCircleUser
              className="update-profile"
              onClick={handleprofile}
            />{" "}
            <div className="email" onClick={handleprofile}>
              {" "}
              {Email}
            </div>
            <RiArrowDropDownLine onClick={handleprofile}
             className="drop-down-status"
            />
          </div>
        </div>
        {profile && <Profile handleprofile={handleprofile} />}
      </div>
    );
  }
};
export default Status_loged;


