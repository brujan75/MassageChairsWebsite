import React from "react";
import "./page7.css";
import blogPhoto1 from "../../assets/blogPhoto1.png";
import blogPhoto2 from "../../assets/blogPhoto2.png";
import blogPhoto3 from "../../assets/blogPhoto3.png";

const page7 = () => {
  return (
    <div className="page7">
      <div className="title">
        <h1>Discover the Japanese Massage Chairs</h1>
        <a href="#">
          <h3>
            See All<div className="arrow"></div>
          </h3>
        </a>
      </div>
      <div className="posts-container">
        <div className="posts">
          <div className="post">
            <img src={blogPhoto1} />
            <div>
              <h1>Reasons to buy a massage chair</h1>
              <h4>
                Does your body feel sore and tired when the day is over? Or
                after a long day at work? If so, it is sure that ...
              </h4>
              <a href="#">
                <h2>
                  Read More<div className="arrow"></div>
                </h2>
              </a>
            </div>
          </div>
          <div className="post">
            <img src={blogPhoto2} />
            <div>
              <h1>
                How to choose the massage chair that best fits to your
                necessities?
              </h1>
              <h4>
                Does your body feel sore and tired when the day is over? Or
                after a long day at work?
              </h4>
              <a href="#">
                <h2>
                  Read More<div className="arrow"></div>
                </h2>
              </a>
            </div>
          </div>
          <div className="post">
            <img src={blogPhoto3} />
            <div>
              <h1>Reasons to buy a massage chair</h1>
              <h4>
                Does your body feel sore and tired when the day is over? Or
                after a long day at work? If so, it is sure that ...
              </h4>
              <a href="#">
                <h2>
                  Read More<div className="arrow"></div>
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page7;
