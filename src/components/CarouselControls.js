import React from 'react'

const CarouselControls = props => {
    const fetchSlides = side => {
        // slides currently in display
        let visibles = []
        const allSlides = document.querySelectorAll('.carousel-slide')

        for(let i = 0; i < allSlides.length; i++){
            if(!allSlides[i].classList.contains('slide-hide')) visibles.push(i)
        } 

        // the new ones to go on display
        let newOnes

        if(side.target.classList.contains('fa-chevron-left')){
            newOnes = visibles.map(slideNumber => {
                if(Math.sign(Number(slideNumber) - props.slideCount) === -1){
                    return Number(slideNumber) - props.slideCount + props.limit
                } else {
                    return Number(slideNumber) - props.slideCount
                }
            })
        }

        if(side.target.classList.contains('fa-chevron-right')){
            newOnes = visibles.map(slideNumber => {
                if((Number(slideNumber) + props.slideCount) > props.limit - 1){
                    return Number(slideNumber) + props.slideCount - props.limit
                } else {
                    return Number(slideNumber) + props.slideCount
                }
            })
        }

        for(let i in allSlides){
            if(i < allSlides.length){
                // slides that should be in display
                if(newOnes.includes(Number(i))){
                    if(allSlides[i].classList.contains('slide-hide')) allSlides[i].classList.remove('slide-hide')
                }
                // slides that should be hidden
                if(!newOnes.includes(Number(i))){
                    if(!allSlides[i].classList.contains('slide-hide')) allSlides[i].classList.add('slide-hide')
                }
            }
        }
    }

    return <i className={props.className} onClick={fetchSlides}></i>
}

export default CarouselControls