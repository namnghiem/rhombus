import React from 'react';
import {ImageProject} from './ImageProject.js'
import {EmbedProject} from './EmbedProject.js'
const views = {
    image:ImageProject,
    embed:EmbedProject
  };

export class Project extends React.Component {
  // Correct! JSX type can be a capitalized variable.
  render(){
    const SpecificSection = views[this.props.data.type];
    
    return <SpecificSection data={this.props.data} />
  }
}

