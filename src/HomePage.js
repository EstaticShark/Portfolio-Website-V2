import React, { Component } from 'react';
import backgroundVideo from '../src/assets/home-background.mp4'
import introImage from '../src/assets/Intro-image-1.jpg'
import testImage from '../src/assets/testing-image.jpg'

import './HomePage.css';

import WordSlots from './WordSlots';

class HomePage extends Component{
  constructor(props) {
    super(props);

    //State initilization
    this.state = {
        yPos: window.pageYOffset
    };

    //Binding functions

  }
  
  render() {
    return (
        <div id="Home-container" className="#home">
              
              <div id="Intro-header">

                {/*<video id="Intro-animation" src={backgroundVideo} autoPlay loop muted/>*/}
                <img id="Intro-header-image" src={testImage} alt="Cannot be loaded"/>
                <div id="Intro-gradient-container"/>
                <div id="Intro-gradient-container-side"/>

                <div id="Intro-header-content">
                  <div id="Intro-header-title">
                    <h2 id="Intro-header-text">Martin Chak</h2>
                    <p id="Intro-header-text-small">Computer Science Student and Software Engineer</p>
                  </div>
                </div>
              </div>

              <div id="Intro-content">
                <h2>About Me</h2>

                <p id="Intro-text">
                  I am currently a second year undergraduate student at the University of Toronto
                  studying to graduate with a specialist in computer science and a major in mathematics. 
                  My goal is to become a full-stack developer.
                  <br/><br/>
                  I enjoy coding and do a lot of it on the side. I have working knowledge with 
                  both front and back end technologies. On the front-end, I have worked with ReactJS,
                  Java Script and a couple CSS frameworks like SASS. I am more experienced with
                  the back-end of things, working with API creation libraries such as Flask and
                  express.js, databasing with Firebase and MongoDB, and utilizing cloud platforms
                  such as AWS, Google Cloud Services, etc.
                  <br/><br/>
                  I am looking for 2020 summer internships at the moment, if you're interested you
                  can look at my <a href="https://github.com/EstaticShark">resume.</a>
                </p>
                <img id="Intro-picture" src={introImage} alt="Cannot be loaded"/>
              </div>
          </div>
    );
  }
}

export default HomePage;
