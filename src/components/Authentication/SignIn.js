import React, { useState } from "react";
import { signInWithGoogle, signInWithEmail } from "../../firebaseConfig";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(event) {
    const { type, value } = event.target;
    if (type === "email") {
      setEmail(value);
      return;
    }
    setPassword(value);
  }

  function handleKeyUp(event) {
    if (event.keyCode === 13) {
      signInWithEmail(email, password);
    }
  }

  return (
    <div className="sign-in">
      <input
        type="email"
        className="sign-in-input"
        onKeyUp={handleKeyUp}
        value={email}
        onChange={handleChange}
        placeholder="email"
      />

      <input
        type="password"
        className="sign-in-input"
        value={password}
        onChange={handleChange}
        placeholder="password"
      />

      <div className="button-sign-in-container">
        <button
          onClick={() => signInWithEmail(email, password)}
          className="button button-email-sign-in"
        >
          sign in with email
        </button>
        <button
          className="button button-google-sign-in"
          onClick={signInWithGoogle}
        >
          sign in with google
        </button>
      </div>
    </div>
  );
}

export default SignIn;
