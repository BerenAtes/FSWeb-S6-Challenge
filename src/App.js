import React from "react";
import Api from "./api/Api";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">STARWARS CHARACTERS</h1>
      <Api />
    </div>
  );
};

export default App;
