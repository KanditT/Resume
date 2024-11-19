import React, { useState } from "react";
import "./nav.css";
import ExperienceCards from './ProjectCard';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div id="ming" className="navbox">
            <div className="header">
                <a href="#ming" className="my-n-r">
                    <h1 className="name">Ming</h1>
                    <p className="role">Creator</p>
                </a>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className={`nav ${menuOpen ? "open" : ""}`}>
                    <a href="#educations" className="nav-link">
                        Educations
                    </a>
                    <a href="#skills" className="nav-link">
                        Skills
                    </a>
                    <a href="#projects" className="nav-link">
                        Experiences
                    </a>
                </div>
            </div>

        </div>

    );
}

export default Nav;