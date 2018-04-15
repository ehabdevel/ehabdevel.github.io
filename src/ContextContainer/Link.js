import React from 'react';
import { Consumer } from './Router';

export default function Link({path, ...props}) {
    return (<Consumer>
        {({action})=> <a href="" {...props} onClick={()=>action.go(path)} alt="link">{ props.children }</a>}
    </Consumer>);
}