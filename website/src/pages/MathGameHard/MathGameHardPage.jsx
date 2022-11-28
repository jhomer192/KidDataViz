import React from 'react';
import './MathGameHard.css';
import './MathGameHard.js';
import GameBox from '../GameBox';

function  MathGameHard() {
    return (
        <GameBox>
            <>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Math Game Hard</title>
                <script src="https://cdn.anychart.com/releases/8.0.0/js/anychart-base.min.js"></script>
                <link href="https://fonts.googleapis.com/css?family=Cantarell:i|Droid+Serif:700" rel="stylesheet"/>
                <link
                    href="https://fonts.googleapis.com/css?family=Cantarell:i|Droid+Serif:700"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="MathGameHard.css" />
                <link rel="stylesheet" href="MathGameHard.css" />
                <div className="container">
                    <h3>Fill in the blank with the correct number or operator.</h3>
                    <label id="qLeft">questions left here:</label>
                    <div id="question" />
                    <button id="submit-btn">Submit</button>
                    <p id="error-msg">Error</p>
                </div>
                <div id="container" className="controls-container">
                    <p id="result" />
                    <button id="start-btn">Start Game</button>
                    <button id="dataviz-btn">Show Data Viz</button>
                </div>
                <script src="MathGameHard.js"></script>
            </>
        </GameBox>
    )
}

export default MathGameHard;