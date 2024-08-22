import React from "react";
import "./Home.css";
import { Hello, Wave, Bhavin_gusai } from "../../assets/Index";

const Home = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(Bhavin_gusai).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Bhavin Gusai.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="homediv">
      <div className="homechild">
        <div className="cvbox">
          <img src={Hello} alt="" style={{ cursor: "pointer" }} />
          <h1 style={{ cursor: "pointer" }}>
            I'm <span>Bhavin</span>{" "}
            <span>
              <img src={Wave} alt="" />
            </span>
          </h1>
          <h3>
            I am a skilled MERN stack developer, proficient in building dynamic
            web applications using MongoDB, Express, React and Node.js.
          </h3>
          <div className="twobutton">
            <button onClick={onButtonClick}>Download CV</button>
            <a
              href="https://www.linkedin.com/in/bhavin-gusai-0093a9183/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="touchbtn"> Get in Touch!</button>
            </a>
          </div>
        </div>
        <div className="profile"></div>
      </div>
    </div>
  );
};

export default Home;
