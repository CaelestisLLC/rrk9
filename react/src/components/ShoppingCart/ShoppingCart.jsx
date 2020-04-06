import React from 'react';
import item_example from '../../img/example-product2.png';

import './ShoppingCart.css';

function ShoppingCart() {
  let cartItem1 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", quantity: 3, price: 69.99, image: item_example, alt: "Zignature" };
  let cartItem2 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", quantity: 2, price: 69.99, image: item_example, alt: "Zignature" };
  let cartItem3 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", quantity: 1, price: 69.99, image: item_example, alt: "Zignature" };
  let cartItemArray = [ cartItem1, cartItem2, cartItem3 ]
  let cart = { total: cartItemArray.reduce((sum, cartItem) => { return sum + (cartItem.quantity * cartItem.price); }, 0) };

  return (
    <div className="ShoppingCart">
      <div className="Cart-container">
        {cartItemArray.map(item => 
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
    </div>
  );
}

export default ShoppingCart;
