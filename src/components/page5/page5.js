import React from "react";
import "./page5.css";
import page5photo from "../../assets/page5photo.png";

const page5 = () => {
  return (
    <div className="page5">
      <div className="photo">
        <img src={page5photo} />
      </div>
      <div className="banner">
        <h1>Our Mission</h1>
        <p1>
          We contribute to your better health by bringing into your lifestyle
          the highest quality, unique design, detail oriented, human engineering
          massage chairs made in Japan. Our massage chairs are the most "close"
          to human hand massage. Effective massage for each body part.{" "}
        </p1>
        <h2>
          Discover the luxury of real Japanese massage chairs in the comfort of
          your own home.
        </h2>
      </div>
    </div>
  );
};

export default page5;
