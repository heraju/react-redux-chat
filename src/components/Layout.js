import React from 'react'
import { connect } from 'react-redux'
//import logo from './logo.svg';
import '../App.css'
import UserList from './UserList'


function mapStateToProps(store) {
  return { user: store.user };
}

class Layout extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="wrapper">
        <div><UserList /></div>
        <div>Hi wats up?</div>
      </div>
    );
  }
}



export default connect(mapStateToProps)(Layout);
