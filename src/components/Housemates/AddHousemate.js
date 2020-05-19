import React, { useState, useContext } from "react";
import houseRef from "../../firebase";
import { auth } from "../../firebaseConfig";
import { UserContext } from "../../providers/UserProvider";
import "./Housemates.css";

function AddHousemate() {
  const [housemateInfo, setHousemateInfo] = useState({
    name: "",
    gender: "female",
  });
  const { user } = useContext(UserContext);
  const { uid } = auth.currentUser || {};

  async function handleCreate(event) {
    try {
      event.preventDefault();
      setHousemateInfo({
        name: "",
        gender: "female",
      });
      await houseRef.add({
        name: housemateInfo.name,
        gender: housemateInfo.gender,
        user: { displayName: user.displayName, uid: uid },
      });
    } catch (error) {
      alert("sign in to add a housemate");
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setHousemateInfo((prevData) => ({ ...prevData, [name]: value }));
  }

  const enterPressed = (event) => {
    if (event.keyCode === 13) {
      if (housemateInfo.name.length === 0) return;
      handleCreate(event);
    }
  };

  return (
    <div className="add-housemate-container">
      {user && (
        <div className="add-housemate">
          <input
            type="text"
            value={housemateInfo.name}
            placeholder="add housemate"
            name="name"
            onChange={handleChange}
            onKeyUp={enterPressed}
            className="add-housemate-name input"
            required
          />

          {housemateInfo.name.length !== 0 && (
            <button
              type="submit"
              onClick={handleCreate}
              className="submit-button"
            >
              enter
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default AddHousemate;
