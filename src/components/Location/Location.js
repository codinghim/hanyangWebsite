import React from 'react';
import './location.css';

const Location = () => {
    return(
        <section id="location-section">
            <h2 className="location-header">Location</h2>
            <p className="location-text">주소 (Address) &bull; 150-51 Northern Blvd, Flushing, NY 11354</p>
            <p className="location-text">장사 시간 (Open Hours) &bull; 24 / 7 ** CO-VID19 may affect these hours **</p>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.848126206543!2d-73.81551428459343!3d40.765364979326236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261f8f14928bb%3A0x503c6c72e9e2450c!2sHanyang%20Bunshik!5e0!3m2!1sen!2sus!4v1608587207928!5m2!1sen!2sus" id="map-embed" frameBorder="0" allowFullScreen="" aria-hidden="false" tabindex="0" title="Hanyang Bunshik Location"></iframe>

        </section>
        )
}

export default Location;
