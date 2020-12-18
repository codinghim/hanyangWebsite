import React, { useEffect, useState } from 'react';
import Carouselimg from '../Carouselimg/Carouselimg';
import './carousel.css';

const Carousel = () => {
    let arr = [<Carouselimg src={"https://s3-media0.fl.yelpcdn.com/bphoto/G0u3xzhYFb0LhhwLQZ7CuA/o.jpg"} />,
        <Carouselimg src={"https://s3-media0.fl.yelpcdn.com/bphoto/TUbwew_mUvTtjOa_unP8yA/o.jpg"} />,
        <Carouselimg src={"https://s3-media0.fl.yelpcdn.com/bphoto/sxkJEEABYysc7HRr6CZVog/o.jpg"} />,
        <Carouselimg src={"https://s3-media0.fl.yelpcdn.com/bphoto/ohDnksLSoLxo2EkD-2IaQQ/o.jpg"} />,
        <Carouselimg src={"https://s3-media0.fl.yelpcdn.com/bphoto/8Ru2cssCnIBqNhFZvklMEQ/o.jpg"} />
    ]
    const [slideIndex, setslideIndex] = useState(0)

    const goLeft = () =>{
        if(slideIndex === 0){
            setslideIndex(arr.length-1)
        }else{
            setslideIndex(slideIndex-1)
        }
    }
    const goRight = () =>{
        if(slideIndex === (arr.length-1)){
            setslideIndex(0)
        }else{
            setslideIndex(slideIndex+1)
        }        
    }

    const showSlide = (index) =>{
        //make visible slide to invisible
        const activeslides = document.getElementsByClassName('active-slide')
        if(activeslides.length !== 0){
            document.getElementsByClassName('active-slide')[0].className = "slide hidden-slide"
        }
        //show slide of an given index
        document.getElementsByClassName('hidden-slide')[index].className = "slide active-slide"
        console.log(`slide index: ${slideIndex}`)
    }
    
    // When component mounted, set slide index as 0
    useEffect(() => {
        setslideIndex(0)
    },[])

    // Whenever slide Index is changed show slide Index
    useEffect(() => {
        showSlide(slideIndex)
    },[slideIndex])

    return(
        <section className="carousel-container">
            {arr.map((item,index)=>{
                return (
                    <div key={index} className="slide hidden-slide">
                        {item}
                    </div>
                )
            })}
            <button id="goLeft" onClick={goLeft}>&lt;</button>
            <button id="goRight" onClick={goRight}>&gt;</button>
        </section>
    )
}

export default Carousel;