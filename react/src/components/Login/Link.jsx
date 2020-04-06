// https://reactjs.org/docs/conditional-rendering.html
import React from 'react';

function LoginLink(props) {
  return (
    <p onClick={props.onClick}>
      Login
    </p>
  );
}

function LogoutLink(props) {
  return (
    <p onClick={props.onClick}>
      Logout
    </p>
  );
}

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutLink onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginLink onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        {/* <Greeting isLoggedIn={isLoggedIn} /> */}
        {button}
      </div>
    );
  }
}

export default LoginControl;
