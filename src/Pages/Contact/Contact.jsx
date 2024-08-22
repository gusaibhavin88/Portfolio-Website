import React from "react";
import "./Contact.css";
import { cell, location, mail } from "../../assets/Index";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactbox" style={{ cursor: "pointer" }}>
        <div class="footer-center">
          <div className=" footerbox">
            <img src={location} alt="" />
            <p>
              <span>Ravechidham 2, Shinay, Adipur, Kutch, Gujarat </span>{" "}
            </p>
          </div>
          <br />
          <div className="footerbox">
            <img src={cell} alt="" />
            <p>
              <span></span> 9687969351
            </p>
          </div>
          <br />
          <div className="footerbox">
            <img src={mail} alt="" />
            <p>Gusaibhavin88@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
