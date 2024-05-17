import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contactget.scss";
import { MdDeleteForever } from "react-icons/md";
import ReactPaginate from "react-paginate";
import Notiflix from "notiflix";

function Contactget() {
  const [contact, setContact] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);

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

  // Logic to paginate data
  const offset = currentPage * itemsPerPage;
  const currentItems = contact.slice(offset, offset + itemsPerPage);

  // Change page
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const handledelete = async (id) => {
    try {
      Notiflix.Confirm.show(
        "Confirm Delete Contact",
        "Do you want to delete?",
        "Yes",
        "No",
        async () => {
          await axios.delete(`https://api-potf.onrender.com/deletecontact/${id}`);
          // Update the contact list after deletion
          setContact((prevContacts) => prevContacts.filter((contact) => contact._id !== id));
          Notiflix.Notify.success("Contact deleted successfully");
        },
        () => {
          Notiflix.Notify.info("Delete action canceled");
        }
      );
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure("Failed to delete contact");
    }
  };

  return (
    <div className="contact-holder-dash">
      <div className="cont-dash">
        <span>All contacts</span>
      </div>
      <table>
        <thead>
          <tr className="tab1">
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.subject}</td>
              <td>{item.message}</td>
              <td>
                <MdDeleteForever
                  className="delete-contact-icon"
                  onClick={() => handledelete(item._id)}
                />
              </td>
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
          pageCount={Math.ceil(contact.length / itemsPerPage)}
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

export default Contactget;
