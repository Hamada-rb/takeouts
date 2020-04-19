import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';

import Header from './components/Header.jsx';
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
            {this.state.places.map((place) => {
              return <Place place={place}/>;
            })}
        </Container>
      </div>
    );
  };
}

export default App;
