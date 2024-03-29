import React from 'react'
import { IoMenu } from "react-icons/io5";

import'./header.scss';
function Header() {
  let userLogin = JSON.parse(localStorage.getItem("userLogin"));
  let token = userLogin?.access_token;
  let username = userLogin?.name;
  let appeared_name = userLogin?.lastname;
  let Email = userLogin?.email;
  let Xloged = userLogin?.role;
  return (
    <section className='header-container'>
      <div>
        <IoMenu className='header-icon' />
      </div>
      <div className='head-profile'>
        <div><img src='admin.jpg' className='im-a'/></div>
        <div>
       <span className='admin-color'>{Xloged}</span> ,<span className='nod'>{username}</span> {appeared_name}
        </div>
      </div>
    </section>
  );
}

export default Header