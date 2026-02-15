
import React from "react";
import HeaderCopy from "../Header/headercopy";
import Footer from "../Footer.js/footer";
import "./about.css";

function About (){
    return(
        <div className="main" style={{position:"absolute", marginTop:"0px", background:"#212529", color:"white"}}>
           <HeaderCopy/>
            {/* <h1>ABOUT AADITYA...</h1> */}
            <div className="about">
                <div>
                    <img src="about.webp" alt="aaditya photo" style={{ width:"100%", display:"flex",padding:"20px",filter: "grayscale(100%)"}}/>
                </div>
                <div style={{ padding:"20px"}}>
                    <p>I am an Actor, theatre practitioner and acting coach, born and brought up In Nagpur and have done my graduation in <span style={{color:"#e7d0ba"}}><b>“ENGINEERING”</b></span> from Nagpur, India.</p>
                    <p> During my graduation I used to do plays amateurishly and after graduation I got into theatre full time, attending film appreciation courses and simultaneously started preparation for drama schools.</p>
                    <p>In 2018, I was selected in <span style={{color:"#e7d0ba"}}><b>BHARATENDU NATYA ACADEMY, LUCKNOW</b></span> where I had done two year of PG diploma in Dramatic Arts .Going forward I accomplished one year internship in same institute. </p>
                    <p>I love to take physically, psychologically and vocally challenging roles and try to live them fully and fearlessly. I am also associated with <span style={{color:"#e7d0ba"}}><b>RANGVEDA THEATRE & AGRO THEATRE</b></span> as acting coach. </p>
                    <p>In my leisure time I can be found reading, cooking, watching films, listening music, exploring nature or expanding my acting horizons.  </p>
                </div> 
                
            </div> 
            <div className="text">
                <p>Currently I’m residing in city of dreams <span style={{color:"#e7d0ba"}}><b> “MUMBAI”</b></span> and chasing my dream <span style={{color:"#e7d0ba"}}><b>“KYON KI PICTURE ABHI BAAKI HAI MERE DOST”…….</b></span></p>
            </div>
           <Footer/>
        </div>
    );
}

export default About;