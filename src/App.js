import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import CardWeather from './components/CardWeather/CardWeather';

function App() {
  return (

    <div className="App">
      <Container>
        <CardWeather />
      </Container>
    </div>
  );
}

export default App;
