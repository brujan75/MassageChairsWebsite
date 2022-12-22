import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <div className="navbar">
      <div className="navbarContact">
        <div className="navbarContact-left">
          <h2>CALL NOW</h2>
          <h2>
            <img src={`https://file.rendit.io/n/9aYpwiOT1Tv78owUF3wS.svg`} />
            +44 7391 0235 75
          </h2>
        </div>
        <div className="navbarContact-right">
          <img src={`https://file.rendit.io/n/g8lITgz4M3ubHpWHVPxn.svg`} />
          <p1>Mon-Sat 08:00 - 18:00</p1>
          <img src={`https://file.rendit.io/n/BueyfwmlGXmqFk1csi1M.svg`} />
          <p1>cs@fujiiryoki.uk</p1>
        </div>
      </div>
      <div className="navbarContent">
        <a href="">
          <img src={logo} className="logo" />
        </a>
        <div ref={navRef}>
          <p1 className="dropdown">Massage Chairs</p1>
          <p1 className="dropdown">Monthly Sales</p1>
          <a href="#"><p1>Showroom London</p1></a>
          <a href="#"><p1>Who we are?</p1></a>
          <a href="#"><p1>Contact Us</p1></a>
          <a href="#"><p1>Blog</p1></a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
