import { tmdb, tmdbQuery } from '../api/TMDB'
import axios from 'axios'

// action creator to collect popular movies for landing screen
export const fetchPopularMovies = () => async dispatch => {
    // get popular movies of the day
    const popularMovies = await tmdb.get('/trending/movie/day')

    dispatch({
        type: 'POPULAR_MOVIES',
        payload: popularMovies.data
    })
}

// action creator to fetch movie selected
export const fetchMovie = () => async dispatch => {

    const movieID = window.location.search.replace("?=", "")

    const movie = await tmdb.get('/movie/' + movieID)

    dispatch({
        type: 'SELECTED_MOVIE',
        payload: {
            movie: movie.data
        }
    })
}

// action creator to collect results from search bar
export const fetchSearchedMovie = movieName => async dispatch => {

    // change space to %20 for link params
    let movie = ''
    for(var i in movieName){
        movieName[i] === ' ' ? movie += '%20' : movie += movieName[i]
    }

    // create a new TMDB connection with the search query as part os the link parameters
    const searchQuery = axios.create(tmdbQuery(movie))
    const searchedMovie = await searchQuery.get('/search/movie')

    dispatch({
        type: 'SEARCHED_MOVIE',
        payload: {
            searchedMovie: searchedMovie.data.results
        }
    })
}

// action creator to display the search bar results
export const displaySearchResults = display => {
    return {
        type: 'DISPLAY_SEARCH_RESULTS',
        payload: {
            displayResults: display
        }
    }
}
