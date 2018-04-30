import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../css/App.css';

import { fetchFriends } from "../actions/friendsActions"

function mapStateToProps(store) {
  return { friends: store.friends.friends };
}

class FriendList extends Component {

  componentWillMount(){
    this.props.dispatch(fetchFriends(this.props.dispatch))
  }

  render() {
    if(this.props.friends.length == 0){
      return(<div className="friends-list"><div>Loading...</div></div>)
    }
    return (
      <div className="friends-list">
        {this.props.friends.map(friend => (
          <div>{friend.first_name} {friend.last_name}</div>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(FriendList);
