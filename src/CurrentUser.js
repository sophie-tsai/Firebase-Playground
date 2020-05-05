import React from "react";
import "./CurrentUser.css";

import { signOut } from "./firebaseConfig";

function CurrentUser({ displayName, photoURL }) {
  return (
    <div className="current-user">
      <div>
        <img src={photoURL} alt="user thumbnail" />
      </div>
      <div>
        <h2>{displayName}</h2>
        <button onClick={signOut}>sign out</button>
      </div>
    </div>
  );
}

export default CurrentUser;
