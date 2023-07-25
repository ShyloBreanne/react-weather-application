import React from "react";
import Weather from "./Weather.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Portland"/>
      <footer>
        This project was coded by <a href="https://www.linkedin.com/in/breannelyall/" target="_blank" rel="noopener noreferrer">Breanne Lyall</a> and is {""}
        <a href="https://github.com/ShyloBreanne/react-weather-application" target="_blank" rel="noopener noreferrer">open-sourced</a> on GitHub and <a href="https://poetic-sunshine-74c8fb.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
        </footer>
      </div>
    </div>
  );
}
