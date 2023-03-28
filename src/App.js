import React from 'react';
import './App.css';
import axios from 'axios';
// require('dotenv').config();

// let APP_SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDogsPulled: [],
      dogShown: [],
      showDog: false
    };
  }

handleInput = (event) => {
  this.setState({
    dogEntered: event.target.value
  });
}

  getDogs = async (event) => {
    event.preventDefault();
    try {
      // console.log(APP_SERVER, 'APPSERVER')
      let dogResults = await axios.get(`${process.env.APP_SERVER}/dogInfo`);
      console.log(dogResults, 'dogResults');
      this.setState({
        dogShown: dogResults.data,
        showDog: true
      })
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
              Have a breed in mind?
              <input type='text' onInput={this.handleInput}/>
            </label>
            <button type='submit'>Search</button>
          </form>
        </>
      )
    
  }
}

export default App;
