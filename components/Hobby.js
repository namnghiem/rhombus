import React from 'react';
import styles from '../styles/hobby.module.css'
import {Modal, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward} from '@fortawesome/free-solid-svg-icons'



export class Hobby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show:false, setShow:false};
        
    }
    render(){
        const handleClose = () => this.setState({ show:false});
        const handleShow = () => this.setState({ show:true});

        return (
            <>
                <Col  xs="auto" md="auto" lg="auto"  onClick={handleShow}>
                    <div className={styles.hobbies_item}>
                        <FontAwesomeIcon className={styles.hobby_icon} size="2x" icon={faAward}/>    
                        <span className={styles.hobby_title}>{this.props.data.title}</span>
{/*                         <p className={styles.hobby_subtitle}>{this.props.data.subtitle}</p>
 */}                </div>
                     
                </Col>
                <Modal show={this.state.show} onHide={handleClose} centered size = "md" >
                    <Modal.Header closeButton className={styles.hobby_modal}>
                        <Modal.Title>                        
                            <div>
                                <FontAwesomeIcon className={styles.hobby_icon} icon={faAward}/>    
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