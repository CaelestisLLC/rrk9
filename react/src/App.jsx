import React from 'react';
import logo from './img/logo.png';
import './App.css';

import ShoppingCart from './components/Cart/ShoppingCart.jsx';
import Store from './components/Store/Store.jsx';
import Login from './components/Login/Link';

import Fakes from './fakes.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleShowCart = this.handleShowCart.bind(this);
    this.handleHideCart = this.handleHideCart.bind(this);
    this.state = { showCart: false };
  }
  
  handleShowCart() {
    this.setState({ showCart: true });
  }

  handleHideCart() {
    this.setState({ showCart: false });
  }

  render () {
    // todo: manage state; cart component
    let button;
    if (this.state.showCart)
      button = <p onClick={this.handleHideCart}>Cart</p>;
    else
      button = <p onClick={this.handleShowCart}>Cart</p>;

    return (
      <div className="App">
        <header className="App-header">
          <a href={window.location.protocol + "//" + window.location.host + "/"}>
            <div className="App-logo-container">
              <img className="App-logo-image" src={logo} alt="logo" />
            </div>
            <div className="App-name">
                STORE
            </div>
          </a>
            <div className="App-checkout">
              <div className="App-checkout-placeholder">
              </div>
              <div className="App-login">
                {/* Login stuff here; Facebook, Google, Twitter icons, etc. */}
                <Login />
              </div>
              <div className="App-cart">
                <div>
                  {/* Cart stuff here; cart icon, etc. */}
                  {button}
                </div>
              </div>
            </div>
        </header>
        <div className="Menu">
          SHOP BY CATEGORY
          <ul>
            {Fakes.menuListArray.map(menuItem =>
              <li>{menuItem.key}</li>  
            )}
          </ul>
        </div>
        {/* We might have a store header here; CSS name Store-header */}

        { this.state.showCart ? <ShoppingCart /> : <Store /> }

        <div className="Footer">
          {Fakes.footerLinkArray.map(link => 
            <div className={"Link-item-" + link.key}>
              <a href={link.uri}>{link.description}</a>
            </div>
          )}
          <p className="copyright">© 2020 Chaim Eliyah</p>
        </div>
      </div>
    );
  }
}

export default App;
