import React, { Component } from 'react';
import axios from 'axios';
import './Dashboard.css';

import Product from '../Product/Product';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    this.setState({ inventory: this.props.inventory });
  }

  handleDelete = id => {
    axios.delete(`/api/product/${id}`).then(() => {
      this.props.get();
    });
  };

  render() {
    let { inventory } = this.props;
    console.log(inventory);

    let inventoryMap = inventory.map((e, i) => {
      return (
        <div key={i} className="input-box">
          <div>
            <img 
            src={e.img}
            height='200px'
            width='300px'
            />
          </div>
          <div>
            <div>{e.name}</div>
            <div>${e.price}</div>
            <button onClick={id => this.handleDelete(e.id)}>Delete</button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Product />
        {inventoryMap}
      </div>
    );
  }
}
