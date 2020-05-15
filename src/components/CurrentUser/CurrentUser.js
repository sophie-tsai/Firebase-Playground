import React from "react";
import "./CurrentUser.css";
import { Link } from "react-router-dom";
import { signOut } from "../../firebaseConfig";

function CurrentUser({ displayName, photoURL }) {
  return (
    <div className="current-user">
      <div>
        <img src={photoURL} alt="user thumbnail" />
      </div>
      <div>
        <Link to="/profile" className="link-profile">
          <h2>{displayName}</h2>
        </Link>
        <button onClick={signOut}>sign out</button>
      </div>
    </div>
  );
}

export default CurrentUser;
