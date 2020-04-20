import React from 'react'

import './Link.css'

class ShoppingCartLink extends React.Component {
  
  render () {
    return (
      <div className="App-cart">
        <p onClick={this.props.toggleCartState}>Cart</p> 
      </div>
    );
  }
}

export default ShoppingCartLink;
