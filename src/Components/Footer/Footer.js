import React from "react";
import logo from "../../assets/mylogo.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* copyright */}
      <div className="footer-copyright">
        <p>©2022 Wei Zhang. All rights reserved.</p>
      </div>
      {/* social media links */}
      <ul className="footer-social-media">
        <li>
          <a href="https://www.linkedin.com/in/wei-zhang-3a80023a/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wei-zhang-3a80023a/">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wei-zhang-3a80023a/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wei-zhang-3a80023a/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
