import React from "react";
import "./CurrentUser.css";
import { Link } from "react-router-dom";
import { signOut } from "../../firebaseConfig";

function CurrentUser({ displayName, photoURL }) {
  return (
    <div className="current-user">
      <Link to="/home" className="link-home">
        <h1 className="title">HomeQuarters</h1>
      </Link>
      <div className="current-user-actions">
        <button className="sign-out-button" onClick={signOut}>
          sign out
        </button>
        {photoURL ? (
          <Link to="/profile" className="link-profile">
            <img
              className="profile-picture"
              src={photoURL}
              alt="user thumbnail"
            />
          </Link>
        ) : (
          <img
            className="default-profile-picture"
            src={`${process.env.PUBLIC_URL}/default-profile.png`}
            alt="default"
          />
        )}
      </div>
    </div>
  );
}

export default CurrentUser;
