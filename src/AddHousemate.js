import React, { useState } from "react";
import houseRef from "./firebase";
import { auth } from "./firebaseConfig";

function AddHousemate() {
  const [housemateInfo, setHousemateInfo] = useState({
    name: "",
    gender: "female",
  });

  const { uid, displayName } = auth.currentUser || {};

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
        user: { displayName: displayName, uid: uid },
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
    <div className="add-housemate">
      <input
        type="text"
        value={housemateInfo.name}
        placeholder="enter name"
        name="name"
        onChange={handleChange}
        onKeyUp={enterPressed}
        required
      />
      <select
        value={housemateInfo.gender}
        onChange={handleChange}
        name="gender"
      >
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="non-binary">non-binary</option>
      </select>
      {housemateInfo.name.length !== 0 && (
        <button type="submit" onClick={handleCreate}>
          add roommate
        </button>
      )}
    </div>
  );
}

export default AddHousemate;