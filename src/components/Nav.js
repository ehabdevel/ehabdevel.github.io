import React, { Component } from 'react';
import Link from '../ContextContainer/Link';

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
			        <Link path="/">Home</Link>
			        <Link path="/about">About</Link>
			        <Link path="/experience">Experience</Link>
			        <Link path="/education">Education</Link>
			        <Link path="/projects">Projects</Link>
			        <Link path="/skills">Skills</Link>
			        <Link path="/contact">Contact</Link>
		        </div>
  			);
  	}
    return (
      <div className="navbar">
	        {links.map(
	          ({ key, href, label }) => (
	            <Link path={href} key={key}>
	              {label}
	            </Link>
	          )
	        )}
      </div>
    );
  }
}

export default Nav;
