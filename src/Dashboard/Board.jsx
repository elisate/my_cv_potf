import React from "react";
import "./board.scss";
import Chart from "./Chart.jsx";
import Chartb from "./Chartb.jsx";
import Users from "./Users.jsx";
import { FaRegAddressBook } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { FaUsers } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa6";
import { useState, useEffect } from "react";
import axios from "axios";
function Board() {
  
  //users length
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      // let auth = JSON.parse(localStorage.getItem("userLogin"));
      try {
        const response = await axios.get(
          "https://api-potf.onrender.com/users",
          {
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${auth.access_token}`,
            },
          }
        );
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  //contact lenth
  const [contact, setContact] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://api-potf.onrender.com/getcontact",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        setContact(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <section className="board">
      <div className="card-holder">
        <div className="card-board1">
          <Chart className='prop-chart'/>
          <div className="card-text-a">
            <div className="text-hold">
              {" "}
              <span>Booking</span>
              <span className="text">5</span>
            </div>
            <FaRegAddressBook className="icon-b" />
          </div>
        </div>
        <div className="card-board2">
          <Chart />
          <div className="card-text-a">
            <div className="text-hold">
              {" "}
              <span>Contacts</span>
              <span className="text">{contact.length}</span>
            </div>
            <GrContact className="icon-b" />
          </div>
        </div>
      </div>
      <div className="card-holder1">
        <div className="card-board3">
          <Chart />
          <div className="card-text-a">
            <div className="text-hold">
              {" "}
              <span>users</span>
              <span className="text">{users.length}</span>
            </div>
            <FaUsers className="icon-b" />
          </div>
        </div>
        <div className="card-board4">
          <Chart />
          <div className="card-text-a">
            <div className="text-hold">
              {" "}
              <span>Blogs Uploaded</span>
              <span className="text">5</span>
            </div>
            <FaBlog className="icon-b" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="title-user"> Latest Users</div>

          <div className="dashboard-table">
            <Users />
          </div>
        </div>
      </div>
      <div className="end-content">
        <div>
          <span className="book-year-text">Booking per year</span>
        </div>
        <div className="book-chart">
          <Chartb />
        </div>
      </div>
    </section>
  );
}

export default Board;
