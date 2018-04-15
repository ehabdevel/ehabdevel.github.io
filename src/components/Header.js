import React, { Component } from 'react';
import Typist from 'react-typist';
import Link from '../ContextContainer/Link';

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
	          <a href="/"><h1>Ehab Ashour</h1></a>
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
	              <a className="social" href="https://github.com/ehabdevel" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
	            </li>
	            <li className="li-social-links">
	              <a className="social" href="https://www.linkedin.com/in/ehabdevel/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
	            </li>
	            <li className="li-social-links">
	              <a className="social" href="https://twitter.com/ehabdevel" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
	            </li>
	          </ul>
	        </div>
	        <div id="down-arrow">
		        <Link className="test9"><i className="fa fa-chevron-down" aria-hidden="true"></i></Link>
	        </div>
	      </div>
      </div>
    );
  }
}

export default Header;
