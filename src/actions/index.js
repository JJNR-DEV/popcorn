import { tmdb, tmdbQuery } from '../api/TMDB'
import axios from 'axios'

// action creator to collect popular movies for landing screen
export const fetchPopularMovies = () => async dispatch => {
    const popularMovies = await tmdb.get('/trending/movie/day')

    dispatch({
        type: 'POPULAR_MOVIES',
        payload: popularMovies
    })
}

export const fetchMovie = movieId => async dispatch => {
    // https://api.themoviedb.org/3/movie/342470?api_key=bc66ddfc3498c83e45f70e89db21b4eb

    const movie = await tmdb.get('/movie/' + movieId)

    dispatch({
        type: 'SELECTED_MOVIE',
        payload: {
            render: true,
            movie: movie.data
        }
    })
}

export const fetchSearchedMovie = movieName => async dispatch => {
    // https://api.themoviedb.org/3/search/movie?api_key=bc66ddfc3498c83e45f70e89db21b4eb

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

export const displaySearchResults = display => dispatch => {
    dispatch({
        type: 'DISPLAY_SEARCH_RESULTS',
        payload: {
            displayResults: display
        }
    })
}
