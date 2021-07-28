import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* <p className="footer-text">Follow us on:</p> */}
      <ul className="footer-links">
        <li>
          <i class="fab fa-facebook-square facebook"></i>
        </li>
        <li>
          <i class="fab fa-instagram instagram"></i>
        </li>
        <li>
          <i class="fab fa-twitter-square twitter"></i>
        </li>
        <li>
          <i class="fab fa-github github"></i>
        </li>
      </ul>
    </footer>
  );
}
