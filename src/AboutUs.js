import React from "react";
import Main from "./Headermain";
import Nav2 from "./Navbar2";
import "./About.css";
import img1 from "./Images/ab1.jpeg"
import Body from "./Bodysection";
import Footersection from "./Footer";
function About(){


    return(
        <>
        <Main/>
        <br/>
        <Nav2 />
        <br/>
        

        <div className="about">
        <h1  style={{margin:"auto"}} >About</h1>
            </div>
            <div className="aboutsection">

                <div className="box1">
                    <h1 className="heading">Mandate</h1>
                    <ol>
                        <li>Investigation into specialized and organized crime</li>
                        <li>Immigration and Anti Smuggling</li>
                        <li>Personal Identification Secure Comparison and Evaluation System(PISCES Computerized Control and Exit)</li>
                        <li>Anti Human Smuggling and Trafficking</li>
                        <li>Counter Terrorism(Special Investigation Group)</li>
                        <li>Money Laundering( Excluding narcotics and anti corruption proceed)</li>
                        <li>Automated Finger Print Identification System(AFIS)</li>
                        <li>Cyber Crime and Plastic Money Fraud</li>
                        <li>Intellectual Property Rights(IPR)</li>
                        <li>Interpol (National Central Bureau)</li>
                        <li>National Criminal Database(NCDB)</li>
                        <li>Forensic and Technical Support</li>
                        <li>Training and Capacity Building</li>


                    </ol>


                </div>

                <div className="box2">
                    <img className="aboutimg" src={img1} />
                    
                <p className="imgtext">A federally controlled police establishment first came into existence in 1942 during WWII, named as Special Police Establishment, to take up investigation of corruption, rampant in Supplies and Procurement Department.</p>
                    
                </div>
                <div className="box1">
                    <h1 className="heading">ORIGIN & HISTORY</h1>
                    <p>The Pakistan Special Police Establishment (PSPE) department from investigation of the offences of bribery, and corruption against central government employees, was given powers to investigate cases relating to the offences. In report of “Police Reform”, submitted to cabinet on 07-04-1972, recommended establishment of Federal Police Organization to deal with smuggling, narcotics, currency offences, enforcement of laws relating to foreigners, immigration and passports offences having inter-provincial ramification. Consequently FIA Act, 1974. (Act VIII-4 of 1975) was promulgated on 13-01-1975, bringing Federal Investigation Agency (FIA) into existence.</p>

                </div>
                <div className="box2">
                <h2 className="strip">Mision</h2>
                <p className="imgtext">To achieve excellence in FIA by promoting culture of merit, providing continuous professional training, ensuring effective internal accountability, encouraging use of technology and having a meaningful feedback mechanism.</p>

                </div>




                <div className="box1">
                    <h1 className="heading">ABOUT THE FIA</h1>
                    <p>The Federal Investigation Agency (Urdu: وفاقی تحقیقاتی ادارہ‎; reporting name: FIA) is a border control, criminal investigation, counter-intelligence and security agency under the control of the Interior Secretary of Pakistan, tasked with investigative jurisdiction on undertaking operations against terrorism, espionage, federal crimes, smuggling as well as infringement and other specific crimes.</p>

                </div>
                <div className="box2">
                <h2 className="strip">Vission</h2>
                <p className="imgtext">A law enforcement agency which not only enjoys the respect of the society, for its integrity, professional competence, and impartiality but also serves as a role model for provincial police forces.</p>

                </div>

            </div>


<Footersection/>

        </>
    )
}
export default About;