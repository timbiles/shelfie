import React, { Component } from 'react';

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
    console.log(inventory)

    let inventoryMap = inventory.map((e, i) => {
      return (
        <div key={i}>
          <div>name: {e.name}</div>
          <div>price: {e.price}</div>
          <div>img: {e.img}</div>
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
