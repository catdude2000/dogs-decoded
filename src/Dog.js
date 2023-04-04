import React from 'react';
import { Modal } from 'react-bootstrap';

class Dog extends React.Component {

    render () {
        return (
        <>
            <p>testforrender
                {/* {this.props.dogFeatured} */}
            </p>
            <Modal show={this.props.dogAppears} >
                <Modal.Title>Name-{this.props.dogFeatured.name}</Modal.Title>
                <Modal.Body>Typical barking amount from 1 to 5={this.props.dogFeatured.barkingAmount}</Modal.Body>

            </Modal>
            {/* <Card show={this.props.dogAppears}>dadadasd 
            </Card> */}
</>
        )
    }
} 
export default Dog;