
import './App.css';

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Play from "./pages/Play";
import About from "./pages/About";
import Help from "./pages/Help";
import OceanGame from "./pages/OceanGame/OceanGame";
// import TowerGame from "./pages/TowerGame/TowerGamePage";



function App() {
  
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="home" element={<Home />} />
                  <Route path="play" element={<Play />} />
                  <Route path="about" element={<About />} />
                  <Route path="help" element={<Help />} />
                  <Route path="oceangame" element={<OceanGame />} />
                  {/* <Route path="towergame" element={<TowerGame />} /> */}
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
