import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import '../css/App.css'
import FriendList from './FriendList'
import Menu from './Menu'
import Login from './Login'

import { fetchUser } from "../actions/userActions"

function mapStateToProps(store) {
  return {
          authUser: store.session.authUser,
          user: store.user.user
         };
}

class Layout extends React.Component {
  render() {
    if(!this.props.authUser)
      return( <Login />)
    return (
      <div className="wrapper">
        <Menu />
        <FriendList />
        <div>Hi wats up?</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Layout);
