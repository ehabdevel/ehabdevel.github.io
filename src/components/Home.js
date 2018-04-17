import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

class Home extends Component {

  render() {
    return (
      <div>
      	<Header />
      	<section id="about">
		      <div className="row white box-shadow">
		        <div className="side-content"></div>
	        	 <div className="main-content">
		          <div className="content-header">
		            <a href="/about">
		            	<h2>About</h2>
		            </a>	            
		          </div>
		          <div className="content-body">
		            <p>I am a Front end developer with a lot of passion for all new technologies, such as: cloud computing, internet of things, artificial intelligence, blockchain, 3D printing, etc. <Link to="/about" className="more">read more...</Link></p>
		          </div>
		        </div>
		        <div className="side-content"></div>
		      </div>
		</section>
		<section id="experience">
		    <Experience />
		</section>
		<section id="education">
		    <Education />
		</section>
		<section id="projects">
		    <Projects />
		</section>
		<section id="skills">
		    <Skills />
		</section>
		<section id="contact">
		    <Contact />
		</section>

      </div>
    );
  }
}

export default Home