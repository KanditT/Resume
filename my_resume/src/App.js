import React, { useState } from "react";
import "./App.css";
import { FiDownload } from "react-icons/fi";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main-feild">

      <div className="header">
        <div className="my-n-r">
          <h1 className="name">Ming</h1>
          <p className="role">Creator</p>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#resume" className="nav-link">
            Resume
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </div>

      <div className="my-info">
        <div></div>
        <div className="my-picture">
          <img
            src="myImage.png"
            alt="My Profile"
            className="my-image"
          />
        </div>
        <div className="my-text">
          <h2 className="my-name">Kandit Tanthanathewin</h2>
          <p className="my-faculty">Computer Engineering</p>
          <p className="my-opinion">
          I am currently a third-year student pursuing a Bachelor’s degree in Computer Engineering at Khon Kaen University. I am seeking a frontend position where I can apply and develop my skills continuously.
          </p>
          <div className="buttons-container">
            <button className="button resume">Resume <FiDownload /> </button>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default App;
