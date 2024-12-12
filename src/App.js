import React from 'react'
import { useState, useEffect } from 'react'
import Header from './sections/header'
import HeroSection from './sections/hero'
import Banner from './sections/banner'
import KioskModes from './sections/kioskmodes' 
import Offers from './sections/offers'
import Testimonials from './sections/testimonial'
import Platforms from './sections/platforms'
import Accordian from "./components/accordian";
import SignUpForm from './sections/signup'
import Footer from './sections/footer'
import Icon from './components/chatbot'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderItems } from './data/data'


const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='app'>
      <Header/>
      <HeroSection/>
      <Banner/>
      {isMobile?<Accordian sliderItems={sliderItems}/>: <KioskModes/>}
      <Offers/>
      <Testimonials/>
      <Platforms/>
      <SignUpForm/>
      <Footer/>
      <Icon/>
    </div>
  )
}

export default App