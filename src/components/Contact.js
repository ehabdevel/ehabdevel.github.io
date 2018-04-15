import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="row blue">
	        <div className="side-content"></div>
	        <div className="main-content">
	          <div className="content-header">
	            <a href="contact" name="contact">
	            	<h2 className="white-text">Contact Me</h2>
	            </a>
	          </div>
	          <div className="contact content-body">
	            <form method="POST" action="https://formspree.io/ehabdevel@gmail.com">
	                <input type="hidden" name="_subject" value="Contact request from personal website" />
	                <input type="email" name="_replyto" placeholder="Your email" required />
	                <textarea name="message" placeholder="Your message" required></textarea>
	                <button type="submit">Send</button>
	            </form>
	          </div>
	        </div>
	        <div className="side-content"></div>
	      </div>
	      
      </div>
    );
  }
}

export default Contact;
