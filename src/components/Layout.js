import React from 'react'
import { connect } from 'react-redux'

import '../App.css'
import UserList from './UserList'

import { fetchUser } from "../actions/userActions"

function mapStateToProps(store) {
  return { user: store.user.user };
}

class Layout extends React.Component {
  componentWillMount(){
    this.props.dispatch(fetchUser())
  }
  render() {
    console.log(this.props)
    return (
      <div className="wrapper">
        <div className="menu">
          <div>Private Chat</div>
          <div className="user">{this.props.user.name}</div>
        </div>
        <UserList />
        <div>Hi wats up?</div>
      </div>
    );
  }
}



export default connect(mapStateToProps)(Layout);
