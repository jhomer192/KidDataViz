import React from 'react';
import useScript from "../useScript"

function LegoGame() {
    useScript('Build/LegoGameDraft3.loader.js')
    useScript('LegoGame.js')
    return (

    <>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Unity WebGL Player | Cake Game</title>
        <canvas
          id="unity-canvas"
          width={1080}
          height={607}
          style={{ width: 1080, height: 607, background: "#231F20" }}
        />
    </>
      
    )
}

export default LegoGame;