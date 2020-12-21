import React, { useEffect, useState } from 'react';
import Carouselimg from '../Carouselimg/Carouselimg';
import './carousel.css';
import {SLIDES} from '../../Content.js'

const Carousel = () => {
    const [slideIndex, setslideIndex] = useState(0)
    const goLeft = () =>{
        if(slideIndex === 0){
            setslideIndex(SLIDES.length-1)
        }else{
            setslideIndex(slideIndex-1)
        }
    }
    const goRight = () =>{
        if(slideIndex === (SLIDES.length-1)){
            setslideIndex(0)
        }else{
            setslideIndex(slideIndex+1)
    // When component mounted, set slide index as 0
    useEffect(() => {
        setslideIndex(0)
    },[])

    // Whenever slide Index is changed show slide Index
    useEffect(() => {
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
        showSlide(slideIndex)
    },[slideIndex])

    return(
        <section id="carousel-container">
            {SLIDES.map((item, index) => {
                return (
                    <div key={index} className="slide hidden-slide">
                        <Carouselimg src={item}/>
                    </div>
                )
            })}
            <button id="goLeft" onClick={goLeft}>&lt;</button>
            <button id="goRight" onClick={goRight}>&gt;</button>
        </section>
    )
}

export default Carousel;
