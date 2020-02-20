import React, { Component } from 'react';

import './WordSlots.css';

class WordSlots extends Component{
  constructor(props) {
    super(props);



    //State initilization
    this.state = {
        slotState:["Full-Stack Developer", "Coffee Enthusiast"]
    };

    //Binding functions

  }
  
  render() {
    return (
        <div id="WordSlots-container">
            <span id="Intro-header-text">Aspiring</span>
            <div id="Intro-header-slots">
                <p>{this.state.slotState[0]}</p>
            </div>
        </div>
    );
  }
}

export default WordSlots;
