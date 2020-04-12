import React from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

import { fetchMovie } from '../actions'
import { baseURL } from './links/Images'
import broken from '../images/broken.png'

class SelectedMovie extends React.Component {
    componentDidMount(){
        const movieID = window.location.search.replace("?=", "")
        this.props.fetchMovie(movieID)
    }

    render(){
        // no selected movie
        if(!this.props.selectedMovie.movie)return <div className="text-center"><Spinner animation="grow" variant="light" /></div>

        const movieDetails = this.props.selectedMovie.movie
        let genre = movieDetails.genres.map(genre => genre.name)
        genre = genre.join(' - ')

        return (
            <div>
                <Row className="fade-in">
                    <Col lg={6} md={6} sm={6} xs={12} className="movie-poster">
                        {movieDetails.poster_path === null ? <img src={broken} alt="broken img" style={{filter: 'invert(1)'}} /> : <img src={baseURL + movieDetails.poster_path} alt={movieDetails.title} />}
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
}

// no call to action creator required here but you do need the data from the movieSelectedReducer
const mapStateToProps = state => {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps, { fetchMovie } )(SelectedMovie)