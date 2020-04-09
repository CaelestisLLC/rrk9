// https://reactjs.org/docs/conditional-rendering.html
import React from 'react';
import Fakes from '../../fakes.js';


function LoginLink(props) {
  return (
    <p onClick={props.onClick}>
      Login
    </p>
  );
}

function LogoutLink(props) {
  // TODO logout
  return (
    <p onClick={props.onClick}>
      Welcome, {props.userEmail}!
    </p>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false, userEmail: "" };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true, userEmail: Fakes.userEmail });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false, userEmail: "" });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutLink userEmail={this.state.userEmail} onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginLink onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default LoginControl;
