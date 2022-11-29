import React from 'react';
import './CakeGamePage.css'
import useScript from "../useScript"

function CakeGame() {
    useScript('Build/CakeGameDraft3.loader.js')
    useScript('CakeGame.js')
    return (

      <>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Unity WebGL Player | Cake Game</title>
        <canvas
          id="unity-canvas"
          width={1080}
          height={607}
          style={{ cursor: "default", width: 1080, height: 607, background: "#231F20" }}
        />
      </>
    )
}

export default CakeGame;