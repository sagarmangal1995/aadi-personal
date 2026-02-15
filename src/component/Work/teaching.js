import React from "react";
import HeaderCopy from "../../Header/headercopy";
import Footer from "../../Footer.js/footer";
import ReactPlayer from "react-player";

function Teaching (){
    return(

        <div className="main">
            <HeaderCopy/>
            <div className="container-sm">
                <div className="row">
                    <div className="col-12">
                        <div>       
                            <p style={{marginTop:"20px"}}>
                            I thought teaching is an integral part of acting and I truly enjoy it. I like to work on senses, rhythm, observation, and different aspects regarding acting.
                            </p>
                            <p style={{marginTop:"20px"}}>
                            As a trainer I feel I must train students in such a way so that they can understand things easily  <span style={{ color: "#e7d0ba" }}>“IF ACTING IS AN ART THEN TEACHING ACTING IS GREATEST ART”</span>
                            </p>
                            <div style={{display:"flex",justifyContent:"center" }}>
                            <ReactPlayer
                            url="https://www.youtube.com/watch?v=MkpgF0CjErU"
                            />
                            </div>
                            {/* <div className="down"> */}
                            {/* <img src="teaching1.jpg" alt="teaching1" style={{width:"80%", padding:"20px"}}/> */}
                            <img src="teaching3.jpg" alt="teaching3" style={{width:"47%", padding:"20px"}}/>
                            <img src="teaching5.jpg" alt="teaching3" style={{width:"53%", padding:"20px"}}/>
                            <img src="teaching2.jpg" alt="teaching2" style={{width:"80%", padding:"20px"}}/>
                            <img src="teaching4.jpg" alt="teaching3" style={{width:"49.5%", padding:"20px"}}/>
                            <img src="teaching6.jpg" alt="teaching3" style={{width:"50.5%", padding:"20px"}}/>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Teaching;