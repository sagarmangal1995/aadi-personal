import React from "react";
import Footer from "../Footer.js/footer";
import HeaderCopy from "../Header/headercopy";
import "./dashboard.css"
function Dashboard(){

    return(
        <div>
            <HeaderCopy/>
            <div>
                <div className="imageD">
                    <img src="dashboard.jpg" alt="aaditya photo" className="imgdas"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Dashboard;