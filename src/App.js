import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io'
import './App.css';
import Sidebar from "react-sidebar";

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
        
        <div className="App-side-bar">
          <Sidebar
            //rootClassName="Side-bar-root"
            sidebarClassName="Side-bar"
            //contentClassName="Side-bar-root"
            //overlayClassName="Side-bar-root"
            //styles={{ sidebar: { background: "white" } }}

            sidebar={
              <div className="Side-bar-content">
                <header className="">
                  <img  src="https://avatarfiles.alphacoders.com/161/thumb-161188.png" alt="Blue"
                        className="img-fluid rounded-circle Profile-picture"/>
                  
                  <h4 className="my-3">
                    <b>Martin Chak</b>
                  </h4>
                </header>

                <div className="d-flex flex-column align-items-center my-3 mx-4">
                  <div className="card-body Side-bar-card-line">
                    <a className="Side-bar-card-link" href="mailto:martinchakchak@yahoo.ca">
                      <IoMdMail className="Side-bar-card-icon"/>
                      <br/>
                      <p className="Side-bar-card-text email-text">martinchakchak@yahoo.ca</p>
                    </a>
                  </div>

                  <div className="card-body Side-bar-card-line">
                    <a className="Side-bar-card-link" href="https://github.com/EstaticShark">
                      <FaGithub className="Side-bar-card-icon"/> 
                      <br/>
                      <p className="Side-bar-card-text">Github</p>
                    </a>
                  </div>

                  <div className="card-body Side-bar-card-line">
                    <a className="Side-bar-card-link" href="https://www.linkedin.com/in/martinchak">
                        <FaLinkedin className="Side-bar-card-icon"/>
                        <br/>
                        <p className="Side-bar-card-text">Linkedin</p>
                    </a>
                  </div>

                  <div className="card-body Side-bar-card-line">
                    <a className="Side-bar-card-link" href="https://www.facebook.com/martin.chak.33">
                        <FaFacebook className="Side-bar-card-icon"/>
                        <br/>
                        <p className="Side-bar-card-text">Facebook</p>
                    </a>
                  </div>
                </div>
              </div>
              }
            docked={true}
            pullRight={false}
            transitions={false}
          >
          </Sidebar>
        </div>
        <header className="header">
          <h1>
            Hello World
          </h1>
        </header>
        
      </div>
    );
  }
}

export default App;
