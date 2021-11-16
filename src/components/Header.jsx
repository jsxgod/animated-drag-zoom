import React from "react";
import Logo from "../assets/infinity-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-content">
          <div className="logo-wrapper">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
