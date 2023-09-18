import React from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar(props) {
  const { background } = props;

  return (
    <div className={`navbar ${background ? "has-background" : ""}`}>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        {background ? <h4>Los Angeles Mountains</h4> : ""}
      </div>
      <div className="section-links">
        <a href="#history">01. History</a>
        <a href="#climb">02. Climb</a>
      </div>
    </div>
  );
}

export default Navbar;
