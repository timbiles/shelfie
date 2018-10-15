import React, { Component } from 'react';

class Product extends Component {
  state = {
    edit: false
  }

  render() {
    
    const { edit } = this.state
    const { item } = this.props;

    return (
      <div className="input-box">
        <div>
          <img src={item && item.img} height="200px" width="300px" />
        </div>
        {!edit ? (
          <div>
            <h4>{item && item.name}</h4>
            <p>${item && item.price}</p>
            <button onClick={() => this.props.handleDelete(item && item.id)}>
              Delete
            </button>
            <button onClick={() => this.setState({edit: !edit})}>Edit</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              name="name"
              defaultValue={item.name}
              onChange={e => this.props.handleChange(e.target.value)}
            />
            <input
              type="text"
              name="price"
              defaultValue={item.price}
              onChange={e => this.props.handleChange2(e.target.value)}
            />
            <button onClick={() => this.props.handleDelete(item && item.id)}>
              Delete
            </button>
            <button onClick={() => {
              this.props.handleEdit(item.id);
              this.setState({edit: !edit})
            }}>
              submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Product;
