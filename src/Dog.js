import React from 'react';
import { Modal, Image } from 'react-bootstrap';

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
                <Modal.Body>
                    <Image src={this.props.dogFeatured.image} alt={this.props.dogFeatured.name} width={350}/>
                    {/* Image: {this.props.dogFeatured.image} */}
                    
                    <br/>
                    Good With Kids: {this.props.dogFeatured.goodWithKids}
                    <br/>
                    Good With Dogs: {this.props.dogFeatured.goodWithDogs}
                    <br/>
                    Amount of Shedding: {this.props.dogFeatured.shedAmount}
                    <br/>
                    Grooming Effort Required: {this.props.dogFeatured.groomingNeeded}
                    <br/>
                    Drool Factor: {this.props.dogFeatured.drool}
                    <br/>
                    Coat Length: {this.props.dogFeatured.furLength}
                    <br/>
                    Good With Strangers: {this.props.dogFeatured.goodWithOtherPeople}
                    <br/>
                    Playfulness: {this.props.dogFeatured.playful}
                    <br/>
                    Typical barking amount = {this.props.dogFeatured.barkingAmount}
                    <br/>
                    Trainability = {this.props.dogFeatured.trainable}
                    <br/>
                    Energy Level = {this.props.dogFeatured.energyAmount} 
                    <br/>
                    Protectiveness = {this.props.dogFeatured.howProtective} 
                    <br/>
                    Life Expectancy = {this.props.dogFeatured.minLifeExpectancy}
                    -{this.props.dogFeatured.maxLifeExpectancy} years
                    <br/>
                    Male Height = {this.props.dogFeatured.minHeightMale} - {this.props.dogFeatured.maxHeightMale}
                    <br/>
                    Male Weight = {this.props.dogFeatured.minWeightMale} - {this.props.dogFeatured.maxWeightMale}
                    <br/>
                    Female Height = {this.props.dogFeatured.minHeightFemale} - {this.props.dogFeatured.maxHeightFemale}
                    <br/>
                    Female Weight = {this.props.dogFeatured.minWeightFemale} - {this.props.dogFeatured.maxWeightFemale}
                </Modal.Body>
            </Modal>
            {/* <Card show={this.props.dogAppears}>dadadasd 
            </Card> */}
        </>
        )
    }
} 
export default Dog;