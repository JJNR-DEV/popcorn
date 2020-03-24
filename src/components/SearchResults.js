import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

import { fetchMovie, displaySearchResults } from '../actions'
import { baseURL } from './links/Images'
import broken from '../images/broken.png'

class SearchResults extends React.Component{
    // when user selects movie go to selected movie details page
    handleClick(){
        this.props.fetchMovie()
        // hide search results
        this.props.displaySearchResults(false)
    }
    
    results(){
        return this.props.results.searchedMovie.slice(0, 6).map(movie => {
            return (
                <li key={movie.id} >
                    <Link to={`/movie-info?=${movie.id}`}>
                        <div className="search-results" onClick={() => this.handleClick()}>
                            {movie.poster_path === null ? <img src={broken} className="results-image broken-img" alt="broken img" /> : <img src={baseURL + movie.poster_path} className="results-image" alt={movie.title} />}
                            <div className="results-info">
                                <h3>{movie.title}</h3>
                                <i className="fas fa-star"></i>
                                <span> {movie.vote_average}</span>
                                <p>{movie.release_date}</p>
                            </div>
                        </div>
                    </Link>
                </li>
            )
        })
    }

    render(){
        let style = {
            position: "relative",
            left: 0,
            right: 0,
            textAlign: "center",
            padding: "15px"
        }

        console.log(this.props.results)

        if(!this.props.results){
            return <div className="results-container" style={style}><Spinner animation="border" variant="light" /></div>
        }

        if(this.props.results.searchedMovie.length === 0){
            return <div className="results-container" style={style}>No results found</div>
        }

        return (
            <div className="results-container">
                <ul>
                    {this.results()}
                    <div>See more</div>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        displayResults: state.displaySearchResults
    }
}

export default connect(mapStateToProps, { fetchMovie, displaySearchResults })(SearchResults)