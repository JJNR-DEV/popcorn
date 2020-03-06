import TMDB from '../api/TMDB'

// action creator to collect popular movies for landing screen
export const fetchPopularMovies = () => async dispatch => {
    const popularMovies = await TMDB.get('/trending/movie/day')

    dispatch({
        type: 'POPULAR_MOVIES',
        payload: popularMovies
    })
}

export const fetchMovie = movieId => async dispatch => {
    // https://api.themoviedb.org/3/movie/342470?api_key=bc66ddfc3498c83e45f70e89db21b4eb

    const movie = await TMDB.get('/movie/' + movieId)

    dispatch({
        type: 'SELECTED_MOVIE',
        payload: {
            render: true,
            movie: movie.data
        }
    })
}
