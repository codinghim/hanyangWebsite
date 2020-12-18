import './about.css'

const About = () => {
    return(
        <section id="about-section" className="about-section"> 
            <p className="section-header">About</p>
            <nav className="about-container">
                <div className="description-container">
                    <p className="about-lg">Explanations with lg font.</p>
                    <p className="about-sm">Explanations with sm font. Explanations with sm font.</p>
                </div>
                <div className="availabilty-container">
                    <p className="availablity-lg">Available</p>
                    <p className="availablity-sm">Dining, Take-out</p>
                    <p className="availablity-sm">Delivery(UberEats, DoorDash)</p>
                    <p className="availablity-sm">Parking</p>
                </div>
                
            </nav>
            
        </section>
    )
}

export default About;