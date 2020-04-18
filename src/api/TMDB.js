import axios from 'axios'
import { api_key } from './config/popcorn.json'
const baseURL = 'https://api.themoviedb.org/3/'

// API call without parameters
export const tmdb = axios.create({
    baseURL,
    params: {
        api_key
    }
})

// API call with Search query for parameters
export const tmdbQuery = query => {
    return {
        baseURL,
        params: {
            api_key,
            query
        }
    }
}

// API call with page as a parameters
export const tmdbPages = page => {
    return {
        baseURL,
        params: {
            api_key,
            page
        }
    }
}