import React from "react";
import Weather from "./Weather.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        This project was coded by <a href="https://www.linkedin.com/in/breannelyall/">Breanne Lyall</a> and is {""}
        <a href="https://github.com/ShyloBreanne/react-weather-application" target="_blank">open-sourced</a> on GitHub
        </footer>
      </div>
    </div>
  );
}
