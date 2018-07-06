import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      imgInput: '',
      nameInput: '',
      priceInput: ''
    };
  }

  handlePictureChange = () => {};

  handleNameChange = val => {
    this.setState({ nameInput: val });
  };

  handlePriceChange = val => {
    this.setState({ priceInput: val });
  };

  render() {
    return (
      <div>
        <h3 className="input-text">Image URL:</h3>
        <input
          type="text"
          onChange={e => this.handlePictureChange(e.target.value)}
        />
        <h3 className="input-text">Product Name:</h3>        
        <input
          type="text"
          onChange={e => this.handleNameChange(e.target.value)}
        />
        <h3 className="input-text">Price:</h3>        
        <input
          type="text"
          placeholder="0"
          onChange={e => this.handlePriceChange(e.target.value)}
        />
        <div>
          <button>Cancel</button>
          <button>Add to Inventory</button>
        </div>
      </div>
    );
  }
}
