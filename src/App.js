import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App" id="back-to-top">
      <div className="container">
        <h1 className="text-center">📖 Dictionary</h1>
        <Dictionary />
        <footer>
          <a
            href="https://github.com/amandalynn1204/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced code
          </a>{" "}
          by Amanda Ludwick
        </footer>
      </div>
    </div>
  );
}

export default App;
