import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderItems } from "../../data/data";


const SliderComponent = () => {
  const [selectedId, setSelectedId] = useState(1);
  const highlightRef = useRef(null);

  useEffect(() => {
    const sliderElement = document.querySelector(
      `.slider-item[data-id="${selectedId}"]`
    );
    const highlightElement = highlightRef.current;

    if (sliderElement && highlightElement) {
      const { offsetWidth, offsetLeft } = sliderElement;
      highlightElement.style.width = `${offsetWidth}px`;
      highlightElement.style.transform = `translateX(${offsetLeft}px)`;
    }
  }, [selectedId]);

  const selectedItem = sliderItems.find((item) => item.id === selectedId);

  return (
    <div className="slider-component">
      <div className="slider-container">
        <h2 className="kiosk-title">
          Specific kiosk modes for unique use cases
        </h2>

        <ul className="slider-list">
          <div className="highlight" ref={highlightRef}></div>
          {sliderItems.map((item) => (
            <li
              key={item.id}
              className="slider-item"
              data-id={item.id}
              onClick={() => setSelectedId(item.id)}
            >
              <p
                className={`slider-label ${
                  selectedId === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Mode Details Component */}
      <div className="mode-details">
        <div className="mode-details-wrapper">
          <div className="left-block">
            <h3>{selectedItem.heading}</h3>
            <ul>
              {selectedItem.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="right-block">
            <div className="mode-img-container">
              <img
                src={selectedItem.img}
                alt={selectedItem.label}
                width={570}
                height={387}
                className="mode-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
