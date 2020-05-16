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
    <>
      <div className="sign-in">
        <label>
          email
          <input
            type="email"
            className="sign-in-input"
            onKeyUp={handleKeyUp}
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          password
          <input
            type="password"
            className="sign-in-input"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button onClick={() => signInWithEmail(email, password)}>
          sign in with email
        </button>
        <button onClick={signInWithGoogle}>sign in with google</button>
      </div>
    </>
  );
}

export default SignIn;
