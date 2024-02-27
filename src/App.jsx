import { useState } from 'react'
import {BrowserRouter,Routes,Outlet,Route} from "react-router-dom";
import './App.css'
import Footer from './components/Footer';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Login from './components/Login';
import Sign_up from './components/Sign_up';
import Services from './components/Services';
 const Layout =()=>{
  return(
   <>
     <header>
      <Nav />
     </header>
    <Outlet />
    <footer> 
      <Footer/>
    </footer>
   </>
   )
 };

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Landing/>}/>
      < Route path='/home' element={<Landing/>}/> 
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/blog' element={<Services/>}/>
      </Route>
      <Route path='/log' element={<Login/>}/>
      <Route path='/sign' element={<Sign_up/>}/>
      
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
