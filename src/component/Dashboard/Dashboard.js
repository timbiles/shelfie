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

  handleEdit = (id, e) => {
    const {name, price, edit} = this.state
    axios.put(`/api/product-edit/${id}`, {name: name || e.name, price: price || e.price}).then(res => {
      this.props.get();
    })
  }

  handleChange = val => {
    this.setState({name: val})
  }

  handleChange2 = val => {
    this.setState({price: val})
  }

  render() {
    const { inventory } = this.props;
    const { edit } = this.state

    let inventoryMap = inventory.map(e => {
      return (
        <Product key={e.id} item={e} handleDelete={() => this.handleDelete(e.id)}
        handleEdit={()=> this.handleEdit(e.id, e )}
        handleChange={(val) => this.handleChange(val)}
        handleChange2={(val) => this.handleChange2(val)}
        toggleEdit={()=> this.setState({edit: !edit})}
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
