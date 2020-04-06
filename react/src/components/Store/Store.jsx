import React from 'react';
//import item_example from '../../img/example-product2.png';
import item_example from '../../img/example-product1.png';
import './Store.css';

function ShoppingCart() {

  let storeItem1 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", image: item_example, alt: "Zignature" };
  let storeItem2 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", image: item_example, alt: "Zignature" };
  let storeItem3 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", image: item_example, alt: "Zignature" };
  let storeItemArray = [ storeItem1, storeItem2, storeItem3 ]
  let tab0 = { key: "Shop" }
  let tab1 = { key: "Deals" }
  let tab2 = { key: "Clearance" }
  let tabItemArray = [ tab0, tab1, tab2 ]

  return (
    <div className="Store">
      <div className="Tab-list">
          {tabItemArray.map(tab =>
            <div className={"Tab-item-" + tab.key}>
              {tab.key}
            </div>
          )}
      </div>

      {storeItemArray.map(item => 
        <div className={"Store-item-" + item.key} key={item.key}>
          <div className={"Item-container" + item.key}>
            <img src={item.image} className={"Item-image-" + item.key} alt={item.alt} />
            <p className={"Item-description-" + item.key}>{item.name}</p>
          </div>
        </div>      
      )}

    </div>
  );
}

export default ShoppingCart;
