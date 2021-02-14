import React from 'react';
import Hero from '../views/hero.js';
import {Projects} from '../views/projects.js';
import {Awards} from '../views/Awards.js';
import {Hobbies} from '../views/Hobbies.js';
import {Experience} from '../views/Experience.js';



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