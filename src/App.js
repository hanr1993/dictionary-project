import logo from "./logo.png";
import React from "react";
import Dictionary from "./dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary defaultKeyword="sunset" />
        <footer className="App-footer">Coded by Hannah Rusk</footer>
      </div>
    </div>
  );
}

export default App;
