import React, { Component } from 'react'

export default class ProjectPreview extends Component {
  render() {
    return (
      <div className="project-preview">
            <img src={`img/${this.props.image}`} alt="project-img"/>
            <h2 className="name">{this.props.name}</h2>
             <span className="details-count">{this.props.status}</span>
            <section className="details">
              <p className="registered-domain">www.{this.props.link}</p>
              <p className="period">{this.props.startyear} - {this.props.endyear}</p>
              <p className="services-offered">{this.props.services}.</p>
            </section>
      </div>
    );
  }
}