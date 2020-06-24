import React from "react";
import "./App.css";

import Spinner from "./Spinner";

function App() {
  return (
    <div className="App">
      <Spinner initTime="2000"></Spinner>
      <Spinner initTime="2500"></Spinner>
      <Spinner initTime="3000"></Spinner>
    </div>
  );
}

export default App;
