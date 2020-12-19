import React from 'react';
import './navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <a className="website-name" href="#App">Hanyang Boonshik</a>
            <div className="navbar-routes">
                <a className="navbar-button" href="#about-section">About</a>
                <a className="navbar-button" href="#menu-section">Menu</a>
                <a className="navbar-button" href="#location-section">Location</a>
            </div>
        </nav>
    )
}

export default Navbar;
