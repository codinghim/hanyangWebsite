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
                    <strong>Dear Loyal Customers,</strong>
                    <br/>
                    Due to the pandemic, our current hours are from 8:00AM - 11:30PM everyday of the week. We apologize for the inconvenience.
                    <br/>
                    <br/>
                    코로나19의 심각성으로 인해, 당분간 영업시간을 매일 8:00AM - 11:30PM 으로 변경합니다. 불편을 끼쳐드려 죄송합니다.
                </p>
                <span className="popup-close" onClick={closePopup}>&times;</span>
            </div>
        </div>
    )
}

export default Popup
