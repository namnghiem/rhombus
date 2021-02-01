import Head from 'next/head'
import Section from './section.js'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Gallery from 'react-photo-gallery';
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import 'bootstrap/dist/css/bootstrap.min.css';

import { photos } from "./photos";
import { api } from './api.js'

var rendersource = api;

export default function Home() {
  console.log(rendersource.sections[0].type)

  return (
    <div className={styles.body}>
      
      <Head>
        <title>Rhombus</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
         

      <Container  className={styles.relative}>
      
        {
        rendersource.sections.map((section)=>
        
          
          <Section data={section}/>
        )}
      </Container>
         


      
    </div>
  )
}
