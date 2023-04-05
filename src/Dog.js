import React from 'react';
import { Modal } from 'react-bootstrap';

class Dog extends React.Component {

    render () {
        return (
        <>
            Scale is 1 to 5
            <Modal show={this.props.dogAppears} onHide={this.props.handleClose}>
                {/* <Modal.Header closeButton onClick={this.props.handleClose}> */}
                    <Modal.Title>Name = {this.props.dogFeatured.name}
                    </Modal.Title>
                {/* </Modal.Header> */}
                <Modal.Body>Typical barking amount = {this.props.dogFeatured.barkingAmount}
                    <br/>
                Trainability = {this.props.dogFeatured.trainable}
                    <br/>
                Energy Level = {this.props.dogFeatured.energyAmount} 
                    <br/>
                Protectiveness = {this.props.dogFeatured.howProtective} 
                    <br/>
                Life Expectancy = {this.props.dogFeatured.minLifeExpectancy}
                -{this.props.dogFeatured.maxLifeExpectancy} years
                </Modal.Body>
            </Modal>
            {/* <Card show={this.props.dogAppears}>dadadasd 
            </Card> */}
        </>
        )
    }
} 
export default Dog;