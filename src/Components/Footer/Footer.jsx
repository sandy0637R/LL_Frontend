import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          {/* Contact Information Section */}
          <div className="footer-col">
            <h4 style={{ fontWeight: "800" }}>LandLord</h4>
            <p>Mon-Fri: 9 AM - 6 PM</p>
            <p>View Our Office on Google Maps</p>
            <p>123 Main St, City</p>
            <p>456 Another St, City</p>
          </div>

          {/* Quick Links Section */}
        </div>

        {/* Newsletter Subscription Section */}
        <div className="footer-section">
          <div className="footer-col">
            <h5>Stay Updated!</h5>
            <p>
              Subscribe to our newsletter for exclusive offers, market trends,
              and updates.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-input"
            />
            <button className="footer-btn">Subscribe</button>
          </div>
        </div>

        {/* Social Media and Trust Section */}
        <div className="footer-section">
          <div className="footer-col">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaTwitter />
            </div>
            <div className="app-icons">
              <IoLogoGooglePlaystore />
              <IoLogoAppleAppstore />
            </div>
          </div>

          <div className="footer-col">
            <h5>Trust & Security</h5>
            <div>
              <img src="/assets/ssl.jpg" alt="SSL Seal" className="footer-cert" />
              <img
                src="/assets/iso.jpg"
                alt="ISO Certification"
                className="footer-cert"
              />
            </div>
          </div>

          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Sitemap</li>
              <li>Accessibility Statement</li>
            </ul>
          </div>
        </div>

        {/* Dynamic Features Section */}
        <div className="footer-section"></div>
      </footer>
      <div className="footer-about-sec">
        <div className="footer-col">
          <h5>About</h5>
          <ul>
            <li>About Us</li>
            <li>Team/Leadership</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li>Property Management</li>
            <li>Tenant Services</li>
            <li>Maintenance Requests</li>
            <li>Property Listings</li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Resources</h5>
          <ul>
            <li>FAQs</li>
            <li>Guides</li>
            <li>News and Updates</li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Recent Blog Posts</h5>
          {/* Assuming dynamic content can be added here */}
        </div>

        <div className="footer-col">
          <h5>Featured Listings</h5>
          {/* Featured Listings would go here */}
          <button className="footer-btn">View Available Properties</button>
        </div>
      </div>
      <div></div>
      {/* Copyright and Credits Section */}
      <div className="footer-section footer-bottom">
        <p>
          © 2024 Land-Lord. All Rights Reserved 
        </p>
      </div>
    </>
  );
};

export default Footer;
