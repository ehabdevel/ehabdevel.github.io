import React, { Component } from 'react'
import Typist from 'react-typist'
import Scrollchor from 'react-scrollchor'
import { Link } from 'react-router-dom'


class Header extends Component {

  render() {
    return (
      <div>
         <div className="jumbotron">
	        <div className="jumbotron-text">
	         <Typist
	          className="TypistExample-header"
              cursor={{ hideWhenDone: true }}
	          onTypingDone={this.onHeaderTyped}
	        >
	          <Link to="/"><h1>Ehab Ashour</h1></Link>
	        </Typist>
	         <Typist
              className="TypistExample-message"
              startDelay={2000}
              cursor={{ hideWhenDone: true }}
            >
	          Front-End Web Developer in <Typist.Delay ms={500} />Egypt.
              <Typist.Backspace count={6} delay={1000} />
              <Typist.Delay ms={750} />
              Egypt.
	          </Typist>
	        </div>
	        <div className="jumbotron-social">
	          <ul className="ul-social">
	            <li className="li-social-links">
	              <Link className="social" to="https://github.com/ehabdevel" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></Link>
	            </li>
	            <li className="li-social-links">
	              <Link className="social" to="https://www.linkedin.com/in/ehabdevel/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
	            </li>
	            <li className="li-social-links">
	              <Link className="social" to="https://twitter.com/ehabdevel" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
	            </li>
	          </ul>
	        </div>
	        <div id="down-arrow">
		        <Scrollchor to="about" className="test9"><i className="fa fa-chevron-down" aria-hidden="true"></i></Scrollchor>
	        </div>
	      </div>
      </div>
    );
  }
}

export default Header