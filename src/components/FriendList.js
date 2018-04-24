import React, { Component } from 'react';
import '../css/App.css';


class FriendList extends Component {
  render() {
    return (
      <div className="friends-list">
        <div className="selected">Ram</div>
        <div>Nithya</div>
        <div>Priya</div>
      </div>
    );
  }
}

export default FriendList;
