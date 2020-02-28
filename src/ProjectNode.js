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
      images: this.props.images,
      isOpen: false
    };
  }

  render () {
    return (
      <div id="Node-item">
        <p>Testing</p>
      </div>
    )
  }
}

export default ProjectsNode;
