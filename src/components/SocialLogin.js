import React from 'react'
import '../css/bootstrap-social.css'

const SocialLogin = (props) => {
  const { googleLogin, twitterLogin } = props;

  return(
    <div>
      <a href="#" className="btn btn-social btn-google" onClick={googleLogin}>
        <span className="fa fa-google"/>Sign in with Google
      </a>
      <a href="#" className="btn btn-social btn-twitter" onClick={twitterLogin}>
        <span className="fa fa-twitter"/>Sign in with Twitter
      </a>
    </div>
    )

}

export default SocialLogin;
