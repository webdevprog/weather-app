import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
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
