import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../css/App.css';
import { fetchUser } from "../actions/userActions"

function mapStateToProps(store){
  return { user: store.user.user, fs_client: store.firebase};

}

class Login extends Component{

  login() {
    debugger;
    var uname = document.getElementById('uname').value;
    var pass = document.getElementById('pass').value;
    this.props.dispatch(fetchUser({uname: uname, pass: pass}, this.props.dispatch))
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <input type='text' id='uname' placeholder='Email' />
        <input type='password' id='pass' placeholder='Password' />
        <button onClick={this.login.bind(this)}>login</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
