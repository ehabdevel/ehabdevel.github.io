import React, { Component } from 'react';
import Bar from './Bar'


const skills = ['HTML(5)', 'CSS(3)', 'PHP/WordPress', 'Javascript', '❤️ Node', '❤️ React', '❤️ React-Native', '❤️ Laravel', '❤️ Symfony', 'CakePHP', 'Drupal', 'Vue', 'Angular', 'Oracle JET', 'ES6', 'Flux', 'Redux', 'Mobx', 'Webpack', 'GraphQL', 'Java 7 SE/EE/ADF', 'Android', 'MySQL', 'MongoDB', 'OracleDB', 'LESS/SASS', 'Responsive designs', '❤️ PWA', '❤️ Git/Github', 'Windows', 'Linux'].map(skill => 
    <li className="li-skills" key={skill}>{skill}</li>
);

class Skills extends Component {
  render() {
    return (
      <div>
        
	      <div className="row white box-shadow">
	        <div className="side-content"></div>
	        <div className="main-content">
	          <div className="content-header">
	            <a href="skills" name="skills"><h2>Key skills</h2></a>	            
	          </div>
	          <div className="content-body">
	          <Bar />
	            <ul className="ul-skills">
	            {skills}
	            </ul>
	          </div>
	        </div>
	        <div className="side-content"></div>
	      </div>

      </div>
    );
  }
}

export default Skills