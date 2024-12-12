import React from "react";
import Slider from "../slider";
import "./styles.css";
import LogoSlider from "../../components/logocaroseul";

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      <div className="testmonials-container">
        <div className="t-head-wrapper">
          <h2 className="t-heading">Why should you choose Hexnode?</h2>
        </div>

        <div className="slider-component">
          <Slider />
        </div>
      </div>
      <div className="logo-slider">
        <LogoSlider />
      </div>
    </div>
  );
};

export default Testimonials;
