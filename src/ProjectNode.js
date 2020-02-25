import React, { Component } from 'react';

import './ProjectNode.css';
import images from './ProjectImages.js'


class ProjectsNode extends Component{  
  constructor(props) {
    super(props);

    //State initilization
    this.state = {
      title: this.props.title,
      time: this.props.time,
      content: this.props.content,
      images: this.props.images,/*
      backdrop: this.props.backdrop,*/

      isOpen: false
    };

    //Binding functions
    //this.toggleNode = this.toggleNode.bind(this);
  }
  /*
  toggleNode () {
    this.setState({isOpen : !this.state.isOpen });
    console.log("Node was toggled");
  }/*
  
  render() {
    /*
    const styles = {
      nodeCollapsed: {
        backgroundImage: `url(${images[this.state.backdrop]})`
      }
      ,
      nodeExpanded: {
        backgroundImage: images[this.state.backdrop] 
      }
    }

    return (
        <div onClick={this.toggleNode} id="Node-item">
          {
            this.state.isOpen ?
            <div style={styles.nodeExpanded} id="Node-expanded">
              
            </div>
            :
            <div style={styles.nodeCollapsed} id="Node-collapsed">
              <span id="Node-collapsed-title">{this.state.title}</span>
            </div>
          }
        </div>
    );
    */
  }
}

export default ProjectsNode;
