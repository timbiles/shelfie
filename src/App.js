import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    this.makeRequest();
  }

  makeRequest = () => {
    axios.get('/api/product').then(res => {
      this.setState({ inventory: res.data });
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-body">
          <Dashboard get={this.makeRequest} inventory={this.state.inventory} />
          <div className="form">
            <Form get={this.makeRequest} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
