import logo from './logo.svg';
import './App.css';
import "./Nav.css";
import React from 'react'
import Nav from './Navbar';
import Nav2 from './Navbar2';
import Main from './Headermain';
import Body from './Bodysection';
import Service from './Services';
import Home from './Home';
import Complaint from './Complaint';
import Information from './Information';
import Related from './Related';
import Career from './Career';
import Contact from './Contact';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './AboutUs';
import Wings from './Wings';
function App() {
  return (
    <div>
      
<BrowserRouter>



<Routes>
    <Route path="/" element={<Home />} />

    
    <Route path="/About" element={<About />} />

    <Route path='/Wings' element={<Wings /> } />
    <Route path='/service' element={<Service /> } />
    <Route path='/complaint' element={<Complaint /> } />
    <Route path='/information' element={<Information /> } />
    <Route path='/related' element={<Related /> } />
    <Route path='/career' element={<Career /> } />
    <Route path='/contact' element={<Contact /> } />





    
</Routes>
      

</BrowserRouter>
    </div>
  );
}

export default App;
