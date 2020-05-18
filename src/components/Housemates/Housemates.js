import React, { useContext } from "react";
import CurrentUser from "../CurrentUser/CurrentUser";
import Housemate from "./Housemate";
import "./Housemates.css";
import { HousemateContext } from "../../providers/HousemateProvider";
import { UserContext } from "../../providers/UserProvider";

import AddHousemate from "./AddHousemate";

function Housemates() {
  const housemates = useContext(HousemateContext);
  const { user, userLoaded } = useContext(UserContext);

  return (
    <div className="housemates-page">
      {userLoaded && <CurrentUser {...user} />}
      <AddHousemate />

      {housemates.map((housemate) => (
        <Housemate {...housemate} key={housemate.id} />
      ))}
    </div>
  );
}

export default Housemates;
