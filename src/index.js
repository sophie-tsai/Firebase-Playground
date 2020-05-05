import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HousemateProvider } from "./providers/HousemateProvider";
import { UserProvider } from "./providers/UserProvider";

ReactDOM.render(
  // <React.StrictMode>
  <UserProvider>
    <HousemateProvider>
      <App />
    </HousemateProvider>
  </UserProvider>,

  // </React.StrictMode>
  document.getElementById("root")
);
