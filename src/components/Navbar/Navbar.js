import React from 'react';
import './navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-routes">
                <a className="navbar-button" href="#App"><img src="hanyang-logo.png" alt="Hanyang Bunshik Logo" className="logo-link"/></a>
                <a className="navbar-button" href="#about-section">About</a>
                <a className="navbar-button" href="#menu-section">Menu</a>
                <a className="navbar-button" href="#location-section">Location</a>
            </div>
            <a href="#App"><p className="website-name"> 한양분식 &bull; Hanyang Bunshik</p></a>
        </nav>
    )
}

export default Navbar;
