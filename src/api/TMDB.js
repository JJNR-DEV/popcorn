import axios from 'axios'
import { api_key } from './config/popcorn.json'
const baseURL = 'https://api.themoviedb.org/3/'

export const tmdb = axios.create({
    baseURL,
    params: {
        api_key
    }
})

export const tmdbQuery = query => {
    return {
        baseURL,
        params: {
            api_key,
            query
        }
    }
}