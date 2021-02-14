import React from 'react';
import hobby_styles from '../styles/hobby.module.css'
import section_styles from '../styles/Home.module.css'

import { Row, Col, Container } from 'react-bootstrap';
import {Hobby} from './Hobby.js';


export class Hobbies extends React.Component {
  render(){
    return (
      <Row  className={section_styles.section}>
        <Container fluid>
            <Row>
                <Col>
                <h1 className={section_styles.section_title}> {this.props.data.title} </h1>
                <p> {this.props.data.subtitle} </p>

                </Col>
            </Row>
            <Row >
                {this.props.data.data.map((hobby)=>
                    <Hobby data = {hobby}></Hobby>
                    
                )}
                
            </Row>
        </Container>
      </Row>

    );
  }
}

