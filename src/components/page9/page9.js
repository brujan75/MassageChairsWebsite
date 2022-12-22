import React from "react";
import "./page9.css";
import contactBg from "../../assets/contactBg.png";
const page9 = () => {
  return (
    <div className="page9">
      {/* <img src={contactBg} /> */}
      <div className="banner">
        <h1>Contact us now!</h1>
        <h2>We’ll get back to you in less than 24 hours</h2>
      </div>
      <div className="contactSection">
        <form action="">
          <div className="upper-section">
            <div>
              <label for="name">Name*</label>
              <input type="text" id="name" placeholder="Harry Smith" />
            </div>
            <div>
              <label for="email">Email*</label>
              <input
                type="text"
                id="email"
                placeholder="email@email.com"
              ></input>
            </div>
            <div>
              <label for="phonenr">Phone Number</label>
              <input
                type="number"
                id="phonenr"
                placeholder="Type your phone number"
              ></input>
            </div>
            <div>
              <label for="subject">Message*</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Type your message..."
              ></textarea>
            </div>
          </div>
          <div className="lower-section">
            <checkbox>
              <input type="checkbox" id="terms" checked />
              <label for="terms">I have read the GDPR and I agree.</label>
            </checkbox>
            <input
              type="submit"
              className="button"
              value="Send Message"
            ></input>
            <div className="info">
              <p1>All the fileds marked with * are mandatory</p1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page9;
