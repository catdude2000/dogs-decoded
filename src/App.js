import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
    render() {
      return (
        <>
          <form>
            <label>
              Have a breed in mind?
              <input type='text' />
            </label>
          </form>
        </>
      )
    
  }
}

export default App;
