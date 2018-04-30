import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../css/App.css';
import { getUser, saveUser } from "../actions/userActions"


function mapStateToProps(store){
  return {
    authUser: store.session.authUser,
    user: store.user.user
  };
}

class Login extends Component{
  componentWillMount(){
    getUser(this.props.authUser.uid);
  }

  saveProfile(){
    debugger;
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
   // var twitter_user_name = document.getElementById('twitter_user_name').value;
    //var fb_user_name = document.getElementById('fb_user_name').value;
    //var phone_number = document.getElementById('phone_number').value;
    saveUser(this.props.authUser.uid, {first_name: first_name, last_name: last_name})
  }

  render() {
    return (
      <div className="profile">
        <div>
          <h5>Profile</h5>
          <p>You need to setup your profile just takes half 2 minutes.</p>
        </div>

        <div className="form">
          <div className="form-elements">
            <input type='text' id='first_name'  placeholder='First Name' />
            <input type='text' id='last_name' placeholder='Last Name' />
            <input type='text' id='twitter_user_name' placeholder='Twitter Handle' />
            <input type='text' id='fb_user_name'  placeholder='Facebook Name' />
            <input type='text' id='phone_number'  placeholder='Phone Number' />
          </div>
          <div className="form-actions">
            <button className="btn" onClick={this.saveProfile.bind(this)}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
