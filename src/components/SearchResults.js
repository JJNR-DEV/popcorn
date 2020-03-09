import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchMovie, displaySearchResults } from '../actions'

class SearchResults extends React.Component{
    // when user selects movie go to selected movie details page
    handleClick(id){
        this.props.fetchMovie(id)
        // hide search results
        this.props.displaySearchResults(false)
    }
    
    results(){
        // base url for movie posters
        const baseURL = 'http://image.tmdb.org/t/p/w185/'
        return this.props.results.searchedMovie.map(movie => {
            if(movie.poster_path !== null){
                return (
                    <li key={movie.id} >
                        <Link to="/movie-info">
                            <div className="search-results" onClick={() => this.handleClick(movie.id)}>
                                <img src={baseURL + movie.poster_path} className="results-image" alt={movie.title} />
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
            }
        })
    }

    render(){
        if(!this.props.results){
            return <div></div>
        }

        return (
            <div className="results-container">
                <ul>
                    {this.results()}
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