import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="footer-background">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-links-container">
                <div className="footer-links-list">
                  <ul className="footer-links">
                    <li className="footer-link-item">
                      <a
                        className="footer-link"
                        href="https://www.hexnode.com/legal/terms-of-use/"
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li className="footer-link-item">
                      <a
                        className="footer-link"
                        href="https://www.hexnode.com/legal/privacy-policy/"
                      >
                        Privacy
                      </a>
                    </li>
                    <li className="footer-link-item">
                      <a
                        className="footer-link"
                        href="https://www.hexnode.com/legal/cookies-policy/"
                      >
                        Cookies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-copyright">
                <p className="footer-copyright-text">
                  Copyright © 2024 Mitsogo Inc. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
