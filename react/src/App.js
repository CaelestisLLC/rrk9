import React from 'react';
import logo from './img/logo.png';
import item_example from './img/example-product.jpg';
import './App.css';

function App() {
  var storeItem1 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", image: item_example, alt: "Zignature" };
  var storeItem2 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", image: item_example, alt: "Zignature" };
  var storeItem3 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", image: item_example, alt: "Zignature" };
  var storeItemArray = [ storeItem1, storeItem2, storeItem3 ]
  var tab0 = { key: "Shop" }
  var tab1 = { key: "Deals" }
  var tab2 = { key: "Clearance" }
  var tabItemArray = [ tab0, tab1, tab2 ]
  var link1 = { key: Math.floor(Math.random() * 100), description: "Google Homepage", uri: "https://google.com/" }
  var link2 = { key: Math.floor(Math.random() * 100), description: "Google Homepage", uri: "https://google.com/" }
  var footerLinkArray = [ link1, link2 ]
  return (
    <div className="App">
      <header className="App-header">
          <div className="App-logo-container">
            <img className="App-logo-image" src={logo} alt="logo" />
          </div>
          <div className="App-name">
            STORE
          </div>
          <div className="App-checkout">
            <div className="App-checkout-placeholder">
            </div>
            <div className="App-login">
              {/* Login stuff here; Facebook, Google, Twitter icons, etc. */}
              Login
            </div>
            <div className="App-cart">
              {/* Cart stuff here; cart icon, etc. */}
              Cart
            </div>
          </div>
          <div className="Tab-list">
            {tabItemArray.map(tab =>
              <div className={"Tab-item-" + tab.key}>
                {tab.key}
              </div>
            )}
          </div>
      </header>
      <div className="Menu">
        SHOP BY CATEGORY
        <ul>
          <li>Dog Food</li>
          <li>Dog Toys</li>
          <li>Crates</li>
        </ul>
      </div>
      <div className="Store">
        {/* We might have a store header here; CSS name Store-header */}
        {/* Do this: https://medium.com/@ayabellazreg/make-a-simple-shopping-cart-app-using-react-redux-1-3-fefde93e80c7 */}

        {storeItemArray.map(item => 
          <div className={"Store-item-" + item.key} key={item.key}>
            <div className={"Item-container" + item.key}>
              <img src={item.image} className={"Item-image-" + item.key} alt={item.alt} />
              <p className={"Item-description-" + item.key}>{item.name}</p>
            </div>
          </div>      
        )}

      </div>
      <div className="Footer">
        {footerLinkArray.map(link => 
          <div className={"Link-item-" + link.key}>
            <a href={link.uri}>{link.description}</a>
          </div>
        )}
        <p className="copyright">© 2020 Chaim Eliyah</p>
      </div>
    </div>
  );
}

export default App;
