import { useState } from 'react'
import {BrowserRouter,Routes,Outlet,Route} from "react-router-dom";
import './App.css'
import Footer from './components/Footer';
import Landing from './components/Landing';
import Nav from './components/Nav';
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
      
      </Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
