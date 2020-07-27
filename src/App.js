import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import WeatherDaysConatainer from './components/WeatherDays/WeatherDaysConatainer';
import SearchWeatherContainer from './components/SearchWeather/SearchWeatherContainer';

function App() {
  return (

    <div className="App">
      <Container>
        <SearchWeatherContainer />
        <WeatherDaysConatainer />
      </Container>
    </div>
  );
}

export default App;
