import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDogsPulled: []

    };

  }

  submitDogHandler = async (event) => {
    event.preventDefault();
    try {
      let url = `${process.env.REACT_APP_SERVER}/weather`
      let cityInfo = await axios.get(url);
      this.setState({
        cityData: cityInfo.data[0],
        error: false,
        cityMap: `https://maps.locationiq.com/v3/staticmap/search?key=${API_KEY}&center=${cityInfo.data[0].lat},${cityInfo.data[0].lon}&zoom=10`
      }
      );
        this.getWeather();
        this.getMovies();
        // (cityInfo.data[0].lat, cityInfo.data[0].lon, this.state.city);
        console.log(this.state.weatherShown, 'weathershown')
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An error ocurred: ${error.response.status}`
      });
    }
  };


    render() {
      return (
        <>
          <form id='form' onSubmit={this.submitDogHandler}>
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
