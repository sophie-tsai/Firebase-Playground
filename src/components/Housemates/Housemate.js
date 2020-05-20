import React, { useContext } from "react";
import "./Housemates.css";
import { houseRef } from "../../firebase";
import { UserContext } from "../../providers/UserProvider";
import { Link } from "react-router-dom";

const belongsToCurrentUser = (currentUser, postAuthor) => {
  if (!currentUser) return false;
  return currentUser.uid === postAuthor.uid;
};

function Housemate({ id, name, user }) {
  const currentUser = useContext(UserContext);

  async function handleDelete(id) {
    houseRef
      .doc(id)
      .delete()
      .then(console.log(`deleted: ${name}`))
      .catch((err) => console.error(err));
  }

  return (
    <div key={id} className="housemate">
      <Link to={`/housemate/${id}`} className="housemate-name">
        <h2>{name}</h2>
      </Link>
      <div className="post-information">
        {user && (
          <span className="posted-by">added by {user.displayName} </span>
        )}

        {belongsToCurrentUser(currentUser.user, user) && (
          <button className="delete-button" onClick={() => handleDelete(id)}>
            move out
          </button>
        )}
      </div>
    </div>
  );
}

export default Housemate;
