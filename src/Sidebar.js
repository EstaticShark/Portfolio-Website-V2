import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io'
import Sidebar from "react-sidebar";

import './Sidebar.css';

class SideBar extends Component{
  constructor(props) {
    super(props);

    //State initilization
    this.state = {

    };

    //Binding functions

  }
  
  render() {
    return (
        <div id="App-side-bar-container">
          <Sidebar
            //rootClassName="Side-bar-root"
            sidebarClassName="Side-bar"
            //contentClassName="Side-bar-root"
            //overlayClassName="Side-bar-root"
            //styles={{ sidebar: { background: "white" } }}
            children={
              <div></div>
              }
            sidebar={
              <div id="Side-bar-content">
                <header className="">
                  <img  src="https://avatarfiles.alphacoders.com/161/thumb-161188.png" alt="Blue"
                        id="Profile-picture"
                        className="img-fluid rounded-circle"/>
                  
                  <h4 className="my-3">
                    <b>Martin Chak</b>
                  </h4>
                </header>

                <div className="d-flex flex-column align-items-center my-3 mx-4 Side-bar-cards-container">
                  
                  <div id="Side-bar-nav">

                      <form className="Side-bar-nav-link">
                        <button className="Side-bar-nav-submit" type="submit" formAction="#home">Home</button>
                      </form>

                      <form className="Side-bar-nav-link">
                        <button className="Side-bar-nav-submit" type="submit" formAction="#projects">Projects</button>
                      </form>

                      <form className="Side-bar-nav-link">
                        <button className="Side-bar-nav-submit" type="submit" formAction="#metrics">Metrics</button>
                      </form>
                    
                  </div>

                  <div id="Side-bar-contacts">
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
              </div>
              }
            docked={true}
            pullRight={false}
            transitions={false}
          >
          </Sidebar>
        </div>
    );
  }
}

export default SideBar;
