import React from "react";
import "./Nav.css";
import logo from "./Images/fialogo.png";
import fb from "./Images/f.png";
import wa from "./Images/t.png";
import ln from "./Images/l.png";


function Main(){
    return(
<div>
    <div className="mainheader">

<nav className="mainnav">
    <ul className="oderlist">
   <li className="link">Welcome to FIA</li>
    <marquee behavior="scroll" direction="right" scrollamount="15" className="marqueetext" s>  ایف آئی اے نے تجاوزات / ناجائز قابضین سے 25 ارب روپے کی اراضی واگزار کرا لی FIA recovered land worth Rs25 billion from encroachers / illegal Occupants آسٹریلین کمسن لڑکی کو جنسی طور پر ہراساں کرنے میں ملوث ملزم گرفتار۔ ایف آئی اے منظم جرائم کے خلاف قائدانہ کردار ادا کر رہا ہے ڈائریکٹر جنرل ایف آئی اے محسن حسن بٹ</marquee>
    <li className="link"></li>

   </ul>
</nav>

</div>


<section className="headersection">
    <img src={logo} alt="fialogo" className="fialogo" />
    
<h5 className="fialogo"></h5>
<ul className="orderlist">
   <a href="https://www.facebook.com/login/device-based/regular/login/"> <li className="ilist"><img src={fb}  className="logolink"/></li> </a>
   <a href="https://twitter.com/FIA_Agency?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"> <li className="ilist"><img src={wa}  className="logolink"/></li></a>
    <li className="ilist"><img src={ln}  className="logolink"/></li>

</ul>
</section>



        </div>



    )
}
export default Main;
