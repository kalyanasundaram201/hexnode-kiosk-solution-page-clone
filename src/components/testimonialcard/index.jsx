import React from "react";
import "./TestimonialCard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialCard({ image, quote, name, position, company }) {
  return (
    <div className="testimonial-card">
      <div className="testimonialimg-container">
        <img src={image} alt={name} className="testimonial-image" />
      </div>
      <div className="testimonialcontent">
        <p className="testimonial-quote">"{quote}"</p>
        <h4 className="testimonial-name">{name}</h4>
        {position && <p className="testimonial-position">{position}</p>}
        <p className="testimonial-company">{company}</p>
      </div>
    </div>
  );
}