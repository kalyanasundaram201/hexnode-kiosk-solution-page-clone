import React from "react";
import './accordian .css'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function Example({sliderItems}) {
 
  return (
    <div>
        <div style={{width:'100%',display:'flex',justifyContent:'center' ,alignItems:'center'}}>
        <h2 style={{color:'color: rgb(2 10 25)', padding:'30px', fontFamily:'"Mulish", sans-serif', fontSize:'5vw'}}>Specific kiosk modes for unique use cases</h2>
        </div>
       
         <div className="accordion-container">
      <Accordion>
        {sliderItems.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.label}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <img src={item.img} alt="" width={570} height={387} className="acc-img"/>
              <h3>{item.heading}</h3>
              <ul>
                {item.points.map((point, index) => (
                  <li key={index} style={{ display: "flex", alignItems: "center" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                    style={{
                      marginRight: "8px",
                      fill: "none",
                      stroke: "#60c458",
                      strokeWidth: 2,
                    }}
                    viewBox="0 0 14.393 10.111"
                  >
                    <path d="M.697 4.107 5.45 8.718l8.247-8" />
                  </svg>
                  {point}
                </li>
                ))}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    </div>
   
  );
}