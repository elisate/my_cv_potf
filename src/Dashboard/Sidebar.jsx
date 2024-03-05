import React from 'react'
import { Link } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import './sidebar.scss';
function Sidebar() {
  return (
    <section className="sidebar-container">
      <div className="side-1">
        <div>
          <img src="eo.png" className="im" />
        </div>
        <div>Dtechel</div>
      </div>
      <div className="side-2">
        <div>
          <Link to="/dashboard">
            <MdDashboard className="side-icon" />
          </Link>
        </div>
        <div>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
      <div className="side-3">
        <div>
          <Link to="/">
            {" "}
            <FaAddressBook className="side-icon" />
          </Link>
        </div>
        <div>
          <Link to="/">Booking</Link>
        </div>
      </div>
      <div className="side-4">
        {" "}
        <div>
          <Link to="/getusers">
            {" "}
            <FaRegUser className="side-icon" />
          </Link>
        </div>
        <div>
          <Link to="/getusers">Users</Link>
        </div>
      </div>

      <div className="side-5">
        {" "}
        <div>
          <Link to="/contactdash">
            <MdContactMail className="side-icon" />
          </Link>
        </div>
        <div>
          <Link to="/contactdash">Contact</Link>
        </div>
      </div>

      <div className="side-6">
        {" "}
        <div>
          <Link to="/contactdash">
            {" "}
            <IoMdAdd className="side-icon" />
          </Link>
        </div>
        <div>
          <Link to="/">Upload Blogs</Link>
        </div>
      </div>
      <div className="side-7">
        {" "}
        <div>
          <Link to="/home">
            {" "}
            <RiLogoutCircleRLine className="side-icon" />
          </Link>
        </div>
        <div>
          <Link to="/home">Logout</Link>
        </div>
      </div>
    </section>
  );
}

export default Sidebar