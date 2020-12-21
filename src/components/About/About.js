import './about.css'
import {STORY} from '../../Content.js'

const About = () => {
    return(
        <section id="about-section">
            <div className="story-container">
                <h1 className="about-header">Our Story</h1>
                <p className="about-text">{STORY}</p>

            </div>
            <div className="availabilty-container">
                <h2>Open Hours</h2>
                <p className="availablity-sm">24 / 7</p>
                <p className="covid-hours">* CO-VID 19 may affect these hours</p>
                <h2>Availability</h2>
                <p className="availablity-sm">Dine-In, Take-out</p>
                <p className="availablity-sm">Parking</p>
            </div>

        </section>
    )
}

export default About;
