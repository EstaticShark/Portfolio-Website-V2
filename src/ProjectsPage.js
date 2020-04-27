import React, { Component } from 'react';
import ProjectNode from './ProjectNode.js';

import './ProjectsPage.css';

class ProjectsPage extends Component{
  constructor(props) {
    super(props);

    //Binding functions

    //State initilization
    this.state = {
      projectNodes: [
        <ProjectNode
                id={0}
                title={"LoL Info Bot"}
                time={"August 2019"}
                content={"I made a Discord bot that allowed users to search up players in the popular"
                        + "online MOBA, League of Legends. It could search up players by region and return"
                        + "information such as playtime, favourite champions and rank."}
                imageIndices={[0, 1]}
                isOpen={false}
              />,
        <ProjectNode
                id={1}
                title={"Stem Notes"}
                time={"January 2020"}
                content={"Created an iPad compatible notes application with team mates at UofT Hacks 2020."
                        + " Application would take drawn equations and text from a notes application and"
                        + " use OCR to convert notes to LaTeX documents. I was responsible for the backend,"
                        + " where I worked on connecting the iPad front end with the OCR program using Google"
                        + " Cloud Services and maintained the Firebase DB that contained the LaTeX."}
                imageIndices={[2, 3]}
                isOpen={false}
              />,
        <ProjectNode
                id={2}
                title={"Portfolio Website"}
                time={"May 2019 - Present"}
                content={"Celine eats hot chip"}
                imageIndices={[0, 1]}
                isOpen={false}
              />
      ],
      isOpen: [
        false
      ]
    };
  }

  render() {

    return (
        <div id="Projects-container" className="#projects">
          <div id="Projects-header">
            <h2>Projects</h2>
          </div>

          <div id="Node-container">          
            {this.state.projectNodes[0]}
            {this.state.projectNodes[1]}
            {this.state.projectNodes[2]}
          </div>
        </div>
    );
  }
}

export default ProjectsPage;
