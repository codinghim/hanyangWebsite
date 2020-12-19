import React from 'react';
import './menu.css';

const Menu = () =>{

    return(
        <section id="menu-section">
                <h2 className="menu-header">Menu</h2>
                <nav className="menu-link-container">
                    <a className="menu-category" href="#App">보<br/>끔<br/>&bull;<br/>Stir<br/>Fried</a>
                    <a className="menu-category" href="#App">탕<br/><br/>&bull;<br/>Soup</a>
                    <a className="menu-category" href="#App">튀<br/>김<br/>&bull;<br/>Fried</a>
                </nav>

        </section>
    )

}

export default Menu;

