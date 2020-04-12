import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'

import CarouselSlide from './CarouselSlide'
import CarouselControls from './CarouselControls'

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    // check if window gets resized
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions)
    }

    // if user leaves the main menu then stop event listener
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    // get the screen dimensions
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight })
    }

    numberOfSlides = () => {
        // depending on screen size how many slides should be displayed
        if(this.state.width > 701){
            return 5
        } else if(this.state.width <= 701 && this.state.width >= 560){
            return 3 
        } else if(this.state.width < 560){
            return 2
        }
    }

    slides = () => {
        let counter = 0
        const slideCount = this.numberOfSlides()
        
        return this.props.movies.map(slide => {
            if(counter < slideCount){
                counter = counter + 1
                return <CarouselSlide slide={slide} slideCount={slideCount} classNames={'carousel-slide fade-in'} key={slide.id} />
            }
            else{
                counter = counter + 1
                return <CarouselSlide slide={slide} slideCount={slideCount} classNames={'carousel-slide slide-hide fade-in'} key={slide.id} />
            }
        })
     
    }

    render(){
        return (
            <div className="carousel" data-test='carousel-container'>
                <Col lg={1} md={1} sm={1} xs={1} className="left-arrow fa-2x">
                    <CarouselControls className={"fas fa-chevron-left"} limit={this.props.movies.length} slideCount={this.numberOfSlides()} />
                </Col>
                    {this.slides()}
                <Col lg={1} md={1} sm={1} xs={1} className="right-arrow fa-2x">
                    <CarouselControls className={"fas fa-chevron-right"} limit={this.props.movies.length} slideCount={this.numberOfSlides()} />
                </Col>
            </div>
        )
    }
    
} 

export default Carousel 