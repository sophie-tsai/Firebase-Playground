import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Authentication.css";

function Authentication() {
  return (
    <div>
      <div className="button-auth-container">
        <button className="button-auth">sign in</button>
        <button className="button-auth">sign up</button>
      </div>
      {/* <SignIn />
      <SignUp /> */}
    </div>
  );
}

export default Authentication;
