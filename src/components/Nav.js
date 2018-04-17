import React, { Component } from 'react'
import Scrollchor from 'react-scrollchor'
import { Link } from 'react-router-dom'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/education', label: 'Education' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

class Nav extends Component {

  render() {
  	const isHome = window.location.pathname === '/';
  	if (isHome) {
  		return (<div className="navbar">
			        <Scrollchor to="">Home</Scrollchor>
			        <Scrollchor to="about">About</Scrollchor>
			        <Scrollchor to="experience">Experience</Scrollchor>
			        <Scrollchor to="education">Education</Scrollchor>
			        <Scrollchor to="projects">Projects</Scrollchor>
			        <Scrollchor to="skills">Skills</Scrollchor>
			        <Scrollchor to="contact">Contact</Scrollchor>
		        </div>
  			);
  	}
    return (
      <div className="navbar">
	        {links.map(
	          ({ key, href, label }) => (
	            <Link to={href} key={key}>
	              {label}
	            </Link>
	          )
	        )}
      </div>
    );
  }
}

export default Nav