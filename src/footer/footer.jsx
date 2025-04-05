// import { useState, useEffect } from "react";
// import "./footer.css"
// import adyodhya from "../images/Ayodhya2.jpg";
// import logo from "../images/logo.png";
// import { CaretRightOutlined } from "@ant-design/icons";
// import { FacebookIcon, InstagramIcon, PhoneCallIcon, MailIcon, LocationIcon } from "../Icons/Icons";
// import { FacebookOutlined } from "@ant-design/icons";
// import { SocialIcon } from 'react-social-icons'

// function footer() {
//     return (
//         <>
//             <div className="footer">
//                 <div className="footer-img">
//                     <img src={adyodhya} alt="adyodhya picture" className="footer-img" />
//                 </div>
//                 <div className="branding">
//                     <img src={logo} alt="travel logo" className="logo-img" />
//                     <div className="branding-name"> Sanwariya Travels</div>
//                     <div className="branding-info">Sanwariya Travels is well known and one of the best Travel Agency in Chandigarh, Panchkula, Baltana, Zirakpur & Mohali.</div>

//                 </div>
//                 <div className="list">
//                     <ul>
//                         <li><CaretRightOutlined /><span>About us</span></li>
//                         <li><CaretRightOutlined /><span>Gallery</span></li>
//                         <li><CaretRightOutlined /><span>Facilities</span></li>
//                         <li><CaretRightOutlined /><span>Reviews</span></li>
//                         <li><CaretRightOutlined /><span>Contact us</span></li>
//                     </ul>
//                 </div>
//                 <div className="social-icons">
//                     <div className="f">
//                     <span className="facebookicon">
//                         <FacebookIcon />
//                     </span>
//                     <span className="instagramicon">
//                         <InstagramIcon />
//                     </span>
//                     </div>

//                 </div>
//                 <div className="phonecall">
//                     <PhoneCallIcon /><span>+918901755193</span>
//                 </div>
//                 <div className="mailicon">
//                     <MailIcon /><span>manishapanchal5591@gmail.com</span>
//                 </div>
//                 <div className="locationicon">
//                     <LocationIcon /><span>Shop no 16, Main market, jain faishners, road, Baltana, Panchkula, Baltana, Punjab 140604</span>
//                 </div>
//             </div>
//             <div className="bottom">
//                 <span>© Copyright 2025 Shri Sawariya Travels. All rights reserved</span>
//                 <span className="bottom-left">Privacy & Policy | Terms & Conditions</span>
//             </div>

//         </>
//     )
// }

// export default footer;

import React from "react";
import "./footer.css";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

import {
  CaretRightOutlined,
  FacebookFilled,
  InstagramFilled,
  PhoneFilled,
  MailOutlined,
  EnvironmentFilled,
} from "@ant-design/icons";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="enhanced-footer">
      <div className="footer-content">
        <div className="footer-section branding">
          <img src={logo} alt="Sanwariya Travels Logo" className="footer-logo" />
          <h3 className="footer-title">Sanwariya Travels</h3>
          <p className="footer-description">
            Your trusted travel partner since 2020, providing exceptional travel services
            across Chandigarh, Panchkula, Baltana, Zirakpur & Mohali.
          </p>
        </div>

        <div className="footer-section links">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <CaretRightOutlined />
              <Link to="/aboutUs" className="footer-link">About Us</Link>
            </li>
            <li>
              <CaretRightOutlined />
              <Link to="/gallery" className="footer-link">Gallery</Link>
            </li>
            <li>
              <CaretRightOutlined />
              <Link to="/facilities" className="footer-link">Our Services</Link>
            </li>
            <li>
              <CaretRightOutlined />
              <Link to="/reviews" className="footer-link">Client Reviews</Link>
            </li>
            <li>
              <CaretRightOutlined />
              <Link to="/contactUs" className="footer-link">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3 className="footer-title">Get in Touch</h3>
          <ul className="contact-links">
            <li>
              <PhoneFilled className="contact-icon" />
              <a href="tel:+918901755193">+91 89017 55193</a>
            </li>
            <li>
              <MailOutlined className="contact-icon" />
              <a href="mailto:sanwariyatravel1999@gmail.com">
                sanwariyatravel1999@gmail.com
              </a>
            </li>
            <li>
              <EnvironmentFilled className="contact-icon" />
              <span>Shop no 16, Main market, Jain Faishners Road,
                Baltana, Panchkula, Punjab 140604</span>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a 
              href="https://www.facebook.com/share/1DKfTgKALn/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <FacebookFilled className="social-icon" />
            </a>
            <a 
              href="https://www.instagram.com/sanwariya_travel1999?igsh=OXJhMjM3MDcwbjY1" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <InstagramFilled className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <span>© {currentYear} Shri Sanwariya Travels. All rights reserved.</span>
          <div className="bottom-links">
            <Link to="/privacy-policy" className="bottom-link">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms" className="bottom-link">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;