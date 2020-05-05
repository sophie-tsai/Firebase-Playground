import React from "react";
import "./firebase";
import "./App.css";
import Housemates from "./Housemates";
import Authentication from "./Authentication";

function App() {
  return (
    <div>
      <h1>housemates</h1>
      <Authentication />
      <Housemates />
    </div>
  );
}

export default App;
