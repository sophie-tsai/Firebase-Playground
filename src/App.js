import React, { useState, useRef, useEffect } from "react";
import "./firebase";
import "./App.css";
import Housemates from "./components/Housemates/Housemates";
import HousematePage from "./components/Housemates/HousematePage";
import LandingPage from "./components/LandingPage/LandingPage";
import Authentication from "./components/Authentication/Authentication";
import UserProfile from "./components/UserProfile/UserProfile";

import { Switch, Route } from "react-router-dom";
import Signature from "./components/Signature";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

function App() {
  const [authType, setAuthType] = useState("sign up");

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x002642,
          backgroundColor: 0xe5dada,
          points: 5.0,
          maxDistance: 18.0,
          spacing: 17.0,
          THREE: THREE,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="main-app-container">
      <div id="vanta-background" ref={vantaRef}></div>
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
