import React from "react";
import Slider from "react-slick";
import "./styles.css";
import Justinimg from "../../assets/testimonial/justin-modrak.webp"; 
import TestimonialCard from '../../components/testimonialcard'
import dailbor from '../../assets/testimonial/dalibor-kruljac.webp'
import chris from '../../assets/testimonial/chris-robinson.webp'

const testimonials = [
  {
    image: Justinimg,
    quote: "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    position: "Technology Coordinator",
    company: "East Troy Community School District",
  },
  {
    image: dailbor,
    quote: "Most complete MDM solution I found, and I tested many of them.",
    name: "Dalibor Kruljac",
    position: "",
    company: "KAMELEYA LTD",
  },
  {
    image: chris,
    quote: "It seemed to be in-line with everything we were looking at.",
    name: "Chris Robinson",
    position: "Executive Account Manager",
    company: "NCS",
  },
];

const CustomArrow = ({ className, style, onClick, isLeft }) => (
    <div
      className={`${className} custom-arrow ${isLeft ? "left-arrow" : "right-arrow"}`}
      onClick={onClick}
    >
      <i className={`fa-solid ${isLeft ? "fa-chevron-left" : "fa-chevron-right"}`}></i>
    </div>
  );

export default function TestimonialCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrow:false,
    nextArrow: <CustomArrow isLeft={false} />,
    prevArrow: <CustomArrow isLeft={true} />,
  };

  return (
    <div className="carousel-container">
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          image={testimonial.image}
          quote={testimonial.quote}
          name={testimonial.name}
          position={testimonial.position}
          company={testimonial.company}
        />
      ))}
    </Slider>
  </div>
  );
}


