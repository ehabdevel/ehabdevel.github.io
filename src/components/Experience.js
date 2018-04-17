import React, { Component } from 'react'

class Experience extends Component {
  render() {
    return (
      <div>

       <div className="row">
	        <div className="side-content"></div>
	        <div className="main-content">
	          <div className="content-header">
	            <a href="experience" name="experience"><h2>Experience</h2></a>	            
	          </div>

	          <div className="content-body">
	            <div className="card">
	              <div className="card-header">
	                <h4>{this.props.company} <span className="job-title">{this.props.period}</span></h4>
	              </div>
	              <div className="card-content">
	                <b>{this.props.title}</b>
	                <p>{this.props.details} - {this.props.domain}</p>
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


Experience.defaultProps = {
  	company: 'ITRedSea computer company',
	title: 'Developer/Owner',
	period: '2009 – present',
	domain: 'https://itredsea.com',
	details: 'Hurghada, Egypt',
};


export default Experience