import React, {useState} from 'react';
import styles from '../styles/Home.module.css'
import { Col, Modal, Button } from 'react-bootstrap';


export class EmbedProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show:false, setShow:false};
        ;
    }
    render(){

  
        const handleClose = () => this.setState({ show:false});
        const handleShow = () => this.setState({ show:true});


        var url = new URL(this.props.data.data);
        switch(url.hostname){
            case "www.youtube.com":
            case "youtube.com":
                return (
                    
                    <>
                        <Col  m lg={4} className={styles.projects_item} onClick={handleShow} >
                            <img className={styles.project_img}  src={"https://img.youtube.com/vi/" + youtube_parser(this.props.data.data)+ "/maxresdefault.jpg"}></img>
                            <div className={styles.overlay}>
                            <h3>{this.props.data.title}</h3>
                                <p className={styles.project_subtitle}>{this.props.data.subtitle}</p>
                            </div>
                        </Col>

                        <Modal show={this.state.show} onHide={handleClose} centered size="md">
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.data.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe width="100%" height="400px" src={"https://youtube.com/embed/" + youtube_parser(this.props.data.data)} frameborder="0" allowfullscreen></iframe>
                            {this.props.data.subtitle}


                        </Modal.Body>
                        </Modal>
                    </>
                );
        }

        
    }

}

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

