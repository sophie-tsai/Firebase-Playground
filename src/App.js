import React from "react";
import "./firebase";
import "./App.css";
import Housemates from "./Housemates";
import HousematePage from "./HousematePage";
import Authentication from "./Authentication";
import UserProfile from "./UserProfile";

import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/Firebase-Playground" className="link-home">
        <h1>housemates</h1>
      </Link>
      <Authentication />
      <Switch>
        <Route exact path="/Firebase-Playground">
          <Housemates />
        </Route>
        <Route exact path="/profile">
          <UserProfile />
        </Route>
        <Route exact path="/housemate/:id">
          <HousematePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
