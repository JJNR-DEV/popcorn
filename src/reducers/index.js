import { combineReducers } from 'redux'

const popularMoviesReducer = (state = null, action) => {
    switch(action.type){
        case 'POPULAR_MOVIES':
            return action.payload
        default:
            return state
    }
}

const movieSelectedReducer = (state = { render: false, movie: null }, action) => {
    switch(action.type){
        case 'SELECTED_MOVIE':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    popularMovies: popularMoviesReducer,
    selectedMovie: movieSelectedReducer
})