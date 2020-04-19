import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Row, Col } from "react-bootstrap";

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Place from './layouts/Place.jsx';

import places from './data/places.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: places
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
          <Container className="mt-5">
            <Row>
                {this.state.places.map((place) => {
                  return (
                    <Col xs={12} sm={4} md={4} lg={4} className="mt-3">
                      <Place place={place}/>
                    </Col>
                  );
                })}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  };
}

export default App;
