import React from 'react'
import { Consumer } from '../ContextContainer/Router'
import Route from '../ContextContainer/Route'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Edu from './Edu'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

export default function Content(props) {
    return <div>
        <Consumer>
            {({state, action}) => {
                return <React.Fragment>
                    <Route path="/"><Home /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/experience"><Experience /></Route>
                    <Route path="/education"><Edu /></Route>
                    <Route path="/projects"><Projects /></Route>
                    <Route path="/skills"><Skills /></Route>
                    <Route path="/contact"><Contact /></Route>
                </React.Fragment>
            }}
        </Consumer>
    </div>;
}
