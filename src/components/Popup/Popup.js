import React from 'react';
import './popup.css';

const Popup = () => {
    
    const closePopup = () => {
        //close popup
        const popup = document.getElementById('popup')
        popup.classList.add('popup-hidden')

        //enable scrolling
        const app = document.getElementById("App")
        app.classList = "App"
    }

    return(
        <div className="popup-background popup-hidden" id="popup">
            <div className="popup-container">
                <p className="popup-title">
                    Popup title
                </p>
                <p className="popup-description">
                    Popup description goes here
                </p>
                <span className="popup-close" onClick={closePopup}>&times;</span>
            </div>
        </div>
    )
}

export default Popup;