import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

import { fetchPopularMovies, fetchMovie } from '../actions'

class PopularMovies extends React.Component {
    componentDidMount(){
        this.props.fetchPopularMovies()
    }

    handleClick(movie){
        this.props.fetchMovie(movie)
    }

    popularMovies(){
        // initial call
        if(!this.props.popularMovies){
            return null
        }
        // base url for movie posters
        const baseURL = 'http://image.tmdb.org/t/p/w185/'

        return this.props.popularMovies.data.results.map(movie => {
            // year of release
            const releaseYear = movie.release_date.split('-')[0]
            // shorter description with only 50 words
            let description = movie.overview.split(' ')
            if(description.length > 25){
                description = description.slice(0, 25)      
                description = [...description, '...']
            }
            description = description.join(' ')

            return (
                <Carousel.Item key={movie.id} onClick={() => this.handleClick(movie.id)}>
                    <Link to="/movie-info">
                        <Row>                 
                            <Col>
                                <img src={baseURL + movie.poster_path} alt={movie.title} />  
                            </Col>
                                
                            <Col>
                                <h3>{movie.title} ({releaseYear})</h3>
                                <i className="fas fa-star"></i>
                                <span> {movie.vote_average}</span>
                                <p>{description}</p>
                            </Col>  
                        </Row>
                    </Link>
                </Carousel.Item>
            )
        })
    }

    render(){

        return (
            <div>
                <Container className="popular-movies">
                    <Row>
                        <h1 className="text-center">Popular Movies</h1>
                        <Carousel>
                            {this.popularMovies()}
                        </Carousel>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        popularMovies: state.popularMovies,
        selectedMovie: state.selectedMovie
    }
} 

export default connect(mapStateToProps, { fetchPopularMovies, fetchMovie })(PopularMovies)