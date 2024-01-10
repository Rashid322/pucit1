import React, { useState } from "react";
import one from "./Images/servicepic1.png";
import two from "./Images/servicepic2.png";
import three from "./Images/servicepic3.png";
import four from "./Images/servicepic4.jpg";
import five from "./Images/servicepic5.png";
import six from "./Images/servicepic6.png";
import Nav2 from "./Navbar2";
import Main from "./Headermain";
import Footersection from "./Footer";
import './Services.css';
 
function Service(){




    return(








<>
<Main/>
<br/>
<Nav2 />
<br/>


        <h1 style={{textAlign:"center",marginTop: "20px"}}>Services</h1>

        <div className="container" >
            



<br />
<div className="s-card">

<img  className="s-img" src={one}/>
<h2 className="s-title">Cybercrime Wing </h2>
<p className="s-text">Crime through Technological devices or Internet, which includes Social Harassment.</p>
</div>

<div className="s-card">

<img  className="s-img" src={two}/>
<h2 className="s-title">Immigration Wing  </h2>
<p className="s-text">Immigration, Exit Control List, Black List, Provisional National Identification List (PNIL),Travelling Record (IBMS), Anti Human Trafficking and Smuggling</p>
</div>
<div className="s-card">

<img  className="s-img" src={three}/>
<h2 className="s-title">Economic Crime Wing </h2>
<p className="s-text">Money Laundering, Hundi/ Hawala, Illegal Money or Value Transfer Services (MVTs), STRs/FIRs (Financial Intelligence Reports) & fraud committed in relation with banking business, wilful default matters etc.</p>
</div>
<div className="s-card">

<img  className="s-img" src={four}/>
<h2 className="s-title">Counter Terrorism Wing  </h2>
<p className="s-text">High Profile Cases with Transnational element, Terrorism and Terrorist Financing, Cyber Terrorism and Blaspheming</p>
</div>
<div className="s-card" >

<img  className="s-img" src={five} />
<h2 className="s-title">Anti Corruption Wing </h2>
<p className="s-text">Related to organizational crimes (CDA, NADRA, all Federal organizations), Spurious Drugs, Theft of Electricity ,Gas and Oil</p>
</div>
<div className="s-card">

<img  className="s-img" src={six}/>
<h2 className="s-title">NCB INTERPOL </h2>
<p className="s-text">Co-ordination and operation with (Custom, ANF, NAB and Provincial Police) of Pakistan. Linked with INTERPOL at Lyon France.</p>
</div>







        </div>
         <Footersection />
        </>
    )
}
export default Service; 