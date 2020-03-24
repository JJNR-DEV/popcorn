import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom'

import { fetchPopularMovies } from '../actions'
import MovieSlide from './MovieSlide'

export class PopularMovies extends React.Component {
    // call action creator for popular movies
    componentDidMount(){
        this.props.fetchPopularMovies()
    }

    // call action creator to fetch details of selected movie
    handleClick(movie){
        this.props.fetchMovie(movie)
    }

    popularMovies(){
        // initial call
        if(!this.props.popularMovies){
            return (
                <div className="text-center">
                    <Spinner animation="grow" variant="light" />
                </div>
            )
        }

        return this.props.popularMovies.results.slice(0, 9).map(movie => {
            return (            
                <Carousel.Item key={movie.id} >
                    <Link to={`/movie-info?=${movie.id}`}>
                        <MovieSlide movie={movie} />      
                    </Link>
                </Carousel.Item>  
            )
        })
    }

    render(){
        return (
            <div>
                <Container className="popular-movies" interval={null}>
                    <Row>
                        <h1 className="text-center">Popular Movies</h1>
                        <Carousel controls={false} indicators={false}>
                            {this.popularMovies()}
                        </Carousel>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={12} className="browse-popular">
                            <Link to={'/'}>
                                Browse Popular Movies
                            </Link>  
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

// in this component you only need access to the Popular Movies
const mapStateToProps = state => {
    return {
        popularMovies: state.popularMovies
    }
} 

export default connect(mapStateToProps, { fetchPopularMovies })(PopularMovies)