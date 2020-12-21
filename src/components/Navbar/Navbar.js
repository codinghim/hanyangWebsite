import React from 'react';
import './navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="name-logo-container">
                <a href="#App"><img src="hanyang-logo.png" className="logo-link"/></a>
                <a className="website-name" href="#App">Hanyang Bunshik &bull; 한양분식</a>
            </div>
            <div className="navbar-routes">
                <a className="navbar-button" href="#about-section">About</a>
                <a className="navbar-button" href="#menu-section">Menu</a>
                <a className="navbar-button" href="#location-section">Location</a>
            </div>
        </nav>
    )
}

export default Navbar;
