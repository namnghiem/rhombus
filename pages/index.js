import React from "react";
import { render } from "react-dom";
import styles from '../styles/Home.module.css'
import home from '../styles/landing.module.css'
import { Navbar, NavDropdown, Form, FormControl, Nav, Row, Col, Badge, Button, Container } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
    return(
        <div className={styles.hero_gallery_parent}>
        {/* <div className={styles.hero_gallery}>
            <Gallery photos={photos}  targetRowHeight={350} margin={0}/>
        </div> */}

          
        <Container>
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
              <h1 className={home.hero_title}> Calling all <b><u>artists, coders and makers.</u></b> </h1>
              <h3 className={home.hero_subtitle}> You are more than your resume.</h3>
              <h5 className={home.hero_subtitle} >Whether you make movies, write code or design buildings, get discovered with a smart online portfolio.</h5>
            </Col>
            <Col lg="6">
              <img className={home.hero_picture} src="../undraw_innovative_b409.svg"></img>
            
            </Col>

          </Row>
        
        </Container>
        
      
    </div>
    )
}