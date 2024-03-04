import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contactget.scss";
import { MdDeleteForever } from "react-icons/md";
import ReactPaginate from "react-paginate";

function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Start from page 1, so currentPage should start from 0
  const [itemsPerPage] = useState(5);

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

  // Logic to paginate data
  const offset = currentPage * itemsPerPage;
  const currentItems = users.slice(offset, offset + itemsPerPage);

  // Change page
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="contact-holder-dash">
      <div className="cont-dash">
        <span>All Users</span>
      </div>
      <table>
        <thead>
          <tr className="tab1">
            <th>name</th>
            <th>Email</th>
            <th>Phone number</th>
            
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              
            
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(users.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default Users;
