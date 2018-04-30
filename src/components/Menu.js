import React, { Component } from 'react'
import { connect } from 'react-redux'
import { app, auth } from '../helpers/fireClient'

import '../css/App.css';
import { fetchUser, getUser } from "../actions/userActions"

function mapStateToProps(store){
  return {
          authUser: store.session.authUser,
          user: store.user.user
         };
}

class Menu extends Component{

  signOut() {
    auth.signOut();
  }

  render() {
    return (
      <div className="menu">
        <div className="fa fa-comments"> Personal</div>
        <div className="user">
          {this.props.authUser.email}
          <button type="button" onClick={this.signOut.bind(this)}>Sign Out</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Menu);
