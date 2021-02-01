import React from 'react';
import styles from '../../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faGlobe} from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container } from 'react-bootstrap';
import {Project} from './project.js';


const icons = {
  "facebook": faFacebook,
  "url":faGlobe
}

export class Projects extends React.Component {
  render(){
    return (
      <Row  className={styles.section}>
        <Container fluid>
            <Row >
                <Col>
                <h1 className={styles.section_title}> {this.props.data.title} </h1>
                <p className={styles.section_subtitle}> {this.props.data.subtitle} </p>

                </Col>
            </Row>
            <Row>
                {this.props.data.data.map((project)=>
                    <Project data = {project}></Project>
                    
                )}
                
            </Row>  
        </Container>
      </Row>

    );
  }
}

