
import './App.css';

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Play from "./pages/Play";
import About from "./pages/About";
import Help from "./pages/Help";


function App() {
  
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="home" element={<Home />} />
                  <Route path="learn" element={<Learn />} />
                  <Route path="play" element={<Play />} />
                  <Route path="about" element={<About />} />
                  <Route path="help" element={<Help />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
