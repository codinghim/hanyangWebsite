import React, { useEffect, useState } from 'react';
import Carouselimg from '../Carouselimg/Carouselimg';
import './carousel.css';
import {SLIDES} from '../../Content.js'

const Carousel = () => {
    const [slideIndex, setslideIndex] = useState(0)
    // const goLeft = () => {
    //     if(slideIndex === 0) {
    //         setslideIndex(SLIDES.length-1)
    //     }
    //     else {
    //         setslideIndex(slideIndex-1)
    //     }
    // }
    // const goRight = () => {
    //     if(slideIndex === (SLIDES.length-1)) {
    //         setslideIndex(0)
    //     }
    //     else {
    //         setslideIndex(slideIndex+1)
    //     }
    // }
    // When component mounted, set slide index as 0
    useEffect(() => {
        setslideIndex(0)
        let i = slideIndex
        const slideInterval = setInterval(() => {
            // For some reason slideIndex always returns 0 inside this interval
            if(i === (SLIDES.length-1)) {
                setslideIndex(0)
                i = 0
            }
            else {
                setslideIndex(slideIndex => slideIndex + 1)
            }
            i++
        }, 5000)

        return function cleanUp() {
            clearInterval(slideInterval)
        }
    },[])

    // Whenever slide Index is changed show slide Index
    useEffect(() => {
        showSlide(slideIndex)
    },[slideIndex])

    const showSlide = (index) =>{
        //make visible slide to invisible
        const activeslides = document.getElementsByClassName('active-slide')
        if(activeslides.length !== 0){
            let oldVisibleSlide = document.getElementsByClassName('active-slide')[0]
            oldVisibleSlide.classList.remove('active-slide')
            oldVisibleSlide.classList.add('hidden-slide')
        }
        //show slide of an given index
        let newVisibleSlide = document.getElementsByClassName(`slide-${index}`)[0]
        newVisibleSlide.classList.remove('hidden-slide')
        newVisibleSlide.classList.add('active-slide')
        console.log(`slide index: ${slideIndex}`)
    }

    return(
        <section id="carousel-container">
            {SLIDES.map((item, index) => {
                return (
                    <div key={index} className={`slide slide-${index} hidden-slide`}>
                        <Carouselimg src={item}/>
                    </div>
                )
            })}
            {/* <button id="goLeft" onClick={goLeft}>Prev</button>
            <button id="goRight" onClick={goRight}>Next</button> */}
        </section>
    )

}

export default Carousel
