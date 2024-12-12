import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div
        className={`backdrop ${isMenuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div className={`header-wrapper ${isScrolled ? "scrolled" : ""}`}>
        <div className={`header ${isScrolled ? "scrolled" : ""}`}>
          <div className="logo">
            <span className={`hex-logo ${isScrolled ? "scrolled" : ""} `}>
              hexnode
            </span>
          </div>

          <div
            className={`hamburger-icon ${isScrolled ? "scrolled" : ""}`}
            onClick={toggleMenu}
          >
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          </div>

          <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="menu-border"></div>
            <div className="menu-container">
              <div className="menu">
                <button>14 DAY FREE TRIAL</button>
                <div className="login-container">
                  <a>Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
