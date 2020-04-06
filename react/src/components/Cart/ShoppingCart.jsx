import React from 'react';

import './ShoppingCart.css';

import Fakes from '../../fakes.js';

// https://medium.com/@ayabellazreg/make-a-simple-shopping-cart-app-using-react-redux-1-3-fefde93e80c7
function ShoppingCart() {

  let cart = { total: Fakes.cartItemArray.reduce((sum, cartItem) => { return sum + (cartItem.quantity * cartItem.price); }, 0) };

  return (
    <div className="ShoppingCart">
      <div className="Cart-container">
        {Fakes.cartItemArray.map(item => 
          <div className={"Cart-item-" + item.key} key={item.key}>

            <div className={"Item-image-container-" + item.key}>
              <img src={item.image} className={"Item-image-" + item.key} alt={item.alt} />
            </div>

            <div className={"Item-description-container-" + item.key}>
              <span className={"Item-description-" + item.key}>
                {item.name}
              </span>
              <span className={"Item-price-" + item.price}>
                Cost: {item.price /* todo: dropdown */}
              </span>
              <span className={"Item-quantity-" + item.key}>
                Qty: {item.quantity /* todo: dropdown */}
              </span>
              <span className={"Item-total-" + item.key}>
                Subtotal: {"$" + (item.quantity * item.price).toFixed(2) /* todo: dropdown */}
              </span>
            </div>
          </div>      
        )}
      </div>
      <div className="Cart-total">
        <span>
          {"Total: $" + cart.total.toFixed(2)}
        </span>
      </div>
      <div className="Paypal">
        <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" alt="Check out with PayPal" />
      </div>
    </div>
  );
}

export default ShoppingCart;
