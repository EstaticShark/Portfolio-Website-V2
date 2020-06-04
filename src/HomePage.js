import React, { Component } from 'react';
import introImage from '../src/assets/Intro-image-1.jpg';
import { IconContext } from "react-icons";
import { TiArrowSortedDown } from "react-icons/ti";
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
                    {/*
                    <span id="Intro-header-left">Martin Chak</span>
                    <span class="Intro-header-subtext-left">
                      Adventurer<br/>
                      Coffee Enthusiast<br/>
                      3rd Year UofT Computer Science Student<br/>
                      and Aspiring Software Developer
                    </span>
                    <img src={hearts} id="heart-container"/>
                    <span id="Intro-header-right">Contacts</span>
                    <span class="Intro-header-subtext-right">
                      <a className="Link-text" href="mailto:martinchakchak@yahoo.ca">martinchakchak@yahoo.ca<IoMdMail/></a><br/>
                      <a className="Link-text" href="https://github.com/EstaticShark">Github<FaGithub/></a><br/>
                      <a className="Link-text" href="https://www.linkedin.com/in/martinchak">Linkedin<FaLinkedin/></a><br/>
                      <a className="Link-text" href="https://www.facebook.com/martin.chak.33">Facebook<FaFacebook/></a>
                    </span>
                    */}
                  </div>

                  {/*<img src={island} id="Island-icon"/>*/}
                </div>
              </div>

              <div id="Intro-content">
                <h2 id="Intro-content-title">CS Student and Software Developer</h2>

                <p id="Intro-text">
                  I am currently a third year undergraduate student at the University of Toronto
                  studying to graduate with a specialist in computer science and a major in mathematics.
                  I code at school and for fun, some of my projects can be viewed below.
                  <br/><br/>
                  I am not actively looking for internships at the moment, but I will be looking
                  for a year long 2021 PEY co-op. If you're interested you can take a look at my
                  <a href="https://drive.google.com/open?id=1stbWlfTAVCdx1MCJwrVb7PcRH38nwYNw"> resume.</a>
                </p>
                <img id="Intro-picture" src={introImage} alt="Cannot be loaded"/>
                <IconContext.Provider value={{ size: "100px"}}>
                  <TiArrowSortedDown id="Down-arrow"/>
                </IconContext.Provider>
              </div>
          </div>
    );
  }
}

export default HomePage;
