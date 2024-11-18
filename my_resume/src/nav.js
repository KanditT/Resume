import React, { useState } from "react";
import "./nav.css";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbox">
            
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
            
        </div>

    );
}

export default Nav;