import React from "react";
import "./page8.css";
import plus from "../../assets/plusSign.png";
import minus from "../../assets/minusSign.png";
const page8 = () => {
  return (
    <div className="page8">
      <div className="title">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="page8-container">
        <div className="table">
          <div className="table-selector">
            <div className="button button1">
              <img src={plus} />
              <h2>Shipping Information</h2>
            </div>
            <div className="button button2">
              <img src={minus} />
              <h2>Product Warranties</h2>
            </div>
            <div className="button button3">
              <img src={plus} />
              <h2>Delivery Time</h2>
            </div>
            <div className="button button4">
              <img src={plus} />
              <h2>See more FAQ</h2>
            </div>
          </div>
          <div className="table-selector-content">
            <h4>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. There are many variations of
              passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going to use
              a passage of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page8;
