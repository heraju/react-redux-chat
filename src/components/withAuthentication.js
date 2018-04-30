import React from 'react';
import { connect } from 'react-redux';

import { app, auth } from '../helpers/fireClient'
import { fetchUser, getUser } from "../actions/userActions"

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { onSetAuthUser } = this.props;

      auth.onAuthStateChanged(authUser => {
        authUser
          ? onSetAuthUser(authUser)
          : onSetAuthUser(null);
      });
    }

    render() {
      return (
        <Component />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: (authUser) => {
      dispatch(getUser(authUser.uid))
      dispatch({ type: 'AUTH_USER_SET', payload: authUser })}
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;
