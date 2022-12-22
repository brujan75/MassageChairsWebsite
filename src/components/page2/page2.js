import React from "react";
import "./page2.css";
import page2 from "../../assets/page2video.png";
import play from "../../assets/playbutton.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
const page = () => {
  return (
    <div className="page2">
      <div className="content">
        <div className="info">
          <h1>Awards &</h1>
          <h1>Certifications</h1>
          <p1>
            Based on Knowledge Fujiiryoki and Inada Japan offer quality for
            better health. Here are few winning awards and Recognition
          </p1>
        </div>
        <div className="cards-container">
          <div className="card1 cards">
            <img src={card1} />
          </div>
          <div className="card2 cards">
            <img src={card2} />
          </div>
          <div className="card3 cards">
            <img src={card3} />
          </div>
        </div>
      </div>
      <div className="video">
        <img src={play} />
      </div>
    </div>
  );
};

export default page;
