import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'

import { fetchPopularMovies } from '../actions'
import Carousel from './Carousel'

class PopularMovies extends React.Component {
    // call action creator for popular movies
    componentDidMount(){
        this.props.fetchPopularMovies()
    }

    renderSlide(){
        if(!this.props.popularMovies.results){
            return <div></div>
        }

        return <Carousel movies={this.props.popularMovies.results} />
    }

    render(){
        return (
            <div>
                <Container className="popular-movies" style={{maxWidth: '100%'}}>
                    <Row>
                        <h1 className="text-center">Popular Movies</h1>
                        {!this.props.popularMovies ? <div className="text-center" style={{margin: '0 auto'}}><Spinner animation="grow" variant="light" /></div> : <div style={{width: '100%'}}>{this.renderSlide()}</div>}
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