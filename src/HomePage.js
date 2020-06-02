import React, { Component } from 'react';
import introImage from '../src/assets/Intro-image-1.jpg'
import hearts from '../src/assets/heart-container.png'
import island from '../src/assets/island-color-temp.png'
import { FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import { IconContext } from "react-icons";
import { IoMdMail } from 'react-icons/io'
import { FaFlask } from 'react-icons/fa'
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
              <div id="Intro-header-background">
                <div id="Intro-header">
                  <div id="Intro-header-title">
                    <span id="Intro-header-name">Martin Chak</span>
                    <img src={hearts} id="heart-container"/>
                    <span class="Intro-header-subtext-left">
                      Adventurer<br/>
                      Coffee Enthusiast<br/>
                      3rd Year UofT Computer Science Student<br/>
                      and Aspiring Software Developer
                    </span>
                    <span class="Intro-header-subtext-right">
                      <a className="Link-text" href="mailto:martinchakchak@yahoo.ca">martinchakchak@yahoo.ca<IoMdMail/></a><br/>
                      <a className="Link-text" href="https://github.com/EstaticShark">Github<FaGithub/></a><br/>
                      <a className="Link-text" href="https://www.linkedin.com/in/martinchak">Linkedin<FaLinkedin/></a><br/>
                      <a className="Link-text" href="https://www.facebook.com/martin.chak.33">Facebook<FaFacebook/></a>
                    </span>
                  </div>

                  <img src={island} id="Island-icon"/>
                </div>
              </div>

              <div id="Intro-content">
                <h2 id="Intro-content-title">About Me</h2>

                <p id="Intro-text">
                  I am currently a third year undergraduate student at the University of Toronto
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
                  can look at my <a href="https://drive.google.com/open?id=1stbWlfTAVCdx1MCJwrVb7PcRH38nwYNw">resume.</a>
                </p>
                <img id="Intro-picture" src={introImage} alt="Cannot be loaded"/>
              </div>
          </div>
    );
  }
}

export default HomePage;
