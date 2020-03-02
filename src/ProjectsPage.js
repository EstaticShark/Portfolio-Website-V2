import React, { Component } from 'react';
import ProjectNode from './ProjectNode.js';
import StackGrid from "react-stack-grid";

import './ProjectsPage.css';

class ProjectsPage extends Component{
  constructor(props) {
    super(props);

    //State initilization
    this.state = {
        
    };

    //Binding functions

  }
  
  render() {
    const projectNodes = [
      <ProjectNode
              title={"Stem Notes"}
              time={"January 2020"}
              content={"Created an iPad compatible notes application with team mates at UofT Hacks 2020."
                      + " Application would take drawn equations and text from a notes application and"
                      + " use OCR to convert notes to LaTeX documents. I was responsible for the backend,"
                      + " where I worked on connecting the iPad front end with the OCR program using Google"
                      + " Cloud Services and maintained the Firebase DB that contained the LaTeX."}
              images={[0, 1]}
            />
    ]


    return (
        <div id="Projects-container" className="#projects">
          <div id="Projects-header">
            <h2>Projects</h2>
          </div>

          <div id="Node-container">
          <StackGrid
            columnWidth={150}
          >
            {projectNodes[0]}
            {projectNodes[0]}
            {projectNodes[0]}
            {projectNodes[0]}
            {projectNodes[0]}
            {projectNodes[0]}
          </StackGrid>
          </div>
        </div>
    );
  }
}

export default ProjectsPage;