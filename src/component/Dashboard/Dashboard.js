import React, { Component } from 'react';
import axios from 'axios';
import './Dashboard.css';

import Product from '../Product/Product';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
      name: '',
      price: ''
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
  
  // notice how i am sending the body
  handleEdit = (id, e) => {
    const {name, price} = this.state
    axios.put(`/api/product-edit/${id}`, {name: name || e.name, price: price || e.price}).then(res => {
      this.props.get();
      this.setState({name: '', price: ''})
    })
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const { inventory } = this.props;
    const { edit } = this.state

    // mapping over inventory from App.js
    // product is own styled component, this allows us to edit 1 item
    // passing props as 'item'
    let inventoryMap = inventory.map(e => {
      return (
        <Product key={e.id} item={e} handleDelete={() => this.handleDelete(e.id)}
        handleEdit={()=> this.handleEdit(e.id, e )}
        handleChange={val => this.handleChange(val)}
        />
      );
    });
    return (
      <div>
        {inventoryMap}
      </div>
    );
  }
}
