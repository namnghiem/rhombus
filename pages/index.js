import React from "react";
import { render } from "react-dom";
import styles from '../styles/Home.module.css'
import home from '../styles/landing.module.css'
import {faGithub, faYoutube, faVimeo} from '@fortawesome/free-brands-svg-icons';
import {faCamera,faStar, faCalendar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Navbar, NavDropdown, Form, FormControl, Nav, Row, Col, Badge, Button, Container } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
    return(
        <div className={home.container}>
        {/* <div className={styles.hero_gallery}>
            <Gallery photos={photos}  targetRowHeight={350} margin={0}/>
        </div> */}

        <div className={home.gradient}></div>
        <Container >
          <Navbar expand="lg" variant="light" className={home.nav}>
            <Navbar.Brand href="#home" className={home.brand}><b><u>Portflight</u></b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="mr-auto">

                <Nav.Link href="#home">Get Started</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Professionals</Nav.Link>
              </Nav>
              
              <Nav.Link href="#home">Your Portfolio</Nav.Link>
              <Button variant="dark">Log In</Button>

            </Navbar.Collapse>
          </Navbar>    
          
          <Row className={home.hero_section}>
            <Col lg="6">
              <h1 className={home.hero_title}> Calling all <b><u>coders, makers and artists.</u></b> </h1>
              <h3 className={home.hero_subtitle}> You are more than your resume.</h3>
              <h5 className={home.hero_subtitle} >Show off the real you, whatever you do. Whether you build apps, make movies or design buildings, get discovered with a smart online portfolio.</h5>
            </Col>
            <Col lg="6" /* className={home.blurred_box} */>
             {/*  <img className={home.hero_picture} src="../undraw_innovative_b409.svg"></img>
            
          */}
              <div className={home.hero_demo}>
                <Container fluid>
                  <Row>
                    <Col lg="12">
                      <div className={home.demo_title}>
                        <h3>Hey, I'm Alex and I build apps! I also love photographing the wild and making music.</h3>
                      </div>      
                    </Col>
                    <Col lg="5">
                          <img className={home.demo_image} src="https://source.unsplash.com/2ShvY8Lf6l0/800x599"></img>

                    </Col>
                    <Col lg="7">
                          <img className={home.demo_image} src="https://source.unsplash.com/Dm-qxdynoEc/800x799"></img>

                    </Col><Col lg="7">
                          <img className={home.demo_image} src="https://source.unsplash.com/qDkso9nvCg0/600x799"></img>

                    </Col>
                    <Col lg="5">
                          <img className={home.demo_image} src="https://source.unsplash.com/iecJiKe_RNg/800x799"></img>

                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col lg="6" className={home.body_section}>
              <h1 className={home.hero_title}> Get discovered. </h1>
              <h3 className={home.hero_subtitle}> Fill your portfolio with rich images, videos and content.</h3>
            </Col>  
            <Col lg="8" >

                <div className={home.tile_git}> 
                  <FontAwesomeIcon className={home.tile_icon} icon={faGithub}/>
                  <h3>Github Contributions</h3>
                  <img className={home.tile_image} src="/git.png"></img>
                </div>
            </Col>
            <Col lg="4" >
                <div className={home.tile_git}>
                  <FontAwesomeIcon className={home.tile_icon} icon={faYoutube}/>
                  <FontAwesomeIcon className={home.tile_icon} icon={faVimeo}/>
                  <h3>Videos from Youtube and Vimeo</h3>
                </div>
              </Col>
            <Col lg="5" >
                <div className={home.hero_demo}>
                <FontAwesomeIcon className={home.tile_icon} icon={faCamera}/>

                <h3>Images and Photo Galleries</h3></div>
              </Col>
            <Col lg="4" >
              
                <div className={home.hero_demo}>
                <FontAwesomeIcon className={home.tile_icon} icon={faCalendar}/>

                <h3>Experience Timeline</h3></div>
              </Col>
            <Col lg="3" >
                <div className={home.hero_demo}>
                <FontAwesomeIcon className={home.tile_icon} icon={faStar}/>

                <h3>Awards</h3></div>
              </Col>


          </Row>
        </Container>
        <div className={home.gradient}></div>


      
    </div>
    )
}