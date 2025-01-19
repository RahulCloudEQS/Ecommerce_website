// import { Container, Row, Col } from 'react-bootstrap';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer>
//       <Container>
//         <Row>
//           <Col className='text-center py-3'>
//             <p>All Rights are Reserved By Rahul  &copy; {currentYear}</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };
// export default Footer;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { ImTwitter, ImInstagram } from 'react-icons/im';
import g1 from '../images/googleplay.png';
import g2 from '../images/appleplay.png';
import g3 from '../images/original.png';
import g4 from '../images/return.png';
import './footer.css'; // Import your custom CSS file

const Footer = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col sm={6} md={3}>
          <h1 className='text-sm font-semibold'>ONLINE SHOPPING</h1>
          <ul className='text-sm text-slate-500 pt-2'>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ul>
        </Col>
        <Col sm={6} md={3} className='px-1' >
          <h1 className='text-sm font-semibold'>USEFUL LINKS</h1>
          <ul className='text-sm text-slate-500 pt-2'>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Whitehat</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Site Map</li>
            <li>Corporate Information</li>
          </ul>
        </Col>
        <Col sm={6} md={3} className='px-3' >
          <h1 className='text-sm font-semibold'>
            SOON ON MOBILE APP
          </h1>
          <div className='grid grid-cols-2 gap-4 pt-2'>
            <img
              src={g1}
              alt=''
              className='img-fluid'
              style={{ maxWidth: '160px' }}
            />
            <img
              src={g2}
              alt=''
              className='img-fluid'
              style={{ maxWidth: '160px' }}
            />
          </div>
          <h1 className='text-sm font-semibold mt-4'>KEEP IN TOUCH</h1>
          <div className='flex mt-2'>
          <span className='pr-4' onClick={() => window.location.href='https://www.facebook.com'}>
  <AiFillFacebook className='text-xl' style={{ width: '40px', height: '40px', padding: '5px', cursor: 'pointer' }} />
</span>
<span className='text-[grey] mr-4' onClick={() => window.location.href='https://www.twitter.com'}>
  <ImTwitter className='text-xl' style={{ width: '40px', height: '40px',padding: '5px', cursor: 'pointer' }} />
</span>
<span className='text-[grey] mr-4' onClick={() => window.location.href='https://www.youtube.com'}>
  <AiFillYoutube className='text-xl' style={{ width: '40px', height: '35px',padding: '5px', cursor: 'pointer' }} />
</span>
<span className='text-[grey] mr-4' onClick={() => window.location.href='https://www.instagram.com'}>
  <ImInstagram className='text-xl' style={{ width: '40px', height: '40px', cursor: 'pointer' }} />
</span>

          </div>
        </Col>
        <Col sm={6} md={3}  className='px-1' >
          <div className='grid grid-cols-6'>
            <div className='col-span-1'>
              <img src={g3} alt='' className='img-fluid' />
            </div>
            <div className='col-span-5'>
              <span className='font-semibold'>100% ORIGINAL</span> guarantee{' '}
              <br />
              for all products at Emart.com
            </div>
          </div>
          <br />
          <div className='grid grid-cols-6'>
            <div className='col-span-1'>
              <img src={g4} alt='' className='img-fluid' />
            </div>
            <div className='col-span-5'>
              <span className='font-semibold'>Return within 30 days</span> of
              <br />
              receiving your order
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} className='mt-5'>
          {/* Copyright text */}
          <div className='flex mx-auto  text-slate-600'>
            <div className='text-center p-4 text-xl float-left'>
              {' '}
              All Rights are Reserved @2024{' '}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
