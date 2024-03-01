import React from 'react'
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <Container>
    <Header/>
    <CardContainer/>

    </Container>
  )
}

export default App
