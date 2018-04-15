import React, { Component } from 'react';

class Edu extends Component {

  render() {
    return (
      <div>        
	      <div className="row white box-shadow">
	        <div className="side-content"></div>
	        <div className="main-content">
	          <div className="content-header">
	            <a href="education" name="education"><h2>Education</h2></a>	            
	          </div>
	          <div className="content-body">


	            <div className="card">
	              <div className="card-header">
	                <h4>{this.props.quote} <span className="job-title">{this.props.cert}</span></h4>
	              </div>
	              <div className="card-content">
	                <p>{this.props.school}</p>
	                <blockquote>{this.props.descrep}</blockquote>
	              </div>
	            </div>

				<h2>Training and Courses</h2>
	            <div className="card">
	              <div className="card-header">
	                <h4>{this.props.course1} <span className="job-title">{this.props.course1cert}</span></h4>
	              </div>
	              <div className="card-header">
	                <h4>{this.props.course2} <span className="job-title">{this.props.course2cert}</span></h4>
	              </div>
	            </div>

	          </div>
	        </div>
	        <div className="side-content"></div>
	      </div>

      </div>
    );
  }
}

Edu.defaultProps = {
  	school: 'The Higher Institute of Cooperative and Administrative studies.',
	cert: 'cert 2006.',
	quote: 'Bachelor’s Degree, Business Administration',
	descrep: 'A detailed study of Administrative principles derived from the thoughts of scientific management scientists - Schools of Management Thought.',
	course1: 'Java 7 SE/EE/ADF',
	course1cert: 'cert 2017',
	course2: 'Android Application Developer',
	course2cert: 'cert 2014',
};


export default Edu;
