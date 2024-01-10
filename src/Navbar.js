import React from "react";
import lg from './Images/yellow.png';
import './App.css';


function Nav()

{

    
    return(
        <div>
              <header className='header'> 
        
        <img src={lg}   className='logo'/>

<nav className='navbar'> 
         <ul className='nav-list '>
          <li className='nav-links'>Home</li>
          <li className='nav-links'>Home</li>

          <li className='nav-links'>Home</li>

          <li className='nav-links'>Home</li>

        </ul>
        </nav>
 
                </header>
   

        </div>
    )



}
export default Nav;