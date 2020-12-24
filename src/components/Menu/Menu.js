import React from 'react';
import './menu.css';

const Menu = () =>{

    return(
        <section id="menu-section">
             <div className="menu-container">
                <a className="menu-category menu-category-main" target="_blank" href="/menu/menu1.pdf">Main Menu</a>
                <a className="menu-category menu-category-side" target="_blank" href="/menu/menu2.pdf">Side Menu</a>
            </div>
            <div className="availability-container">
                <h2 className="availability-header">Open Hours</h2>
                <p className="availability-text availability-text-hours"><strong className="font-hanyang-green">24</strong> / <strong className="font-hanyang-blue">7</strong></p>
                <h2 className="availability-header">Availability</h2>
                <p className="availability-text">Dine-In, Take-out</p>
                <p className="availability-text">Parking</p>
            </div>
        </section>
    )

}

export default Menu;

