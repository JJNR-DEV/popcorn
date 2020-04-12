import { combineReducers } from 'redux'

// reducer names explain their purpose
const popularMoviesReducer = (state = null, action) => {
    switch(action.type){
        case 'POPULAR_MOVIES':
            return action.payload
        default:
            return state
    }
}

const movieSelectedReducer = (state = { movie: null }, action) => {
    switch(action.type){
        case 'SELECTED_MOVIE':
            return action.payload
        case 'CLEAR_SELECTED_MOVIE':
            return { movie: null }
        default:
            return state
    }
}

const searchedMovieReducer = (state = null, action) => {
    switch(action.type){
        case 'SEARCHED_MOVIE':
            return action.payload
        default:
            return state
    }
}

const displaySearchResultsReducer = (state = {}, action) => {
    switch(action.type){
        case 'DISPLAY_SEARCH_RESULTS':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    popularMovies: popularMoviesReducer,
    selectedMovie: movieSelectedReducer,
    searchedMovie: searchedMovieReducer, 
    displaySearchResults: displaySearchResultsReducer
})