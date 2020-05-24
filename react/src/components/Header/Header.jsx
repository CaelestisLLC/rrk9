import React from 'react';
import logo from '../../img/logo.png';

import './Header.css';

class Header extends React.Component {

  render () {
    return (
      <header className="App-header">
      <a href={window.location.protocol + "//" + window.location.host + "/"}>
        <div className="App-logo-container">
          <img className="App-logo-image" src={logo} alt="logo" />
        </div>
        <div className="App-name">
          STORE
        </div>
      </a>
    </header>
    );
  }  
}

export default Header;
