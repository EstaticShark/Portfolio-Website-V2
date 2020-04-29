import React, { Component } from 'react';

import './ProjectNode.css';
import Carousel from './Carousel.js'


class ProjectsNode extends Component{  
  constructor(props) {
    super(props);

    //State initilization
    this.state = {
      id: this.props.id,
      title: this.props.title,
      time: this.props.time,
      link: this.props.link,
      content: this.props.content,
      imageIndices: this.props.imageIndices,
      isOpen: this.props.isOpen
    };

    //Function binding
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (id) => {
    console.log(id);
    console.log(this.state.isOpen);

    this.setState({isOpen : !this.state.isOpen});
  }

  render () {
    return (
      <div id="Node-item" onClick= {this.handleClick}>
        { this.state.isOpen ?
          <div id="Node-expanded">
            <span id="Underline">{"-\t" + this.state.title + " (" + this.state.time + ")"}</span>
            <div id="Node-expanded-content">
              {this.state.content} <a href={this.state.link}>Github link.</a>
              <Carousel imageIndices={this.state.imageIndices}/>
            </div>
          </div>
          :
          <div id="Node-collapsed">
            <span id="Underline">{"+\t" + this.state.title + " (" + this.state.time + ")"}</span>
          </div>
        }
      </div>
    )
  }
}

export default ProjectsNode;
