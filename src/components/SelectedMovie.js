import React from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const SelectedMovie = props => {
    if(!props){
        return
    }

    if(props.selectedMovie.render === true){
        
        const movieDetails = props.selectedMovie.movie
        const baseURL = 'http://image.tmdb.org/t/p/w342/'
        let genre = movieDetails.genres.map(genre => genre.name)
        genre = genre.join('-')

        return (
            <div>
                <div>
                    <Link to="/">
                        <i className="far fa-arrow-alt-circle-left"></i>
                    </Link> 
                </div>
                <Row>
                    <Col >
                        <img src={baseURL + movieDetails.poster_path} alt={movieDetails.title} />
                    </Col>
                    <Col> 
                        <h1 className="title">{movieDetails.original_title}</h1>
                        <h2 className="second-title">Release Date: {movieDetails.release_date}</h2>
                        <h3 className="third-title">{genre}</h3>
                        <i className="fas fa-star"></i>
                        <span> {movieDetails.vote_average}</span>
                        <p>{movieDetails.overview}</p>
                    </Col>
                </Row>
            </div>
        )
    }

    return <div></div>
}

const mapStateToProps = state => {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(SelectedMovie)