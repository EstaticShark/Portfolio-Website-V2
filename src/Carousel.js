import React, { Component } from 'react';
import images from './ProjectImages.js'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

class Carousel extends Component{
  constructor(props) {
    super(props);

    //State initilization
    this.state = {
        imageIndices: this.props.imageIndices,
        currIndice: 0
    };

    //Binding functions
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideLeft = (event) => {
    event.stopPropagation();

    console.log("Slide to the left from", this.state.currIndice);
    const lastIndice = this.state.imageIndices.length - 1;
    const newIndice = this.state.currIndice === 0 ? lastIndice : this.state.currIndice - 1;
    this.setState({currIndice: newIndice});
    console.log("New indice at", newIndice);
  }

  slideRight = (event) => {
    event.stopPropagation();

    console.log("Slide to the right from", this.state.currIndice);
    const lastIndice = this.state.imageIndices.length - 1;
    const newIndice = this.state.currIndice === lastIndice ? 0 : this.state.currIndice + 1;
    this.setState({currIndice: newIndice});
    console.log("New indice at", newIndice);
  }
  
  render() {
    return (
        <div id="Carousel">
            <FaArrowLeft className="Left-arrow" onClick={this.slideLeft}/>
            <img id="Slide-image" src={images[this.state.imageIndices[this.state.currIndice]]} alt="Cannot be loaded"/>
            <FaArrowRight className="Right-arrow" onClick={this.slideRight}/>
        </div>
    );
  }
}

export default Carousel;
