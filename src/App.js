import React, { Component } from 'react';
import SideBar from './Sidebar.js'
import HomePage from './HomePage.js'
import ProjectsPage from './ProjectsPage.js'

import './App.css';
import './Sidebar.css';
import './HomePage.css';
import './ProjectsPage.css';
import './MetricsPage.css';

class App extends Component{
  constructor(props) {
    super(props);

    //State initilization
    this.state = {

    };

    //Binding functions

  }
  
  render() {
    return (
      <div className="App">
        
        <SideBar/>
        
        <div className="App-content">
          <HomePage/>

          <ProjectsPage/>
          
          <div id="Metrics-container" className="#metrics">
            <div id="Metrics-content">
              <h2 id="Temp-text">
                Metrics Coming Soon
              </h2>
            </div>
          </div>
        </div>
        {/*
        <div id="Dev-content">
          <p id="Dev-content-text">Work in progress, mobile version unavailable</p>
        </div>
        */}
      </div>
    );
  }
}

export default App;
