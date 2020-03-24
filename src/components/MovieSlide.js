import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { baseURL } from './links/Images'

const MovieSlide = ({ movie }) => {

    return (
        <Row className="slide">
            <Col lg={6} md={6} sm={6} xs={12} className="popular-movies-img">
                <img src={baseURL + movie.poster_path} alt={movie.title} />  
            </Col>
                
            <Col className="text-description" lg={6} md={6} sm={6} xs={12}>
                <h3>{movie.title} ({movie.release_date ? movie.release_date.split('-')[0] : movie.release_date})</h3>
                <i className="fas fa-star"></i>
                <span> {movie.vote_average}</span>
                <p>{movie.overview}</p>
            </Col>  
        </Row>
    )
}

export default MovieSlide