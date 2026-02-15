import React from "react";
import { loadCSS } from 'fg-loadcss';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
  

export default function Footer() {

    React.useEffect(() => {
        const node = loadCSS(
          'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
          // Inject before JSS
          document.querySelector('#font-awesome-css') || document.head.firstChild,
        );
        return () => {
            node.parentNode.removeChild(node);
          };
        }, []);
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
 
          <a className='btn btn-outline-light btn-floating m-1' 
            href='https://m.facebook.com/aaditya.dhanraj.146'
            role='button'>
              <FacebookOutlinedIcon baseClassName="fas" className="fa-brands fa-facebook"/>
          </a>
          
          <a className='btn btn-outline-light btn-floating m-1' 
            href='https://www.instagram.com/iamaaditya_dhanraj/?fbclid=IwAR2N7YGisxa1rFrqVyFmyxMOcUBnfxtHQp7fkuDCtMQS8Tid3MUGgAIECNM'
            role='button'>
            <InstagramIcon baseClassName="fas" className="fa-brands fa-instagram" />
          </a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Powered By:
        <p>Sagar Mangal - sagar.t.mangal@gmail.com </p>
      </div>
    </MDBFooter>
  );
}