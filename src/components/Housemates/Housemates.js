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
    <>
      {userLoaded && <CurrentUser {...user} />}

      <div className="housemates-page">
        <div className="housemates-container">
          <AddHousemate />
          {housemates.map((housemate) => (
            <Housemate {...housemate} key={housemate.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Housemates;
