import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from './testUtils'
import Carousel from '../components/Carousel';

test('renders Carousel Slide', () => {
    const carouselContainer = shallow(<Carousel />)
    const container = findByTestAttr(carouselContainer, 'carousel-container')
    expect(container.length).not.toBe(0)
});
