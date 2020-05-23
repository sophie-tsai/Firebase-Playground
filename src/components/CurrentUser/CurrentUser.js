import React from "react";
import "./CurrentUser.css";
import { Link } from "react-router-dom";
import { signOut } from "../../firebaseConfig";

function CurrentUser({ photoURL }) {
  // const getWindowWidth = () => {
  //   const width =
  //     window.innerWidth ||
  //     document.documentElement.clientWidth ||
  //     document.body.clientWidth;
  //   console.log(width);
  //   return { width };
  // };

  return (
    <div className="current-user">
      <Link to="/home" className="link-home">
        <h1 className="title">HomeQuarters</h1>
      </Link>
      <div className="current-user-actions">
        <button className="sign-out-button" onClick={signOut}>
          sign out
        </button>
        <div className="profile-picture-container">
          {photoURL ? (
            <Link to="/profile" className="link-profile">
              <img
                className="profile-picture"
                src={photoURL}
                alt="user thumbnail"
              />
            </Link>
          ) : (
            <Link to="/profile" className="link-profile">
              <img
                className="default-profile-picture"
                src={`${process.env.PUBLIC_URL}/default-profile.png`}
                alt="default"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CurrentUser;
