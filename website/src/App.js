
import './App.css';

import React from "react";
import NavBar from "./navBar.js";
import BarAcross from './barAcross';
import GameWindow from './gameWindow';

function App() {
  
  return (
    
    <div className="App">
    
    
    
      
      <BarAcross/>
      <NavBar />
      <BarAcross/>
      <GameWindow/>
      <BarAcross/>
       
        
    
    </div>
  );
}

export default App;
