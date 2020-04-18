import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../App.css'
import PopularMovies from './PopularMovies'
import SelectedMovie from './SelectedMovie'
import SearchBar from './SearchBar'
import TopRatedMovies from './TopRatedMovies'
import { displaySearchResults, clearSelectedMovie } from '../actions'

const App = props => {
    const handleClick = () => {
        if(props.displayResults.displayResults === true){
            props.displaySearchResults(false)
        }
    }
    // BrowserRouter to navigate between the main screen to selected movie details page
    return (
        <BrowserRouter>
            <Route render={({ location }) => (
                <div className="main-app"  onClick={handleClick}>
                    <div className="header">
                        <img 
                            className="float-right" 
                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" 
                            alt="TMDB"
                            width="100px"
                        />
                        <Link to="/">
                            <h1>PopCorn</h1>
                        </Link>
                        {window.location.href.includes('/movie-info') && <Link to="/"><i className="fas fa-chevron-circle-left" onClick={() => props.clearSelectedMovie()}></i></Link>}
                        {window.location.href.includes('/top-rated') && <Link to="/"><i className="fas fa-chevron-circle-left"></i></Link>}
                    </div>
                    
                    <SearchBar />

                    <Switch>
                        <Route exact path="/" component={PopularMovies} />
                        <Route exact path="/movie-info" component={SelectedMovie} />
                        <Route exact path="/top-rated" component={TopRatedMovies} />
                    </Switch>     
                </div>
            )} />
        </BrowserRouter>
    )
}

const mapStateToProps = state => {
    return {
        displayResults: state.displaySearchResults
    }
}

export default connect(mapStateToProps, { displaySearchResults, clearSelectedMovie })(App)