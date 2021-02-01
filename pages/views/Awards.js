import React from 'react';
import award_styles from '../../styles/awards.module.css'
import section_styles from '../../styles/Home.module.css'

import { Row, Col, Container } from 'react-bootstrap';
import {Award} from './Award.js';


export class Awards extends React.Component {
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
                {this.props.data.data.map((award)=>
                    <Award data = {award}></Award>
                    
                )}
                
            </Row>
        </Container>
      </Row>

    );
  }
}

