import React, { Component } from 'react';
import backgroundVideo from '../src/assets/home-background.mp4'

import './HomePage.css';

import {animated, fadeInUp} from './animate.css'
import WordSlots from './WordSlots';

class HomePage extends Component{
  constructor(props) {
    super(props);

    //State initilization
    this.state = {

    };

    //Binding functions

  }
  
  render() {
    return (
        <div id="Home-container" className="#home">
              
              <div id="Intro-header">

                <video id="Intro-animation" src={backgroundVideo} autoPlay loop muted/>
                <div id="Intro-gradient-container"/>
                <div id="Intro-gradient-container-side"/>

                <div id="Intro-header-content">
                  <div id="Intro-header-title">
                    <WordSlots/>
                  </div>
                </div>
              </div>

              <div id="Intro-content">

              </div>
          </div>
    );
  }
}

export default HomePage;
