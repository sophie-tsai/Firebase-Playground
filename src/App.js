import React from "react";
import "./firebase";
import "./App.css";
import Housemates from "./components/Housemates/Housemates";
import HousematePage from "./components/Housemates/HousematePage";
import Authentication from "./components/Authentication/Authentication";
import UserProfile from "./components/UserProfile/UserProfile";

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
