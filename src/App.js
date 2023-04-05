import React from 'react';
import './App.css';
import axios from 'axios';
import Dog from './Dog';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogShown: '',
      showDog: false,
      errorMessage: '',
      error: false
    };
  }

  handleInput = (event) => {
    this.setState({
      dogEntered: event.target.value
    });
  }

  handleClose = () => {
    this.setState({
      showDog: false
    });
  }

  getDogs = async (event) => {
    event.preventDefault();
    try {
      let dogResults = await axios.get(`${process.env.REACT_APP_SERVER}/dogInfo?searchQuery=${this.state.dogEntered}`);
      console.log(dogResults.data[0], 'dogResults');
      this.setState({
        dogShown: dogResults.data[0],
        showDog: true
      })
      // console.log(this.state.dogShown, 'dogshown')
    }
    catch (error) {
      this.setState({
        error: true,
        errorMessage: `An error ocurred: ${error.response.status}`
      })
    }
  };
  
  render() {
    return (
      <>
        <form id='form' onSubmit={this.getDogs}>
          <label>
            Have a dog breed in mind?
            <input type='text' onInput={this.handleInput}/>
          </label>
          <button type='submit'>Search</button>
        </form> 
        <p>{this.state.errorMessage}</p>
        <Dog
          dogFeatured={this.state.dogShown}
          dogAppears={this.state.showDog}
          onHide={this.handleClose}
        />
      </>
    )
  }
}

export default App;
