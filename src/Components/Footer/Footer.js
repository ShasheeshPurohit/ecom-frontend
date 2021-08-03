import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* <p className="footer-text">Follow us on:</p> */}
      <ul className="footer-links">
        <li>
          <a href="https://www.linkedin.com/in/shasheeshpurohit/">
          <i className="fab fa-linkedin linkedIn"></i></a>
        </li>
        <li>
          <a href="https://www.instagram.com/shasheesh15/?hl=en"><i className="fab fa-instagram instagram"></i></a>
        </li>
        <li>
          <a href="https://twitter.com/shasheeshcodes"><i className="fab fa-twitter-square twitter"></i>
          </a></li>
        <li>
          <a href="https://github.com/ShasheeshPurohit"><i className="fab fa-github github"></i>
          </a></li>
      </ul>
      Developed by: Shasheesh Purohit
    </footer>
  );
}
