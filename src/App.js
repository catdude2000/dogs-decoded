import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDogsPulled: []

    };
  }

  getDogs = async (event) => {
    event.preventDefault();
    try {
      let dogResults = await axios.get(`${process.env.APP_SERVER}`)
    }
  }
  


    render() {
      return (
        <>
          <form id='form' onSubmit={this.submitDogHandler}>
            <label>
              Have a breed in mind?
              <input type='text' />
            </label>
            <button type='submit'>Search</button>
          </form>
        </>
      )
    
  }
}

export default App;
