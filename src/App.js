import React from "react";
import Weather from "./Weather.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Portland"/>
      <footer>
          This project was coded by <a href="https://www.linkedin.com/in/breannelyall/" target="_blank" rel="noopener noreferrer" title="Linkedin">Breanne Lyall.</a>
          <br />
          It is open-sourced on{" "}<a href="https://github.com/ShyloBreanne/react-weather-application" target="_blank" rel="noopener noreferrer" title="GitHub">GitHub</a> and hosted on{" "}<a href="https://poetic-sunshine-74c8fb.netlify.app/" target="_blank" rel="noopener noreferrer" title="Netlify">Netlify</a>{" "}💜
        </footer>
      </div>
    </div>
  );
}
