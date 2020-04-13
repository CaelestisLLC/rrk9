// https://reactjs.org/docs/conditional-rendering.html
import React from 'react';
import Fakes from '../../fakes.js';

import google_login_image from '../../img/btn_google_signin_dark_pressed_web.png'
import facebook_login_image from '../../img/f_logo_RGB-Blue_58.png'

import './Link.css'

class LoginLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showLoginButtons: false }
    this.showLogin = this.showLogin.bind(this);
    this.hideLogin = this.hideLogin.bind(this);
  }

  showLogin() {
    this.setState(state => ({ showLoginButtons: true }));
  }
  hideLogin() {
    this.setState(state => ({ showLoginButtons: false }));
  }

  render () {
    return (
      <div className="Greeting" onMouseEnter={this.showLogin} onMouseLeave={this.hideLogin}>
        <div className="LoginBox">
          {this.state.showLoginButtons
            ?
              <div>
                <img className="GoogleLogin" onClick={this.props.onClick} src={google_login_image} alt="Google" />
                <img className="FacebookLoginLogo" onClick={this.props.onClick} src={facebook_login_image} alt="Facebook" />
                <div className="FacebookLoginText" onClick={this.props.onClick}> 
                  <p>Login with Facebook</p>
                </div>
              </div>
            : 
            <div className="EmptyLoginSpace">
              <br />
            </div>
          }
        </div>
        <p>
          Login
        </p>
      </div>
    );
  }
}

class LogoutLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showLogout: false };
    this.showLogout = this.showLogout.bind(this);
    this.hideLogout = this.hideLogout.bind(this);
  }

  showLogout() {
    this.setState(state => ({ showLogout: true }));
  }
  hideLogout() {
    this.setState(state => ({ showLogout: false }));
  }

  render () {
    return (
      <div className="Greeting" onMouseEnter={this.showLogout} onMouseLeave={this.hideLogout}>
        <div className="LogoutBox">
          {this.state.showLogout
            ?
              <div className="EmptyLoginSpace">
                <br />
                <br />
                <p className="LogoutLink" onClick={this.props.onClick}>Logout</p>
              </div>
            :
              <div className="EmptyLoginSpace">
                <br />
              </div>
          }
        </div>
        <p>
          Welcome, {this.props.userEmail}!
        </p>
      </div>
    );
  }
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

    let button;
    if (this.state.isLoggedIn) {
      button = <LogoutLink userEmail={this.state.userEmail} onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginLink onClick={this.handleLoginClick} />;
    }

    return (
      <div className="App-login">
        {button}      
      </div>
    );
  }
}

export default LoginControl;
