import React from 'react';
import './MathGame.css';
import GameBox from '../GameBox';
import useScript from "../useScript"

function MathGame() {
    useScript('MathGame.js')
    useScript('https://cdn.anychart.com/releases/8.11.0/js/anychart-base.min.js')
    return (
            <>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Math Game</title>
                {/* Data Viz Chart */}
                {/* Google Font */}
                <link
                    href="https://fonts.googleapis.com/css?family=Cantarell:i|Droid+Serif:700"
                    rel="stylesheet"
                />
                {/* Stylesheet */}
                <link rel="stylesheet" href="MathGame.css" />
                <div className="container">
                    <h3>Fill in the blank with the correct number.</h3>
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
                {/* Script */}
            </>
    )
}

export default MathGame;