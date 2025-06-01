import React from "react";
import "./Footer.css";
import appLogo from "../assets/app-logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = ({ onSearch }) => {
  const handleLogoClick = () => {
    onSearch("");
  };

  return (
    <div className="footer">
      <a
        href="https://github.com/Ashwani-Sahu/searchspring-task"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon" size="50" />
      </a>

      <img
        src={appLogo}
        alt="logo"
        loading="lazy"
        className="app-logo icon"
        onClick={handleLogoClick}
      />

      <a
        href="https://www.linkedin.com/in/ashwani-sahu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon" size="50" />
      </a>
    </div>
  );
};

export default Footer;
