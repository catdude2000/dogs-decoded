import React from 'react';
import { Modal } from 'react-bootstrap';

class Dog extends React.Component {

    render () {
        return (
        <>
            <p>testforrender
                {/* {this.props.dogFeatured} */}
            </p>
            <Modal>
                {/* <Modal.Title>{this.props.dogFeatured.name}</Modal.Title> */}
            </Modal>
            {/* <Card show={this.props.dogAppears}>dadadasd 
            </Card> */}
</>
        )
    }
} 
export default Dog;