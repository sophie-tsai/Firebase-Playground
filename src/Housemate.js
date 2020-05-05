import React, { useContext } from "react";

import houseRef from "./firebase";
import { UserContext } from "./providers/UserProvider";

const belongsToCurrentUser = (currentUser, postAuthor) => {
  if (!currentUser) return false;
  return currentUser.uid === postAuthor.uid;
};

function Housemate({ id, name, gender, user }) {
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
      <h3>
        {name}, {gender}
      </h3>
      <div className="post-information">
        <span>posted by {user.displayName}</span>

        {belongsToCurrentUser(currentUser.user, user) && (
          <button onClick={() => handleDelete(id)}>delete</button>
        )}
      </div>
    </div>
  );
}

export default Housemate;
