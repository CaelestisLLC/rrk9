import React from 'react';
import PayPalButton from './PayPalButton.jsx';

import './Cart.css';

import Fakes from '../../fakes.js';

// https://medium.com/@ayabellazreg/make-a-simple-shopping-cart-app-using-react-redux-1-3-fefde93e80c7
class ShoppingCart extends React.Component {

  render () {
    let cart = { total: Fakes.cartItemArray.reduce((sum, cartItem) => { return sum + (cartItem.quantity * cartItem.price); }, 0) };

    return (
      <div className="ShoppingCart">
        <table className="Cart-container">
            <tr>
              <th colSpan="2">Your Shopping Cart</th>
              <th>Cost</th>
              <th>Qty</th>
              <th>Subtotal</th>
            </tr>
          {Fakes.cartItemArray.map(item => 
            <tr className={"Cart-item-" + item.key} key={item.key}>
              <td className={"Cart-item-image-container-" + item.key}>
                <img src={item.image} className={"Cart-item-image-" + item.key} alt={item.alt} />
              </td>
              <td className={"Cart-item-description-" + item.key}>
                {item.name}
              </td>
              <td className={"Cart-item-price-" + item.price}>
                {item.price}
              </td>
              <td className={"Cart-item-quantity-" + item.key}>
                {item.quantity}
              </td>
              <td className={"Cart-item-total-" + item.key}>
                {"$" + (item.quantity * item.price).toFixed(2)}
              </td>
            </tr>      
          )}
        </table>
        <div className="Cart-total">
          <span>
            {"Total: $" + cart.total.toFixed(2)}
          </span>
        </div>
        <PayPalButton />
      </div>
    );
  }
}

export default ShoppingCart;
