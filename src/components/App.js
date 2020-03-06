import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import '../App.css'
import PopularMovies from './PopularMovies'
import SelectedMovie from './SelectedMovie'
import SearchBar from './SearchBar'

const App = () => {
    return (
        <BrowserRouter>
            <div className="main-app">
                <img 
                    className="float-right" 
                    src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" 
                    alt="TMDB"
                    width="140px"
                />
                <h1>PopCorn</h1>
                <SearchBar />
                <Switch>
                    <Route exact path="/" component={PopularMovies} />
                    <Route exact path="/movie-info" component={SelectedMovie} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App