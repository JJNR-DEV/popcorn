import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pagination from 'react-bootstrap/Pagination'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { fecthTopRatedMovies } from '../actions'
import TopMoviesPage from './TopMoviesPage'

class TopRatedMovies extends Component {
    // get first page of Top Rated movies
    componentDidMount(){
        this.props.fecthTopRatedMovies(1)
    }

    // Pagination row with a limit of 5 pages
    pages(){
        let pages = []
        for(let i = 0; i < 5; i++){
            pages.push (
                <Pagination.Item key={i + 1} onClick={() => this.props.fecthTopRatedMovies(i + 1)}>
                    {i + 1}
                </Pagination.Item>
            )
        }
        return pages
    }

    render(){
        return (
            <div>
                <h1 className="text-center">Top Rated</h1>
                <Container>
                    <Row>    
                        <Pagination style={{margin: '20px auto'}}>    
                            {this.pages()}
                        </Pagination>
                    </Row>
                    {this.props.topRatedMovies !== null ? <TopMoviesPage allMovies={this.props.topRatedMovies.topRated} /> : <div className="text-center" style={{margin: '0 auto'}}><Spinner animation="grow" variant="light" /></div>}
                </Container>
            </div>
        )
    }
}

// get props from topRatedMoviesReducer
const mapStateToProps = ({ topRatedMovies }) => {
    return {
        topRatedMovies
    }
}

export default connect(mapStateToProps, { fecthTopRatedMovies })(TopRatedMovies)