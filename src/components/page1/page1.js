import React from "react";
import "./page1.css";
import logo5DAI from "../../assets/logo5DAI.svg";
const page1 = () => {
  return (
    <div className="page1">
      <div className="page1-content">
        <div className="title">
          <h1>World's First</h1>
          <h1>Hybrid Massage chair</h1>
          <h3 className="subtitle">
            Tailored to understand each user needs and eliminate deep tissue
            pain.
          </h3>
        </div>

        <button>
          <h2>See Products</h2>
        </button>
        <div className="banner">
          <h1>We introduce you the new</h1> <img src={logo5DAI} /> 
          <h1>technology</h1>
        </div>
      </div>
    </div>
  );
};

export default page1;
