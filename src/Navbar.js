import React, { useState } from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from "./assets/logo.png";

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return ( 
        <div className='navbar-container'>
        <nav className="navbar">
            <a href="/" className="logo">
            <img src={logo} alt="logo" style={{
                width: "50%"
            }}/>
            </a>
            <div className="hamburger" onClick={handleClick}>
                { click ? (<FaTimes size={ 40 } style={{ fill: '#fcfbf9' }} />) :
                (<FaBars size={ 40 } style={{ fill: '#fcfbf9' }} />)}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"} style={{
                fontSize: "120%"
            }}>
                <li className="nav-link">
                <a href="/" onClick={closeMenu}>Home</a>
                </li>
                <li className="nav-link">
                <a href="/about" onClick={closeMenu} spy={true} smooth={true} offset={-100} duration={500}>About</a>
                </li>
                <li className="nav-link">
                <a href="/gallery" onClick={closeMenu} spy={true} smooth={true} offset={-100} duration={500}>Gallery</a>
                </li>
                <li className="nav-link">
                <a href="/contact" onClick={closeMenu} spy={true} smooth={true} offset={-100} duration={500}>Contact</a>
                </li>
            </ul>
        </nav>
        </div>
     );
}
 
export default Navbar;