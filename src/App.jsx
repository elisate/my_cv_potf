import { useState } from 'react'
import {BrowserRouter,Routes,Outlet,Route} from "react-router-dom";
import './App.css'
import Footer from './components/Footer';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Resp_nav from './components/Resp_nav';
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
      <Route path='/contact' element={<Contact/>}/>
      < Route path='/#land1' element={<Landing/>}/>
      
      
      </Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
