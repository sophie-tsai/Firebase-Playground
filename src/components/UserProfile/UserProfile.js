import React, { useState, useRef, useContext, useEffect } from "react";
import { auth, firestore, storage } from "../../firebaseConfig";
import "./UserProfile.css";
import { userCollectionRef } from "../../firebase";
import { UserContext } from "../../providers/UserProvider";
import CurrentUser from "../CurrentUser/CurrentUser";
import { useHistory } from "react-router-dom";

function UserProfile() {
  const [displayName, setDisplayName] = useState("");
  const imageInputRef = useRef(null);
  const { user, userLoaded } = useContext(UserContext);
  const [date, setDate] = useState("");
  let history = useHistory();

  const handleChange = (event) => {
    const { value } = event.target;
    setDisplayName(value);
  };

  const formatDate = () => {
    if (user) {
      const createdAtDate = user.createdAt.toDate().toDateString();
      const dateArray = createdAtDate.split(" ");
      const formattedDateArray = dateArray.filter((element) => {
        const index = dateArray.indexOf(element);
        if (index % 2 === 1) {
          return true;
        }
      });
      const formattedDate = formattedDateArray.join(" ");
      setDate(formattedDate);
    }
  };

  const deleteUserAccount = async () => {
    if (user) {
      history.push("/HomeQuarters");
      await userCollectionRef.doc(auth.currentUser.uid).delete();
      console.log("account successfully deleted");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (displayName) {
      await userCollectionRef.doc(auth.currentUser.uid).update({ displayName });
      setDisplayName("");
    }

    if (imageInputRef) {
      if (imageInputRef.current.files[0]) {
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

  useEffect(() => {
    formatDate();
  }, []);

  return (
    <>
      {userLoaded && <CurrentUser {...user} />}

      <section className="user-profile">
        {user && (
          <div className="about-user">
            <div className="about-user-img-container">
              <img
                alt="user-img"
                src={user.photoURL}
                className="about-user-img"
              />
            </div>

            <div className="user-info-container">
              <h2 className="user-info-name">{user.displayName}</h2>
              <p className="user-info-date">member since {date}</p>
            </div>
          </div>
        )}
        <div className="edit-user-info">
          <h3 className="edit-user-info-header">edit your profile</h3>

          <form onSubmit={handleSubmit}>
            <label className="user-profile-label-name">
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
            <span>profile picture:</span>
            <label className="file-input-button">
              choose image to upload
              <input
                type="file"
                ref={imageInputRef}
                className="file-input"
              ></input>
            </label>
            <button type="submit" className="submit-edit-button">
              submit
            </button>
          </form>
        </div>

        <div>
          <button className="delete-account button" onClick={deleteUserAccount}>
            delete account
          </button>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
