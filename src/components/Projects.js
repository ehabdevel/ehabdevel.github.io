import React, { Component } from 'react'
import projects from '../data/api'
import ProjectPreview from './ProjectPreview'

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="row">
	        <div className="side-content-sm"></div>
		        <div className="main-content-lg">
		          <div className="content-header">
		            <a href="projects" name="projects"><h2>Projects</h2></a>	            
		          </div>
		          <div className="content-body">

			      <h2>Projects I had the honor to work with:</h2>
			        <div className="projects-selector">
			          {projects.map(projectData => <ProjectPreview key={projectData.id} {...projectData} />)}
			        </div>
		          </div>
		        </div>
	        <div className="side-content-sm"></div>
	      </div>
      </div>
    );
  }
}

export default Projects