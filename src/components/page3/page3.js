import React from "react";
import "./page3.css";
import chair1 from "../../assets/chair1.png";
import chair2 from "../../assets/chair2.png";
import chair3 from "../../assets/chair3.png";
import chair4 from "../../assets/chair4.png";
import chair5 from "../../assets/chair5.png";
import chair6 from "../../assets/chair6.png";
import chair7 from "../../assets/chair7.png";
import chair8 from "../../assets/chair8.png";
import tag1 from "../../assets/tag1.png";
import tag2 from "../../assets/tag2.png";
const page3 = () => {
  return (
    <div className="page3">
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
            <div className="tags">
              <img src={tag1} />
              <img src={tag2} />
            </div>
            <img src={chair1} className="prodPhoto" />
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
            <div className="tags">
              <img src={tag1} />
              <img src={tag2} />
            </div>
            <img src={chair2} className="prodPhoto" />
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
              <img src={tag1} />
            </div>

            <img src={chair3} className="prodPhoto" />
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
            <div className="tags">
              <img src={tag1} />
            </div>

            <img src={chair4} className="prodPhoto" />
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
          <div className="card5 card">
            <div className="tags">
              <img src={tag1} />
              <img src={tag2} />
            </div>
            <img src={chair5} className="prodPhoto" />
            <p1 className="prodName">Inada Robo Massage Chair</p1>
            <div className="score">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <a href="">See Product</a>
          </div>
          <div className="card6 card">
            <div className="tags">
              <img src={tag1} />
              <img src={tag2} />
            </div>
            <img src={chair6} className="prodPhoto" />
            <p1 className="prodName">Inada Lupinus Massage Chair</p1>
            <div className="score">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <a href="">See Product</a>
          </div>
          <div className="card7 card">
            <div className="tags">
              <img src={tag1} />
            </div>

            <img src={chair7} className="prodPhoto" />
            <p1 className="prodName">INADA CALABO Massage Chair</p1>
            <div className="score">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <a href="">See Product</a>
          </div>
          <div className="card8 card">
            <div className="tags">
              <img src={tag1} />
              <img src={tag2} />
            </div>
            <img src={chair8} className="prodPhoto" />
            <p1 className="prodName">INADA VITA Massage Chair</p1>
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

export default page3;
