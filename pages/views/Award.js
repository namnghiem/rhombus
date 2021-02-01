import React from 'react';
import styles from '../../styles/awards.module.css'
import {Modal, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward} from '@fortawesome/free-solid-svg-icons'



export class Award extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show:false, setShow:false};
        
    }
    render(){
        const handleClose = () => this.setState({ show:false});
        const handleShow = () => this.setState({ show:true});

        return (
            <>
                <Col  m lg={3}  onClick={handleShow}>
                    <div className={styles.awards_item}>
                        <FontAwesomeIcon className={styles.award_icon} icon={faAward}/>    
                        <h3 className={styles.award_title}>{this.props.data.title}</h3>
                        <p className={styles.award_subtitle}>{this.props.data.subtitle}</p>
                    </div>
                     
                </Col>
                <Modal show={this.state.show} onHide={handleClose} centered size = "md" >
                    <Modal.Header closeButton className={styles.award_modal}>
                        <Modal.Title>                        
                            <div>
                                <FontAwesomeIcon className={styles.award_icon} icon={faAward}/>    
                                <h2>{this.props.data.title}</h2>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className={styles.project_img}  src={this.props.data.data}></img>
                        {this.props.data.subtitle}

                    </Modal.Body>
                </Modal>
            </>
        );
    }

}