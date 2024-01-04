import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false) //track if hamburger menu is selected
    return (
        <nav>
            <Link to="/" className="title">Maya Saltzman</Link>
            {/* reverse value of hamburger menu so it opens/closes with arrow functions */}
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                {/* spans are lines of hamburger menu */}
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <lil>
                    <Link to="/experience" id="a">Experience</Link>
                </lil>
                <lil>
                    <Link to="/projects" id="a">Projects</Link>
                </lil>
                <lil>
                    <a href={process.env.PUBLIC_URL +"/assets/Resume.pdf"} id="a">Resume</a>
                </lil>
            </ul>
        </nav>
    )
}

export default NavBar