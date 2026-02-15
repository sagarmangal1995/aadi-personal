import React from "react";
import Footer from "../../Footer.js/footer";
import HeaderCopy from "../../Header/headercopy";
import "./theaterwork.css";
import ReactPlayer from "react-player";


function TheaterWork() {
    return (
        <div className="main">
            <HeaderCopy />
            {/* <div className="abc"> 
                <div className="axyz">
                    <div>
                    <p>
                        "All the world's a stage, and all the men and women merely players. They have their exits and their entrances; and one man in his time plays many parts."
                         -william Shakespeare 
                    </p>
                    <p>                                                                                       
                        I am doing theatre since 2017 and worked with eminent theatre personalities like BANSI KAUL, SURYAMOHAN KULSHRESHTHA, SHUBHADIP RAHA, HARISH ETHAPE, JOY MEETEI, C.R.JAMBE, SALIM AARIF, and many more.
                        I think “THEATRE BRINGS ALL ESSENTIAL CHANGES IN HUMAN BEING, THAT MAKE ONES MORE ZESTFUL”.
                    </p>
                    </div>
                </div>
                <div className="firstimg">
                    <img src="aaditheater.jpg" alt="theater" style={{width:"60%", padding:"10px"}}/>
                </div>
            </div>
            <div className="tdata">
                <div className="imgleft">
                    <img src="theater1.jpg" alt="theater" style={{width:"100%"}}/>
                </div>
                <div className="video">
                    <ReactPlayer
                     url="https://www.youtube.com/watch?v=S82TF3D7cCY"
                    />
                </div>
            </div>
            <div className="imgmain">
                <div className="imgfirst">
                    <img src="theater1.jpeg" alt="theater1" style={{width:"100%", padding:"10px"}}/>
                    <img src="theater2.jpeg" alt="theater2" style={{width:"100%", padding:"10px"}}/>
                    <img src="theater3.jpeg" alt="theater3" style={{width:"100%", padding:"10px"}}/>
                </div>
            </div>
            <div className="imgmain2">
                <div className="imgsecond">
                    <img src="theater5.jpg" alt="theater5" style={{width:"100%", padding:"10px"}}/>
                    <img src="theater6.jpg" alt="theater6" style={{width:"100%", padding:"10px"}}/>
                    <img src="theater7.jpg" alt="theater7" style={{width:"100%", padding:"20px"}}/>
                </div>
            </div>
            <div className="imgmanin3">
                <div className="imgthird">
                    <img src="theater9.jpg" alt="theater9" style={{width:"100%", padding:"20px"}}/>
                    <img src="theater10.jpg" alt="theater9" style={{width:"100%", padding:"20px"}}/>
                    <img src="theater4.jpg" alt="theater4" style={{width:"100%", padding:"20px"}}/>
                </div>
            </div>
            <div>
                <Footer/>
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="axyz">
                            <p>
                                "All the world's a stage, and all the men and women merely players. They have their exits and their entrances; and one man in his time plays many parts."
                                <span style={{ color: "#e7d0ba" }}>-william Shakespeare</span>
                            </p>
                            <p>
                                I am doing theatre since 2017 and worked with eminent theatre personalities like BANSI KAUL, SURYAMOHAN KULSHRESHTHA, SHUBHADIP RAHA, HARISH ETHAPE, JOY MEETEI, C.R.JAMBE, SALIM AARIF, HEMENDRA BHATIA, DINESH KHANNA, ANIL RASTOGI, CHITRA MOHAN, and many more.
                            </p>
                            <p>
                            I think “THEATRE BRINGS ALL ESSENTIAL CHANGES IN HUMAN BEING, THAT MAKE ONES MORE ZESTFUL”.
                            </p>
                        </div>
                        <img src="theater1.jpg" alt="theater" style={{ width: "100%", padding: "10px" }} />
                        <img src="theater3.jpeg" alt="theater3" style={{ width: "100%", padding: "10px" }} />
                        <img src="theater2.jpeg" alt="theater2" style={{ width: "100%", padding: "10px" }} />
                    </div>
                    <div className="col-6">
                        <img src="aaditheater.jpg" alt="theater" style={{ width: "100%", padding: "10px" }} />
                        <div className="video">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=S82TF3D7cCY"
                            />
                        </div>
                        <img src="theater1.jpeg" alt="theater1" style={{ width: "100%", padding: "10px" }} />
                        <img src="theater9.jpg" alt="theater9" style={{ width: "100%", padding: "10px" }} />
                    </div>
                    <div style={{ display: "flex", }}>
                        <div>
                            <img src="theater5.jpg" alt="theater5" style={{ width: "100%", padding: "10px" }} />
                        </div>
                        <div>
                            <img src="theater7.jpg" alt="theater7" style={{ width: "100%", padding: "10px" }} />
                        </div>
                        <div>
                            <img src="theater6.jpg" alt="theater6" style={{ width: "100%", padding: "10px" }} />
                        </div>
                    </div>
                    <div className="col" style={{ display: "flex" }}>
                        <img src="theater10.jpg" alt="theater9" style={{ width: "50%", padding: "10px" }} />
                        <img src="theater4.jpg" alt="theater4" style={{ width: "50%", padding: "10px" }} />
                    </div>
                    <div style={{ display: "flex", }}>
                        <div>
                            <img src="theater12.jpg" alt="theater5" style={{ width: "100%", padding: "10px" }} />
                        </div>
                        <div>
                            <img src="theater11.jpg" alt="theater7" style={{ width: "100%", padding: "10px" }} />
                        </div>
                        <div>
                            <img src="theater13.jpg" alt="theater6" style={{ width: "100%", padding: "10px" }} />
                        </div>
                    </div>
                    <div className="col" style={{ display: "flex" }}>
                        <img src="theater15.jpg" alt="theater9" style={{ width: "50%", padding: "10px" }} />
                        <img src="theater14.jpg" alt="theater4" style={{ width: "50%", padding: "10px" }} />
                    </div>
                    <div>
                    <img src="theater16.jpg" alt="theater9" style={{ width: "50%", padding: "10px" }} />
                    <img src="theater17.jpg" alt="theater9" style={{ width: "50%", padding: "10px" }} />

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TheaterWork;