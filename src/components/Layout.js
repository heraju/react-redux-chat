import React from 'react'
import { connect } from 'react-redux'

import '../css/App.css'
import FriendList from './FriendList'
import Login from './Login'

import { fetchUser } from "../actions/userActions"

function mapStateToProps(store) {
  return { user: store.user.user };
}


class Layout extends React.Component {
  render() {
    if(!this.props.user.id)
      return(<Login />)
    return (
      <div className="wrapper">
        <div className="menu">
          <div>Private Chat</div>
          <div className="user">{this.props.user.name}</div>
        </div>
        <FriendList />
        <div>Hi wats up?</div>
      </div>
    );
  }
}



export default connect(mapStateToProps)(Layout);
