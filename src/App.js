import React, { useContext } from "react";
import "./firebase";
import "./App.css";
import Housemates from "./components/Housemates/Housemates";
import HousematePage from "./components/Housemates/HousematePage";
import LandingPage from "./components/LandingPage/LandingPage";
import UserProfile from "./components/UserProfile/UserProfile";
import { UserContext } from "./providers/UserProvider";

import { Switch, Route } from "react-router-dom";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Switch>
        <Route exact path="/HomeQuarters">
          {user ? <Housemates /> : <LandingPage />}
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
