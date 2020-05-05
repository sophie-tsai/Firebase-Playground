import React, { useState } from "react";
import { auth, firestore } from "./firebaseConfig";
import "./UserProfile.css";

function UserProfile() {
  const [displayName, setDisplayName] = useState("");
  const imageInputRef = null;

  const handleChange = (event) => {
    const { value } = event.target;
    setDisplayName(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (displayName) {
      await firestore
        .collection("users")
        .doc(auth.currentUser.uid)
        .update({ displayName });
      setDisplayName("");
    }
  };

  return (
    <section className="user-profile">
      <form onSubmit={handleSubmit}>
        <label>
          display name:
          <input
            type="text"
            value={displayName}
            className="user-profile-input-name"
            onChange={handleChange}
            placeholder="name"
          ></input>
        </label>
        <label>
          <input type="file" ref={imageInputRef}></input>
        </label>
        <button type="submit">submit</button>
      </form>
    </section>
  );
}

export default UserProfile;
