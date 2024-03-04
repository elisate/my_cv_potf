import React from 'react'
import {  Outlet} from "react-router-dom";
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
function LayoutDash() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
}

export default LayoutDash