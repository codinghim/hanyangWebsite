import React, { useEffect, useState } from 'react';
import Carouselimg from '../Carouselimg/Carouselimg';
import './carousel.css';
import {SLIDES} from '../../Content.js'

const Carousel = () => {
    const [slideIndex, setslideIndex] = useState(0)

    useEffect(() => {
        let i = slideIndex
        const slideInterval = setInterval(() => {
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
    },[slideIndex])

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
        // console.log(`slide index: ${slideIndex}`)
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
        </section>
    )

}

export default Carousel
