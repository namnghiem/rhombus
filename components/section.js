import React from 'react';
import Hero from './hero.js';
import {Projects} from './projects.js';
import {Awards} from './Awards.js';
import {Hobbies} from './Hobbies.js';
import {Experience} from './Experience.js';



const Components = {
  hero: Hero,
  projects:Projects,
  awards:Awards,
  experience:Experience,
  hobbies:Hobbies
};

function Section(props) {
  // Correct! JSX type can be a capitalized variable.
  
  const SpecificSection = Components[props.data.type];
    
  return <SpecificSection data={props.data} />
  
}
 export default Section;