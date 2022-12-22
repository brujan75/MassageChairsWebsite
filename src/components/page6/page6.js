import React from "react";
import "./page6.css";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";

const page6 = () => {
  return (
    <div className="page6">
      <div className="title">
        <h1>What our customers say</h1>
        <a href="#">
          <h3>
            See All<div className="arrow"></div>
          </h3>
        </a>
      </div>
      <div className="cards-container">
        <div className="cards">
          <div className="card1 card">
            <div className="person">
              <img src={person1} />
              <h1>Stephen T.</h1>
            </div>
            <div className="review">
              <h1>Great Experience!</h1>
              <h4>
                Thank you for great guidance and fast delivery. My best regards.
              </h4>
            </div>
            <div className="score">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
          </div>
          <div className="card2 card">
            <div className="person">
              <img src={person2} />
              <h1>Kevin Anders</h1>
            </div>
            <div className="review">
              <h1>Best Product</h1>
              <h4>
                I use the JP-2000, after each training , I can sleep better and
                my whole body feels better. Thank you so much!
              </h4>
            </div>
            <div className="score">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
          </div>
          <div className="card3 card">
            <div className="person">
              <img src={person3} />
              <h1>Eve L.</h1>
            </div>
            <div className="review">
              <h1>Happy with it</h1>
              <h4>
                As yoga instructor I could not accept less but the most advanced
                massage chair. The new Inada Robo is absolutelly amazing massage
                chair.
              </h4>
            </div>
            <div className="score">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page6;
