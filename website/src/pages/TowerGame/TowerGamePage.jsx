import React from 'react';
import './TowerGame.css';
import './TowerGame.js';
import GameBox from '../GameBox';

function TowerGame() {
    return (
        <GameBox>
            <>
                <link rel="stylesheet" href="TowerGame.css" />
                <script src="TowerGame.js"></script>
                <div id="myPlot" />
                <div id="questions" />
                <canvas id="myCanvas" width={800} height={600}/>
            </>
        </GameBox>

    )
}

export default TowerGame;