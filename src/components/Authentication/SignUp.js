import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebaseConfig";
import { Link } from "react-router-dom";

function SignUp(props) {
  const { setAuthType } = props;
  const [signUpInput, setSignUpInput] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setSignUpInput((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSubmit() {
    const { displayName, email, password } = signUpInput;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // user.updateProfile({ displayName });
      createUserProfileDocument(user, { displayName });
    } catch (error) {
      alert(error);
    }
    setSignUpInput({
      displayName: "",
      email: "",
      password: "",
    });
  }

  return (
    <div className="email-authentication">
      <input
        type="text"
        name="displayName"
        value={signUpInput.displayName}
        onChange={(event) => handleChange(event)}
        className="sign-in-input"
        placeholder="display name"
      />

      <input
        type="email"
        name="email"
        value={signUpInput.email}
        onChange={(event) => handleChange(event)}
        className="sign-in-input"
        placeholder="email"
      />

      <input
        type="password"
        name="password"
        value={signUpInput.password}
        onChange={(event) => handleChange(event)}
        className="sign-in-input"
        placeholder="password"
      />
      <div className="button-sign-in-container">
        <button className="button button-email-sign-up" onClick={handleSubmit}>
          sign up with email
        </button>
      </div>
      <Link to="/HomeQuarters/auth">
        <p className="link-to-sign-in" onClick={() => setAuthType("sign in")}>
          already have an account?
        </p>
      </Link>
    </div>
  );
}

export default SignUp;
