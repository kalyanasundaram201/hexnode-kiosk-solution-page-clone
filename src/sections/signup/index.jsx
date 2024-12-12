import React from "react";
import "./signup.css";

const SignUpForm = () => {
  return (
    <div className="signup-wrapper">
        <div className="signup-container">
      <div className="content-center">
        <h3 className="title">Sign up and try Hexnode free for 14 days!</h3>
      </div>
      <div className="form-container">
        <div className="form-wrapper">
          <form className="form">
            <div className="form-group">
              <div className="input-container">
                <input
                  placeholder="Your Work Email"
                  type="text"
                  name="email"
                  id="email"
                  className="input"
                  value=""
                />
              </div>
              <div className="button-container">
                <button role="button" className="button">
                  Get Started
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="info-container">
          <span className="error-message"></span>
          <p className="info-text">
            No credit cards required.
            <a
              className="demo-link"
              role="link"
              href="https://www.hexnode.com/mobile-device-management/request-demo/"
            >
              Request a demo
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};
export default SignUpForm;
