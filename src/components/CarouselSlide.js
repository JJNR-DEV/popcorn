import React from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { baseURL } from './links/Images'

const CarouselSlide = props => {
    let colSize
    if(props.slideCount === 5){
        colSize = 2
    } else if(props.slideCount === 3){
        colSize = 3
    } else{
        colSize = 5
    } 

    return (
        <Col lg={colSize} md={colSize} sm={colSize} xs={colSize} className={props.classNames}>
            <Link to={`/movie-info?=${props.slide.id}`}>
                <div>
                    <LazyLoadImage src={baseURL + props.slide.poster_path} alt={props.slide.title} style={{width: '100%'}} /> 
                </div>
                <div className="carousel-slide-desc movie-desc">
                    <h3>{props.slide.title} ({props.slide.release_date ? props.slide.release_date.split('-')[0] : props.slide.release_date})</h3>
                    <i className="fas fa-star"></i>
                    <span> {props.slide.vote_average}</span>
                </div>
            </Link>
        </Col>
    )
}

export default CarouselSlide