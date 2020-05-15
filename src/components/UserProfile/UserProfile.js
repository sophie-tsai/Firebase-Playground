import React, { useState, useRef } from "react";
import { auth, firestore, storage } from "../../firebaseConfig";
import "./UserProfile.css";

function UserProfile() {
  const [displayName, setDisplayName] = useState("");
  const imageInputRef = useRef(null);

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

    if (imageInputRef) {
      if (imageInputRef.current.files[0]) {
        // console.log(imageInputRef);
        storage
          .ref()
          .child("user-profiles")
          .child(auth.currentUser.uid)
          .child(imageInputRef.current.files[0].name)
          .put(imageInputRef.current.files[0])
          .then((imageInputRef.current.value = ""))
          .then((response) => response.ref.getDownloadURL())
          .then((photoURL) =>
            firestore
              .collection("users")
              .doc(auth.currentUser.uid)
              .update({ photoURL })
          );
      }
    }
  };

  return (
    <section className="user-profile">
      <h3>edit your user profile!</h3>
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
        <br />
        <label>
          <input type="file" ref={imageInputRef}></input>
        </label>
        <button type="submit">submit</button>
      </form>
    </section>
  );
}

export default UserProfile;
