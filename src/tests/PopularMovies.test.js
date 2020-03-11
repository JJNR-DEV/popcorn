import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import { PopularMovies } from '../components/PopularMovies'

// required configuration
Enzyme.configure({ 
    adapter: new Adapter(),
    disableLifecycleMethods: true
});

// dummy data mimicking API response data
const dummyData = {"results": [
    {
        "id": 1,
        "title": "Some movie",
        "release_date": "2020-01-01",
        "vote_average": "8",
        "poster_path": "/dummydata.jpg",
        "overview": "Description of a movie"
    },
    {
        "id": 2,
        "title": "Some movie",
        "release_date": "2020-01-01",
        "vote_average": "8",
        "poster_path": "/dummydata.jpg",
        "overview": "Description of a movie"
    },
    {
        "id": 3,
        "title": "Some movie",
        "release_date": "2020-01-01",
        "vote_average": "8",
        "poster_path": "/dummydata.jpg",
        "overview": "Description of a movie"
    }
]}

describe('Popular Movies', () => {
    it('Popular Movies should be rendered in a Carousel', () => {
        const wrapper = shallow(<PopularMovies popularMovies={dummyData} />)
        const carousel = wrapper.find('CarouselItem')

        expect(carousel.length).toBeGreaterThan(0)
    })
})
