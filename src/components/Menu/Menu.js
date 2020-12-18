import React from 'react';
import './menu.css';

const Menu = () =>{

    return(
        <section id="menu-section" className="menu-section"> 
            <p className="section-header">Menu</p>
            <nav className="menu-link-container">
                <a className="menu-link" href="#App">Entrees</a>
                <a className="menu-link" href="#App">Snack</a>
            </nav>
            
        </section>
    )
    
}

export default Menu;

