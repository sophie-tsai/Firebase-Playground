import React, { useState, useEffect } from "react";
import "./CurrentUser.css";
import { Link } from "react-router-dom";
import { signOut } from "../../firebaseConfig";

function CurrentUser({ photoURL }) {
  const [width, setWidth] = useState(500);

  const getWindowWidth = () => {
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    setWidth(windowWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getWindowWidth);

    return () => window.removeEventListener("resize", getWindowWidth);
  }, []);

  return (
    <div className="current-user">
      <Link to="/home" className="link-home">
        {width > 400 ? (
          <h1 className="title">HomeQuarters</h1>
        ) : (
          <h1 className="title">HQ</h1>
        )}
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
