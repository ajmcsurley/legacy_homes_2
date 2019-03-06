import React, { Component } from 'react';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import maryland1 from '../images/2600_Maryland_Avenue/Maryland1.jpg';
import maryland2 from '../images/2600_Maryland_Avenue/Maryland2.jpg';
import maryland3 from '../images/2600_Maryland_Avenue/Maryland3.jpg';
import maryland5 from '../images/2600_Maryland_Avenue/Maryland5.jpg';
import maryland6 from '../images/2600_Maryland_Avenue/Maryland6.jpg';
import maryland8 from '../images/2600_Maryland_Avenue/Maryland8.jpg';
import maryland9 from '../images/2600_Maryland_Avenue/Maryland9.jpg';
import maryland10 from '../images/2600_Maryland_Avenue/Maryland10.jpg';
import maryland11 from '../images/2600_Maryland_Avenue/Maryland11.jpg';

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                maryland1,
                maryland2,
                maryland3,
                maryland5,
                maryland6,
                maryland8,
                maryland9,
                maryland10,
                maryland11
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }


    goToPrevSlide = () => {
        if(this.state.currentIndex === 0){
        return;
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }));     
    }

    goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            });
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())            
        }));  
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return (
            <div className="slider">
                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                        }}>
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} />
                        ))
                    }
                </div>
        
                <LeftArrow  goToPrevSlide={this.goToPrevSlide} />
                <RightArrow goToNextSlide={this.goToNextSlide}/>
            </div>
        );
    }
}