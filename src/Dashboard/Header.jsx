import React from 'react'
import { IoMenu } from "react-icons/io5";

import'./header.scss';
function Header() {
  let userLogin = JSON.parse(localStorage.getItem("userLogin"));
  let token = userLogin?.access_token;
  let username = userLogin?.name;
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
          {username}
        </div>
      </div>
    </section>
  );
}

export default Header