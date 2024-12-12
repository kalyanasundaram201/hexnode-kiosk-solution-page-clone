import React from "react";
import Slider from "react-slick";
import "./logocaroseul.css";
import logo1 from "../../assets/logo/costco.svg";
import logo2 from "../../assets/logo/gorillas.svg";
import logo3 from "../../assets/logo/hilton.svg";
import logo4 from "../../assets/logo/hilton.svg";
import logo5 from "../../assets/logo/lowes.svg";
import logo6 from "../../assets/logo/marriott-intl.svg";
import logo7 from "../../assets/logo/merck.svg";
import logo8 from "../../assets/logo/polaris.svg";

export default function LogoSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="logo-slider-conatiner">
      <Slider {...settings} className="logo-slider-component">
        <div>
          <img src={logo1} alt="logo1" />
        </div>
        <div>
          <img src={logo2} alt="logo2" />
        </div>
        <div>
          <img src={logo3} alt="logo3" />
        </div>
        <div>
          <img src={logo4} alt="logo4" />
        </div>
        <div>
          <img src={logo5} alt="logo5" />
        </div>
        <div>
          <img src={logo6} alt="logo6" />
        </div>
        <div>
          <img src={logo7} alt="logo7" />
        </div>
        <div>
          <img src={logo8} alt="logo8" />
        </div>
        <div>
          <img src={logo4} alt="logo9" />
        </div>
      </Slider>
    </div>
  );
}
