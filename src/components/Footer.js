import React from "react";
import logo from "../assets/logo.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
        <h4>Los Angeles Mountains</h4>
      </div>
      <p>Copyright 2023. All rights reserved</p>
    </div>
  );
}

export default Footer;
