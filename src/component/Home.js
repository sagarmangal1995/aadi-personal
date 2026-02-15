import HeaderCopy from "../Header/headercopy";
import Footer from "../Footer.js/footer";
import "./home.css";

function Home() {
    return (
        <div className="main">
            <HeaderCopy />

            <div className="container-sm">
                <div className="row">
                    <div className="col-12" style={{ position: "relative" }}>
                        <div>
                            {/* Main profile image */}
                            <img
                                src="AadityaPhotoa.jpg"
                                alt="Aaditya"
                                style={{ width: "100%" }}
                                className="aadiP"
                            />

                            {/* Tablet / mobile view image (decorative) */}
                            <img
                                src="homeMview.jpg"
                                alt=""
                                style={{ display: "none" }}
                                className="tviewimg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
