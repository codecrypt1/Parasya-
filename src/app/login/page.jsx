"use client";

import React from "react";
import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientID =
  "746083793683-k3116klr7ft06jdcmiupfonlg3pi6ucj.apps.googleusercontent.com";

const LoginPage = () => {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientID: clientID,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  return <div></div>;
};

export default LoginPage;
