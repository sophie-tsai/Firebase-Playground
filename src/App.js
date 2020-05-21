import React, { useState, useContext } from "react";
import "./firebase";
import "./App.css";
import Housemates from "./components/Housemates/Housemates";
import HousematePage from "./components/Housemates/HousematePage";
import LandingPage from "./components/LandingPage/LandingPage";
import Authentication from "./components/Authentication/Authentication";
import UserProfile from "./components/UserProfile/UserProfile";
import { UserContext } from "./providers/UserProvider";
import { Switch, Route } from "react-router-dom";
import Signature from "./components/Signature";

function App() {
  const { user, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [authType, setAuthType] = useState("sign up");
  return (
    <div className="main-app-container" id="particles">
      <Switch>
        <Route exact path="/HomeQuarters">
          <LandingPage setAuthType={setAuthType} />
        </Route>

        <Route exact path="/profile">
          <UserProfile />
        </Route>
        <Route exact path="/housemate/:id">
          <HousematePage />
        </Route>
        <Route exact path="/home">
          <Housemates />
        </Route>

        <Route exact path="/HomeQuarters/auth">
          <Authentication authType={authType} setAuthType={setAuthType} />
        </Route>

        <Route
          component={() => <h1 className="page-404">404 page not found</h1>}
        />
      </Switch>

      <Signature />
    </div>
  );
}

export default App;
