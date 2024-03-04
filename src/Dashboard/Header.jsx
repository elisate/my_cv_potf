import React from 'react'
import { IoMenu } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import'./header.scss';
function Header() {
  return (
    <section className='header-container'>
      <div>
        <IoMenu className='header-icon' />
      </div>
      <div className='head-profile'>
        <div><img src='admin.jpg' className='im-a'/></div>
        <div>
            Dushimiyimana Elisa
        </div>
      </div>
    </section>
  );
}

export default Header