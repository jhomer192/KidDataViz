
import './App.css';

import React from "react";
import NavBar from "./navBar.js";
import GameWindow from './gameWindow';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <GameWindow/>
    </div>
  );
}

export default App;
