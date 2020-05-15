import React, { useContext } from "react";

import Housemate from "./Housemate";
import "./Housemates.css";
import { HousemateContext } from "../../providers/HousemateProvider";

import AddHousemate from "./AddHousemate";

function Housemates() {
  const housemates = useContext(HousemateContext);

  return (
    <div>
      <AddHousemate />

      {housemates.map((housemate) => (
        <Housemate {...housemate} key={housemate.id} />
      ))}
    </div>
  );
}

export default Housemates;
