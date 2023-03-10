import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div>
      <contact>
        <div className="navbarContact-left">
          <h2>CALL NOW</h2>
          <h2 className="nr">
            <img src={`https://file.rendit.io/n/9aYpwiOT1Tv78owUF3wS.svg`} />
            <>+407 12 123 123</>
          </h2>
        </div>
        <div className="navbarContact-right">
          <img src={`https://file.rendit.io/n/g8lITgz4M3ubHpWHVPxn.svg`} />
          <p1>Mon-Sat 08:00 - 18:00</p1>
          <img src={`https://file.rendit.io/n/BueyfwmlGXmqFk1csi1M.svg`} />
          <p1>address@y.com</p1>
        </div>
      </contact>
      <header>
        <a href="">
          <img src={logo} className="logo" />
        </a>
        <nav ref={navRef}>
          <p1 className="dropdown">Massage Chairs</p1>
          <p1 className="dropdown">Monthly Sales</p1>
          <a href="#">
            <p1>Showroom London</p1>
          </a>
          <a href="#">
            <p1>Who we are?</p1>
          </a>
          <a href="#">
            <p1>Contact Us</p1>
          </a>
          <a href="#">
            <p1>Blog</p1>
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
};

export default Navbar;
