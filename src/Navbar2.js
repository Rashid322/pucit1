import React, { useState } from "react";
import lg from './logo.svg';
import './Nav.css';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";

function Nav2() {

const[list,setList]=useState(false)


    return (
        <div>
            <header className='header2'>






                <nav className='navbar2'>
                    <ul className='nav-list2 '>

                        <Link to="/">
                            <li className='nav-links2'>Home</li>
                        </Link>
                        <Link to="/about">
                            <li className='nav-links2'>About Us</li>
                        </Link>

                        <Link to="/wings">
                            <li className='nav-links2'>Wings</li>
                        </Link>
                        <Link to="/service">
                            <li className='nav-links2'>services</li>

                        </Link>


                        <Link to="/complaint">
                            <li className='nav-links2'>complaint Cell</li>

                        </Link>

                        <Link to="/information">
                            <li className='nav-links2'>Public information </li>

                        </Link>

                        <Link to="/related">
                            <li className='nav-links2'>related</li>

                        </Link>
                        <Link to="/career">
                            <li className='nav-links2'>career</li>

                        </Link>

                        <Link to="/contact">
                            <li className='nav-links2'>contact us</li>

                        </Link>



                    </ul>
                </nav>

                
                <div className="mobile-nav-icon">

                    <IoMdClose name="exit" className="icon" />


                    <FiMenu name="menu" className="icon" />



                </div>



            </header>


        </div>

    )



}
export default Nav2;