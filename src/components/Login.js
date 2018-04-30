import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../css/App.css';
import { fetchUser, googleLogin, twitterLogin } from "../actions/userActions"
import SocialLogin from './SocialLogin'

function mapStateToProps(store){
  return { user: store.user.user};

}

class Login extends Component{

  login() {
    var uname = document.getElementById('uname').value;
    var pass = document.getElementById('pass').value;
    fetchUser({uname: uname, pass: pass});
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <input type='text' id='uname' placeholder='Email' />
        <input type='password' id='pass' placeholder='Password' />
        <button onClick={this.login.bind(this)}>login</button>
        <SocialLogin {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, {googleLogin, twitterLogin})(Login);
