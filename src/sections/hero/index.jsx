import React from "react";
import img from "../../assets/hexnode-kiosk.webp";
import "./styles.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-image">
          <div className="img-container">
            <img src={img} alt="Hero" width={597} height={586} />
          </div>
        </div>

        <div className="content-block">
          <h1 className="content-text">
            Turn your devices into kiosks in a few minutes with Hexnode UEM
          </h1>
        </div>

        <div className="form">
          <input
            type="text"
            placeholder="Your Work Email"
          />
          <button type="button" className="simple-button">
            GET STARTED NOW!
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
