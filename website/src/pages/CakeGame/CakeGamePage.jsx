import React from 'react';
import './CakeGamePage.css';
import useScript from "../useScript"


function CakeGame() {
    useScript('CakeGame.js')
    return (
        <>
  <meta charSet="utf-8" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Unity WebGL Player | Cake Game</title>
  <link rel="shortcut icon" href="TemplateData/favicon.ico" />
  <link rel="stylesheet" href="TemplateData/style.css" />
  <div id="unity-container" className="unity-desktop">
    <canvas id="unity-canvas" width={960} height={600} />
    <div id="unity-loading-bar">
      <div id="unity-logo" />
      <div id="unity-progress-bar-empty">
        <div id="unity-progress-bar-full" />
      </div>
    </div>
    <div id="unity-warning"> </div>
    <div id="unity-footer">
      <div id="unity-webgl-logo" />
      <div id="unity-fullscreen-button" />
      <div id="unity-build-title">Cake Game</div>
    </div>
  </div>
</>
    )
}

export default CakeGame;