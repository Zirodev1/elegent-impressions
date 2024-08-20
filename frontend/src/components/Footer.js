import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">Elegant Impressions</h3>
          <p className="footer-tagline">
            We believe that it is all about the BIG DREAMS and the small details!
          </p>
        </div>
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <ul>
            <li><a href="tel:+18773038368">(877) 303-8368</a></li>
            <li><a href="mailto:email@email.com">email@email.com</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Location</h3>
          <p>Raleigh, NC</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Elegant Impressions Event and Design Solutions, LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;