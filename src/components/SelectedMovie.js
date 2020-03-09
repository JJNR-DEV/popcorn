import React from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const SelectedMovie = props => {
    // no selected movie
    if(!props){
        return
    }

    if(props.selectedMovie.movie){
        const movieDetails = props.selectedMovie.movie
        let genre = movieDetails.genres.map(genre => genre.name)
        genre = genre.join('-')
        // base url for posters
        const baseURL = 'http://image.tmdb.org/t/p/w342/'  
        return (
            <div>
                <div className="return-main">
                    <Link to="/">
                        <i className="far fa-arrow-alt-circle-left fa-lg"></i>
                    </Link> 
                </div>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={12} className="movie-poster">
                        <img src={baseURL + movieDetails.poster_path} alt={movieDetails.title} />
                    </Col>

                    <Col lg={6} md={6} sm={6} xs={12}> 
                        <h1 className="title">{movieDetails.original_title}</h1>
                        <h2 className="second-title">Release Date: {movieDetails.release_date}</h2>
                        <h3 className="third-title">{genre}</h3>
                        <i className="fas fa-star"></i><span> {movieDetails.vote_average}</span>
                        <p>{movieDetails.overview}</p>
                    </Col>
                </Row>
            </div>
        )
    }
    return <div></div>
}

// no call to action creator required here but you do need the data from the movieSelectedReducer
const mapStateToProps = state => {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(SelectedMovie)