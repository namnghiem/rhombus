import React from 'react';
import styles from '../styles/Home.module.css'
import {Modal, Col } from 'react-bootstrap';


export class ImageProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show:false, setShow:false};
        ;
    }
    render(){
        const handleClose = () => this.setState({ show:false});
        const handleShow = () => this.setState({ show:true});

        return (
            <>
                <Col  m lg={4} className={styles.projects_item} onClick={handleShow}>

                    <img className={styles.project_img}  src={this.props.data.data}></img>
                    <div className={styles.overlay}>
                       <h3>{this.props.data.title}</h3>
                        <p className={styles.project_subtitle}>{this.props.data.subtitle}</p>
                    </div>
                    
                </Col>
                <Modal show={this.state.show} onHide={handleClose} centered size = "md">
                <Modal.Header closeButton className={styles.modal_header}> 
                    <Modal.Title>{this.props.data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className={styles.project_img}  src={this.props.data.data}></img>
                    <p className={styles.modal_subtitle}>{this.props.data.subtitle}</p>

                </Modal.Body>
                </Modal>
            </>
        );
    }

}