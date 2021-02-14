import React from 'react';
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faCaretSquareDown} from '@fortawesome/free-solid-svg-icons'
import { Navbar, NavDropdown, Form, FormControl, Nav, Row, Col, Badge, Button, Container } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import 'bootstrap/dist/css/bootstrap.min.css';

const icons = {
  "facebook": faFacebook,
  "url":faGlobe
}
function Hero(props){
  const BasicRows = () => <Gallery photos={photos} />

  return (
    <Row>
      <div className={styles.hero_gallery_parent}>
        {/* <div className={styles.hero_gallery}>
            <Gallery photos={photos}  targetRowHeight={350} margin={0}/>
        </div> */}

        <div  className={styles.nav}>
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
         
        </div>      
        <Container fluid>
        <Row className={styles.hero_section}>
          <Col lg="8">
            <h1 className={styles.hero_title}> {props.data.title} </h1>
            <h2 className={styles.hero_subtitle}> {props.data.subtitle} </h2>
            <ul className={styles.list_social}>
                  <li className={styles.item_social} key="message">
                    <Button variant="dark" className={styles.hero_button}>Message Now</Button>{' '}
                  </li>
                  {props.data.data.map((links) =>
                  
                    <li className={styles.item_social} key={links.data}>
                      <a href={links.data}>
                        <FontAwesomeIcon 
                          icon={icons[links.type]} 
                          className={styles.social_icon}
                        />
                      </a>
                    </li>
                  )} 
                  
                  
                </ul>
          </Col>
          <Col lg="4">
            <img src="../picture.jpg" className={styles.hero_profilepic}></img>
          
          </Col>

        </Row>
        
        </Container>
        
      
    </div>
        {/* <Navbar expand="lg" variant="light" className={styles.portfolio_nav}>
       
            <Nav >

              <Nav.Link href="#home"><h3 className={styles.portfolio_nav_item}>Projects</h3></Nav.Link>
              <Nav.Link href="#features"><h3 className={styles.portfolio_nav_item}>Awards</h3></Nav.Link>
              <Nav.Link href="#pricing"><h3 className={styles.portfolio_nav_item}>Experience</h3></Nav.Link>
              <Nav.Link href="#sd"><h3 className={styles.portfolio_nav_item}>Hobbies</h3></Nav.Link>

            </Nav>
             
            </Navbar> */}
    </Row>
    
  );
}

export default Hero;