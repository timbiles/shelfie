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
    axios.get('/api/inventory').then(res => {
      console.log(res);
      this.setState({ inventory: res.data });
    });
  };



  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form get={this.makeRequest} />
      </div>
    );
  }
}

export default App;
