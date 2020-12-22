import React from 'react';
import './menu.css';
import menuIcon from "../../images/menu-icon.png"

const Menu = () =>{

    return(
        <section id="menu-section">
            <div className="availabilty-container">
                <h2 className="availability-header">Open Hours</h2>
                <p className="availablity-text"><strong className="font-hanyang-green">24</strong> / <strong className="font-hanyang-blue">7</strong></p>
                <h2 className="availability-header">Availability</h2>
                <p className="availablity-text">Dine-In, Take-out</p>
                <p className="availablity-text">Parking</p>
            </div>
            <div className="menu-container">
                <h2 className="menu-header">Menu</h2>
                <nav className="menu-link-container">
                    {/* <a className="menu-category" href="#App">보<br/>끔<br/>&bull;<br/>Stir<br/>Fried</a>
                    <a className="menu-category" href="#App">탕<br/><br/>&bull;<br/>Soup</a>
                    <a className="menu-category" href="#App">튀<br/>김<br/>&bull;<br/>Fried</a> */}
                    <a className="menu-category background-hanyang-green" target="_blank" href="/menu/menu1.pdf">Main Menu</a>
                    <a className="menu-category background-hanyang-blue" target="_blank" href="/menu/menu2.pdf">Side Menu</a>
                </nav>
            </div>
        </section>
    )

}

export default Menu;

