import React from 'react';
import Menu from './Menu.jsx';
import Tabs from './Tabs.jsx';
import CartLink from './CartLink.jsx';
import LoginControl from './Login.jsx';

// import './Bar.css';

class MenuBar extends React.Component {

  render() {
    return (
      <div className="MenuBar">
        <Menu clickCategory={this.props.clickCategory} />
        <Tabs clickTab={this.props.clickTab} />
        <CartLink toggleCartState={this.props.toggleCartState} />
        <LoginControl />
      </div>
    );
  }
}

export default MenuBar;
