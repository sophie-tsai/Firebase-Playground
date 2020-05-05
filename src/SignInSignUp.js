import React from "react";
import { signInWithGoogle } from "./firebaseConfig";
import SignUp from "./SignUp";
import "./SignIn.css";

function SignInSignUp() {
  return (
    <div>
      <div className="sign-in">
        <label>
          email
          <input type="email" className="sign-in-input" />
        </label>
        <br />
        <label>
          password
          <input type="password" className="sign-in-input" />
        </label>
        <br />
        <button>sign in with email</button>
        <button onClick={signInWithGoogle}>sign in with google</button>
      </div>

      <SignUp />
    </div>
  );
}

export default SignInSignUp;
