import React, { Component } from 'react';
// import { Link, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import Product from './component/Product/Product';

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
      console.log(res);
      this.setState({ inventory: res.data });
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-body">
          <Dashboard get={this.makeRequest} inventory={this.state.inventory} />
          <Form classname='form-box' get={this.makeRequest} />
        </div>
      </div>
    );
  }
}

export default App;
