import React from 'react'

import './CartLink.css'

class CartLink extends React.Component {
  
  render () {
    return (
      <div className="App-cart">
        <p onClick={this.props.toggleCartState}>Cart</p> 
      </div>
    );
  }
}

export default CartLink;
