import React from "react";
import HeaderCopy from "../../Header/headercopy";
import ReactPlayer from "react-player";
import Footer from "../../Footer.js/footer";
import "./filmwork.css"

function FilmWork() {
    return (
        <div className="main">
            <HeaderCopy />
            <div className="container">
                <div className="row">
                    <div className="film">
                        <p>Worked in a webseries <span style={{ color: "#e7d0ba" }}><b>“INSPECTOR AVINASH”</b></span> directed by Neerraj Pathak.</p>
                    </div>
                    <div className="film">
                        <p>Worked in webseries <span style={{ color: "#e7d0ba" }}><b>"KATHMANDU CONNECTION-2"</b></span> directed by Sachin pathak</p>
                    </div>
                    <h1><b>SELF WORK</b></h1>
                    <div className="col">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=Xi_rohf6bbY"
                        />
                    </div>
                    <div className="col">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=yemIwRRA_mg"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default FilmWork;