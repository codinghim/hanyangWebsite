import React, { useState } from 'react';
import Carouselimg from '../Carouselimg/Carouselimg';
import './carousel.css';

const Carousel = () => {
    let arr = [<Carouselimg src={"https://s3-media0.fl.yelpcdn.com/bphoto/G0u3xzhYFb0LhhwLQZ7CuA/o.jpg"} />,
        <Carouselimg src={"https://s3-media0.fl.yelpcdn.com/bphoto/TUbwew_mUvTtjOa_unP8yA/o.jpg"} />,
        <Carouselimg src={"https://s3-media0.fl.yelpcdn.com/bphoto/sxkJEEABYysc7HRr6CZVog/o.jpg"} />,
        <Carouselimg src={"https://s3-media0.fl.yelpcdn.com/bphoto/ohDnksLSoLxo2EkD-2IaQQ/o.jpg"} />,
        <Carouselimg src={"https://s3-media0.fl.yelpcdn.com/bphoto/8Ru2cssCnIBqNhFZvklMEQ/o.jpg"} />
    ]
    const [x, setX] = useState(0)
    const goLeft = () =>{
        console.log(x);
        (x === 0) ? setX(-100*(arr.length-1)) : setX(x + 100);
    }
    const goRight = () =>{
        console.log(x);
        (x === -100*(arr.length-1)) ? setX(0) : setX(x - 100)
    }

    return(
        <section className="carousel-container">
            {arr.map((item,index)=>{
                return (
                    <div key={index} className="carousel" style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            {/* <img className="mainimg-image" src="https://s3-media0.fl.yelpcdn.com/bphoto/G0u3xzhYFb0LhhwLQZ7CuA/o.jpg" alt="restaurant view"/> */}
            <button id="goLeft" onClick={goLeft}>&lt;</button>
            <button id="goRight" onClick={goRight}>&gt;</button>
        </section>
    )
}

export default Carousel;