import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import footericon1 from "../../assets/footericon1.png";
import footericon2 from "../../assets/footericon2.png";
import footericon3 from "../../assets/footericon3.png";
const footer = () => {
  return (
    <div className="footer">
      <img src={logo} className="logo" />
      <div className="firstContainer">
        <h1>Useful Links</h1>
        <br />
        <h4>About Medicarelax</h4>
        <h4>Our Showroom</h4>
        <h4>Massage Chair Warranty</h4>
        <h4>Our Mission</h4>
        <h4>Online Card Payment</h4>
        <h4>Blog</h4>
      </div>
      <div className="secondContainer">
        <h4>Terms and Conditions</h4>
        <h4>Privacy Policy</h4>
        <h4>Cookie Policy</h4>
        <h4>Return Policy</h4>
        <h4>FAQ</h4>
      </div>
      <div className="thirdContainer">
        <h1>Social</h1>
        <div className="icons">
          <a href="#">
            <img src={footericon1} />
          </a>
          <a href="#">
            <img src={footericon2} />
          </a>
          <a href="#">
            <img src={footericon3} />
          </a>
        </div>
      </div>

      <div className="banner">
        <h1>EXCLUSIVE importer Japanese Massage Chairs</h1>
      </div>
    </div>
  );
};

export default footer;
