import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import '../css/App.css'
import FriendList from './FriendList'
import Menu from './Menu'
import Login from './Login'
import Profile from './Profile'

import { fetchUser, getUser } from "../actions/userActions"

function mapStateToProps(store) {
  return {
          authUser: store.session.authUser,
          user: store.user.user
         };
}

class Layout extends React.Component {

  render() {
    debugger;
    if(!this.props.authUser)
      return( <Login />);
    if(!this.props.user)
      return(
        <div className="wrapper fa">
          <Menu />
          <Profile />
        </div>
      );
    return (
      <div className="wrapper fa">
        <Menu />
        <FriendList />
        <div>Hi wats up?</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Layout);
