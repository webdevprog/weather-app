import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import WeatherDaysConatainer from './components/WeatherDays/WeatherDaysConatainer';

function App() {
  return (

    <div className="App">
      <Container>
        <WeatherDaysConatainer />
      </Container>
    </div>
  );
}

export default App;
