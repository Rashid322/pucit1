import React from "react";
import './Body.css';
import img from "./Images/fiaimg.jpeg"
import  com from "./Images/fialogo.png"
function Body(){
    return(
        <div className="bodysection">
           
<div className="imgbody">

<h2 className="headingbox">Director General's Message</h2>
<h3 className="line"></h3>
<p className="textbox">  Federal Investigation Agency is the premier agency of Pakistan at national level to investigate federal crimes. These include transnational organized crime, trafficking in persons, smuggling of migrants, cybercrimes, money laundering, terrorism financing, intellectual .property rights and electronic & physical bank frauds. ...</p>
<button className="buttonbox">Click to Read More</button>
</div>

<div className="imgbody1">
    <img src={img} alt="img" className="imgboxR" />
    <div className="text">

    <h2 className="headingbox">Director General FIA</h2>
    <h3 className="line"></h3>

    <p className="textbox"> Mr. Mohsin Hassan Butt PSP, PPM assumed charge on 01.08.2022 as Director General Federal Investigation Agency(FIA). Prior to that he laid a wreath at Yadgar-e-Shuhada and paid tributes to the martyrs of FIA.

Dated: 2022-08-01</p>
<button className="buttonbox2">More Information</button>


    </div>

</div>


           </div>

           
    )
}
export default Body;