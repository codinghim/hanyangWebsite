import React from 'react';
import './location.css';

const Location = () => {
    return(
        <section id="location-section" className="location-section">
            <p className="section-header">Location</p>
            <div className="location-container">
                <div className="location-hours">
                    <p>Operating Hours</p>
                    <p>Mon - Sun: 24 hours</p>
                </div>
                {/* <img className="location-map" src="https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png" alt="location"/> */}
                <div className="location-description">
                    <p> Address: 150-51 Northern Blvd, Flushing, NY 11354 </p>
                    <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/nAPkDz2hp4Mf8A8F7">Find in Map</a>
                    <p> Phone: 718-888-8888 </p>
                    <p> Email: hanyangfoodcourt@gmail.com</p>
                </div>
            </div>
        </section>
        )
}

export default Location;