import React from 'react';
import hobby_styles from '../styles/hobby.module.css'
import section_styles from '../styles/Home.module.css'
import {photos} from './photos.js';
import { Row, Col, Container } from 'react-bootstrap';
import {Hobby} from './Hobby.js';
import GalleryView from 'react-photo-gallery';


export class Empty extends React.Component {
  render(){
    return (
      <Row  className={section_styles.section}>
        <Container fluid>
            <Row>
                <Col>
                <h1 className={section_styles.section_title}>  Portfolio Section </h1>
                <p> We aren't able to get this section of the portfolio at the moment. </p>

                </Col>
            </Row>
        </Container>
      </Row>

    );
  }
}

