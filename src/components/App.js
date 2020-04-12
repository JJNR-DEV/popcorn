import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../App.css'
import PopularMovies from './PopularMovies'
import SelectedMovie from './SelectedMovie'
import SearchBar from './SearchBar'
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
                            src="https://www.themoviedb.org/assets/2/v4/logos/208x226-stacked-green-9484383bd9853615c113f020def5cbe27f6d08a84ff834f41371f223ebad4a3c.png" 
                            alt="TMDB"
                            width="50px"
                        />
                        <Link to="/">
                            <h1>PopCorn</h1>
                        </Link>
                        {window.location.href.includes('/movie-info') && <Link to="/"><i className="fas fa-chevron-circle-left" onClick={() => props.clearSelectedMovie()}></i></Link>}
                    </div>
                    
                    <SearchBar />

                    <Switch>
                        <Route exact path="/" component={PopularMovies} />
                        <Route exact path="/movie-info" component={SelectedMovie} />
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