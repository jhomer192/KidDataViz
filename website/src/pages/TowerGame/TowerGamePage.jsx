import React from 'react';
import './TowerGame.css';
import GameBox from '../GameBox';
import useScript from "../useScript"

function TowerGame() {
    useScript('TowerGame.js')
    useScript('https://cdn.anychart.com/releases/8.11.0/js/anychart-base.min.js')
    return (
        <GameBox>
            <>
                <link rel="stylesheet" href="TowerGame.css" />
                <div id="myPlot" />
                <div id="questions" />
                <div id="instructions">
                    How to play
                    <br></br>
                    Click the screen to drop the block. Stack the tower as high as you can!</div>                
                <canvas id="myCanvas" width={800} height={600}/>
            </>
        </GameBox>


    )
}

export default TowerGame;