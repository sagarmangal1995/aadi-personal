import React from "react";
import HeaderCopy from "../Header/headercopy";
import Footer from "../Footer.js/footer";
import "./home.css";

function Home() {
    return (
        <div className="main">
            <HeaderCopy />
            <div className="container-sm">
                <div className="row">
                    <div className="clo-12" style={{position:"relative"}}>
                        <div>
                            <img src="AadityaPhotoa.jpg" alt="aaditya photo" style={{ width: "100%" }} className="aadiP"/>
                            {/* <img src="aboutmview.jpg" style={{display:"none"}} className="mviewimg"/> */}
                            <img src="homeMview.jpg" style={{display:"none"}} className="tviewimg"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Home;