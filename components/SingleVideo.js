import React from 'react';
import award_styles from '../styles/awards.module.css'
import section_styles from '../styles/Home.module.css'

import { Row, Col, Container } from 'react-bootstrap';
import {Award} from './Award.js';


export class SingleVideo extends React.Component {
  render(){
    return (
      <Row  className={section_styles.section}>
        <Container fluid>
            <Row>
                <Col lg="6">
                  <h1 className={section_styles.section_title}> {this.props.data.title} </h1>
                  <p> {this.props.data.subtitle} </p>

                </Col>
                <Col lg="6">
                  <iframe width="100%" height="300px" allowFullscreen frameBorder="0" src={"https://youtube.com/embed/" + youtube_parser(this.props.data.data)} frameborder="0" allowfullscreen></iframe>

                </Col>
            </Row>
            
        </Container>
      </Row>

    );
  }
}

function youtube_parser(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}

