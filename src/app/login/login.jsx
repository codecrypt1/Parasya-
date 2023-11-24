import React from "react";

import { GoogleLogin } from "@react-oauth/google";

const clientID ="746083793683-k3116klr7ft06jdcmiupfonlg3pi6ucj.apps.googleusercontent.com";

function Login() {

  var onSuccess = (res) => {
    console.log("Login Success: ", res.profileObj);
  };

  var onFailure = (res) => {
    console.log("Login Failed: ", res);
  };

  return (
    <div signinButton>
      <GoogleLogin
        clientID={clientID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
