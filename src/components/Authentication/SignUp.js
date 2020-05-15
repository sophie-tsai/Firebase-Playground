import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebaseConfig";

function SignUp() {
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
      <label>
        display name
        <input
          type="text"
          name="displayName"
          value={signUpInput.displayName}
          onChange={(event) => handleChange(event)}
          className="sign-in-input"
        />
      </label>
      <br />
      <label>
        email
        <input
          type="email"
          name="email"
          value={signUpInput.email}
          onChange={(event) => handleChange(event)}
          className="sign-in-input"
        />
      </label>
      <br />
      <label>
        password
        <input
          type="password"
          name="password"
          value={signUpInput.password}
          onChange={(event) => handleChange(event)}
          className="sign-in-input"
        />
      </label>
      <br />
      <button onClick={handleSubmit}>sign up with email</button>
    </div>
  );
}

export default SignUp;
