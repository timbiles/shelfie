import React, { Component } from 'react';

class Product extends Component {
  state = {
    edit: false
  };


  // Conditionally rendering. When edit is true, show input fields.

  render() {
    const { edit } = this.state;
    const { item } = this.props;

    return (
      <div className="input-box">
        <div>
          <img src={item.img} height="200px" width="300px" alt={item.name} />
        </div>
        {!edit ? (
          <div>
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <button onClick={this.props.handleDelete}>Delete</button>
            <button onClick={() => this.setState({ edit: !edit })}>Edit</button>
          </div>
        ) : (
          <div className="edit_form">
            <input
              type="text"
              name="name"
              defaultValue={item.name}
              onChange={this.props.handleChange}
            />
            <input
              type="text"
              name="price"
              defaultValue={item.price}
              onChange={this.props.handleChange}
            />
            <div>
              <button onClick={this.props.handleDelete}>Delete</button>
              <button
                onClick={() => {
                  this.props.handleEdit(item.id);
                  this.setState({ edit: !edit });
                }}
              >
                submit
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Product;
