import React from 'react';
import style from '../../styles/experience.module.css'
import section_styles from '../../styles/Home.module.css'

import { Row, Col, Container } from 'react-bootstrap';
import {Award} from './Award.js';


export class Experience extends React.Component {
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
            <Row className="justify-content-md-center">
                <Col m lg={6} auto>
                    <ul className={style.timeline}>
                        {this.props.data.data.map((experience)=>
                            <li className={style.timeline_item}>
                                <div className={style.timeline_arrow}></div>
                                <div className={style.timeline_experience_title}>
                                    <h5>{experience.title}</h5>
                                    <span>Location</span>
                                    <p>March 2022 - January 2026</p>
                                </div>
                                
                                <p className={style.timeline_experience_subtitle}>{experience.subtitle}</p>
                            </li>
                            
                        )}
                    </ul>
                    
                </Col>
                
                
            </Row>
        </Container>
      </Row>

    );
  }
}
