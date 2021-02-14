import React from "react";
import { render } from "react-dom";
import styles from '../styles/Home.module.css'
import { Navbar, NavDropdown, Form, FormControl, Nav, Row, Col, Badge, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
    return(
        <div className={styles.hero_gallery_parent}>
        {/* <div className={styles.hero_gallery}>
            <Gallery photos={photos}  targetRowHeight={350} margin={0}/>
        </div> */}

        <div  className={styles.nav}>
        
        </div>      
        <Container>
        <Navbar expand="lg" variant="light">
          <Navbar.Brand href="#home">Nam Nghiem on <b>Portflight</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto">

              <Nav.Link href="#home">Projects</Nav.Link>
              <Nav.Link href="#features">Awards</Nav.Link>
              <Nav.Link href="#pricing">Experience</Nav.Link>
            </Nav>
            
            <Nav.Link href="#home">Your Portfolio</Nav.Link>
            <Button variant="dark">Log In</Button>

          </Navbar.Collapse>
        </Navbar>
         
        <Row className={styles.hero_section}>
          <Col lg="8">
            <h1 className={styles.hero_title}> Title </h1>
            <h2 className={styles.hero_subtitle}> props.data.subtitle </h2>
            <ul className={styles.list_social}>
                  <li className={styles.item_social} key="message">
                    <Button variant="dark" className={styles.hero_button}>Message Now</Button>{' '}
                  </li>
                  
                  
                </ul>
          </Col>
          <Col lg="4">
            <img src="../picture.jpg" className={styles.hero_profilepic}></img>
          
          </Col>

        </Row>
        
        </Container>
        
      
    </div>
    )
}