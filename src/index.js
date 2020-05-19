import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HousemateProvider } from "./providers/HousemateProvider";
import { UserProvider } from "./providers/UserProvider";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <UserProvider>
    <HousemateProvider>
      <Router>
        <App />
      </Router>
    </HousemateProvider>
  </UserProvider>,
  document.getElementById("root")
);
