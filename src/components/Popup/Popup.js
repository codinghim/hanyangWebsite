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
                    **COVID-19 UPDATE**
                </p>
                <p className="popup-description">
                    Dear Loyal Customers,
                    <br/>
                    Due to the pandemic, our current hours are from 8:00AM - 11:30PM everyday of the week. We apologize for the inconvenience.
                    <br/>
                    (한글)
                </p>
                <span className="popup-close" onClick={closePopup}>&times;</span>
            </div>
        </div>
    )
}

export default Popup
