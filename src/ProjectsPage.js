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
                link={"https://github.com/EstaticShark/LoLInfoBot"}
                linkExists={true}
                content={"I made a Discord bot that allowed users to search up players in the popular"
                        + " online MOBA, League of Legends. It could search up players by region and return"
                        + " information such as playtime, favourite champions and rank."}
                imageIndices={[0, 1]}
                isOpen={false}
              />,
        <ProjectNode
                id={1}
                title={"Stem Notes"}
                time={"January 2020"}
                link={"https://devpost.com/software/stem-notes-c5i7ho"}
                linkExists={true}
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
                link={"https://bit.ly/EstaticShark"}
                linkExists={true}
                content={"A set of portfolio websites I have developed for the sake of job applications,"
                        + " front-end practice and for showing off. I am currently at the second iteration"
                        + " of my site, and I have it all done in React."}
                imageIndices={[4]}
                isOpen={false}
              />,
        <ProjectNode
                id={3}
                title={"Android Game App"}
                time={"October 2019 - December 2019"}
                link={"https://bit.ly/EstaticShark"}
                linkExists={false}
                content={"An android game app that I made together with 5 others for the course"
                        + " CSC207. It featured multiple minigames with a variety of features such"
                        + " as different themes, characters and ingames shops."}
                imageIndices={[5,6,7,8]}
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
            {this.state.projectNodes[3]}
          </div>
        </div>
    );
  }
}

export default ProjectsPage;
