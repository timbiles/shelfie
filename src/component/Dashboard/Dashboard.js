import React, { Component } from 'react';
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

  render() {
    let { inventory } = this.props;
    console.log(inventory);

    let inventoryMap = inventory.map((e, i) => {
      return (
        <div key={i} className="input-box">
          <div>
            <div>{e.img}</div>
          </div>
          <div>
            <div>{e.name}</div>
            <div>${e.price}</div>
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
