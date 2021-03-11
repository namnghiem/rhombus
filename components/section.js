import React from 'react';
import Hero from './hero.js';
import {Projects} from './projects.js';
import {Awards} from './Awards.js';
import {Hobbies} from './Hobbies.js';
import {Experience} from './Experience.js';
import {Empty} from './Empty.js';
import {Gallery} from './Gallery.js';
import {SingleVideo} from './SingleVideo.js';



const Components = {
  hero: Hero,
  projects:Projects,
  awards:Awards,
  experience:Experience,
  hobbies:Hobbies,
  gallery:Gallery,
  video:SingleVideo
};

function Section(props) {
  // Correct! JSX type can be a capitalized variable.
  var SpecificSection = Empty;
  if(props.data.type in Components){
    SpecificSection = Components[props.data.type];
  }else{
    SpecificSection = Empty;
  }
    
  return <SpecificSection data={props.data} />
  
}
 export default Section;