import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'


class Main extends Component {
  render() {
    return (
			  <main>
			    <Switch component={ScrollToTop}>
			      <Route exact path='/' component={Home}/>
			      <Route path='/about' component={About}/>
			      <Route path='/experience' component={Experience}/>
			      <Route path='/education' component={Education}/>
			      <Route path='/projects' component={Projects}/>
			      <Route path='/skills' component={Skills}/>
			      <Route path='/Contact' component={Contact}/>
			    </Switch>
			  </main>
			);
		}
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default Main