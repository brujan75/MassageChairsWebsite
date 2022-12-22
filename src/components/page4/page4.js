import React from "react";
import "./page4.css";
import chair9 from "../../assets/chair9.png";
import chair10 from "../../assets/chair10.png";
import chair11 from "../../assets/chair11.png";
import chair12 from "../../assets/chair12.png";
import tag2 from "../../assets/tag2.png";
 
const page4 = () => {
  return (
    <div className="page4">
      <div className="title">
        <h1>Discover the Japanese Massage Chairs</h1>
        <a href="#">
          <h3>
            See All<div className="arrow"></div>
          </h3>
        </a>
      </div>
      <div className="cards-container">
        <div className="cards">
          <div className="card1 card">
            <img src={chair9} className="prodPhoto" />
            <div className="prodName">
              <p1>Fujiiryoki Cyber Relax JP-2000 (5D+A.I.) / limited editon</p1>
            </div>
            <div className="score">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <a href="">See Product</a>
          </div>
          <div className="card2 card">
            <img src={chair10} className="prodPhoto" />
            <p1 className="prodName">
              Fujiiryoki Cyber Relax JP-2000 (5D+A.I.)
            </p1>
            <div className="score">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <a href="">See Product</a>
          </div>
          <div className="card3 card">
          <div className="tags">
              <img src={tag2} />
            </div>
            <img src={chair11} className="prodPhoto" />
            <p1 className="prodName">Osaki PRO Premium JP-1100 4S/4D Mecha</p1>
            <div className="score">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <a href="">See Product</a>
          </div>
          <div className="card4 card">
            <img src={chair12} className="prodPhoto" />
            <p1 className="prodName">Osaki PRO Premium JP-1100 4S/4D Mecha</p1>
            <div className="score">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <a href="">See Product</a>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default page4;
