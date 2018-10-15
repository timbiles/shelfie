import React, { Component } from 'react';
import axios from 'axios';
import './form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgInput: '',
      nameInput: '',
      priceInput: ''
    };
  }

  handlePictureChange = val => {
    this.setState({ imgInput: val });
  };

  handleNameChange = val => {
    this.setState({ nameInput: val });
  };

  handlePriceChange = val => {
    this.setState({ priceInput: val });
  };

  handleCancel = () => {
    this.setState({
      imgInput: '',
      nameInput: '',
      priceInput: ''
    });
  };

  handleSubmit = id => {
    let { imgInput, nameInput, priceInput } = this.state;
    axios
      .post('/api/product', {
        name: nameInput,
        price: priceInput,
        img: imgInput
      })
      .then(res => {
        this.props.get();
        this.setState({imgInput: ''})
      });
  };

  handleKeyDown = e => {
    if(e.keyCode === 13){
      let { imgInput, nameInput, priceInput } = this.state;
    axios
      .post('/api/product', {
        name: nameInput,
        price: priceInput,
        img: imgInput
      })
      .then(res => {
        this.props.get();
        this.setState({imgInput: ''})        
      });
    }
  };

  render() {
    // console.log(this.state);
    const { imgInput, nameInput, priceInput } = this.state;
    return (
      <div className="form">
        <div>
          <img
            src={imgInput || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfqyZEvnwCeipVPvwn1_B1qvz1XlbwDQUiK7t5YCHoVkX0SO3s"}
            alt="no img"
            width="300px"
            height="200px"
          />
          <h3 className="input-text">Image URL:</h3>
          <input
            value={imgInput}
            size={60}
            placeholder="Image URL"
            onChange={e => this.handlePictureChange(e.target.value)}
          />
          <h3 className="input-text">Product Name:</h3>
          <input
            value={nameInput}
            size={60}
            placeholder="Name"
            onChange={e => this.handleNameChange(e.target.value)}
          />
          <h3 className="input-text">Price:</h3>
          <input
            value={priceInput}
            size={60}
            placeholder="0"
            onChange={e => this.handlePriceChange(e.target.value)}
            onKeyDown={this.handleKeyDown}
          />
          <div className="btn-box">
            <button onClick={() => this.handleCancel()}>Cancel</button>
            <button onClick={id => this.handleSubmit(id)}>
              Add to Inventory
            </button>
          </div>
        </div>
      </div>
    );
  }
}
