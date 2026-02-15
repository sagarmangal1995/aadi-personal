import React from "react";
import HeaderCopy from "../Header/headercopy";
import Footer from "../Footer.js/footer";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import './connect.css';

function Connect() {
    return (
        <div className="main">
            <HeaderCopy />
            <div className="container-sm" >
                <div className="row">
                    <div className="col-12">
                        <div className="connect">
                            <div style={{ display: "flow-root", marginTop:"50px"}} >
                                <h1><b>Let's Work Together!</b></h1>
                                <p>Send Me a Message Down Below!</p>
                                {/* <div style={{ width: 450, padding: "20px" }}> */}
                                {/* <Form>
                                    <Form.Group>
                                        <Form.Label>Enter your full name:</Form.Label>
                                        <Form.Control type="text"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Enter your email address:</Form.Label>
                                        <Form.Control type="email"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Subject:</Form.Label>
                                        <Form.Control type="text"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control type="textarea"
                                        />
                                    </Form.Group>
                                    <button type="button" class="btn btn-secondary btn-lg m-3">send</button>
                                </Form> */}
                                <div style={{ marginTop: "50px" }}>
                                    <h3><MailOutlineIcon /> aaditya7bna@gmail.com</h3>
                                    <h3><FaPhoneAlt /> <FaWhatsapp /> 7020951196</h3>
                                </div>
                                <section className='mb-4'>

                                    <a className='btn btn-outline-light btn-floating m-1'
                                        href='https://m.facebook.com/aaditya.dhanraj.146'
                                        role='button'>
                                        <FacebookOutlinedIcon baseClassName="fas" className="fa-brands fa-facebook" />
                                    </a>

                                    <a className='btn btn-outline-light btn-floating m-1'
                                        href='https://www.instagram.com/iamaaditya_dhanraj/?fbclid=IwAR2N7YGisxa1rFrqVyFmyxMOcUBnfxtHQp7fkuDCtMQS8Tid3MUGgAIECNM'
                                        role='button'>
                                        <InstagramIcon baseClassName="fas" className="fa-brands fa-instagram" />
                                    </a>
                                </section>

                            </div>

                            <div style={{ display: "contents" }}  >
                                <img src="connect.jpg" alt="aaditya photo" className="imga" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}
export default Connect;