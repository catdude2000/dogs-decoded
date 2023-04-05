import React from 'react';
import { Modal } from 'react-bootstrap';

class Dog extends React.Component {

    render () {
        return (
        <>
            <Modal show={this.props.dogAppears} onHide={this.props.handleClose}>
                <Modal.Header closeButton onClick={this.props.handleClose}>
                    <Modal.Title>Name-{this.props.dogFeatured.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Typical barking amount from 1 to 5={this.props.dogFeatured.barkingAmount}
                    <br/>
                trainability={this.props.dogFeatured.trainable}
                    <br/>
                energy level={this.props.dogFeatured.energyAmount} <br/>
                protectiveness={this.props.dogFeatured.howProtective} <br/>
                Life expectancy={this.props.dogFeatured.minLifeExpectancy}
                 to {this.props.dogFeatured.maxLifeExpectancy} years
                </Modal.Body>
            </Modal>
            {/* <Card show={this.props.dogAppears}>dadadasd 
            </Card> */}
</>
        )
    }
} 
export default Dog;