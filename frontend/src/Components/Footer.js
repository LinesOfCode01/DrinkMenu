import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/profile">How it works</Link>
            <Link to="/profile">Bartenders</Link>
            <Link to="/profile">Chefs</Link>
            <Link to="/profile">Creators</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/profile">Contact</Link>
            <Link to="/profile">Support</Link>
            <Link to="/profile">Locations</Link>
            <Link to="/profile">Catering</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Content</h2>
            <Link to="/profile">Submit Videos</Link>
            <Link to="/profile">Submit Pictures</Link>
            <Link to="/profile">Events</Link>
            <Link to="/profile">Influencers</Link>
          </div>
          <div className="footer-link-items">
            <h2>Visit Us</h2>
            <Link to="/profile">Instagram</Link>
            <Link to="/profile">Linkedin</Link>
            <Link to="/profile">Youtube</Link>
            <Link to="/profile">Twitter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
