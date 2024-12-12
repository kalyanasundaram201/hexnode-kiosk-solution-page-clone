import React, { useState } from "react";
import "./offers.css";
import { OfferItems } from "../../data/data";

const Offers = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="offer-section">
      <div className="offer-heading-container">
        <h1 className="offer-heading">
          What additional possibilities does the Kiosk mode offer?
        </h1>
      </div>

      <div className="offer-content">
        <div className="offer-left-container">
          {activeIndex !== null && (
            <img
              src={OfferItems[activeIndex].img}
              alt={OfferItems[activeIndex].title}
              className="offer-image"
            />
          )}
        </div>

        <div className="offer-right-container">
          <div className="accordion-container">
            {OfferItems.map((item, index) => (
              <div key={index} className="accordion-item">
                <h3
                  className="accordion-title"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                </h3>
                <div
                  className={`accordion-content ${
                    activeIndex === index ? "active" : ""
                  }`}
                  style={{ maxHeight: activeIndex === index ? "300px" : "0" }}
                >
                  <p>{item.content}</p>
                  <a
                    href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                    target="_blank"
                    rel="noreferrer"
                    className="try-button"
                  >
                    Try for free
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
