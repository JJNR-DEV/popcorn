import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { baseURL } from './links/Images'

const TopMoviesPage = props => {  
    // render each of the Top Rated movies
    const renderMovies = () => {
        return props.allMovies.map(movie => {
            return (
                <Col lg={3} md={3} sm={4} xs={6} key={movie.id} style={{padding: '10px 5px'}}>
                    <Link to={`/movie-info?=${movie.id}`}>
                        <div style={{textAlign: 'center'}}>
                            <LazyLoadImage src={baseURL + movie.poster_path} alt={movie.title} style={{width: '140px'}} /> 
                        </div>
                        <div className="movie-desc" style={{maxWidth: '140px', margin: '0 auto'}}>
                            <h3 style={{fontSize: '0.8rem'}}>{movie.title} ({movie.release_date ? movie.release_date.split('-')[0] : movie.release_date})</h3>
                            <i className="fas fa-star"></i>
                            <span> {movie.vote_average}</span>
                        </div>
                    </Link>
                </Col>
            )
        })
    }

    return (
        <Row>
            {renderMovies()}
        </Row>
    )

}

export default TopMoviesPage