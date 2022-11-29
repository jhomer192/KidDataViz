import React from 'react';
import './MathGameHard.css';
import useScript from "../useScript"

function  MathGameHard() {
    useScript('MathGameHard.js')
    useScript('https://cdn.anychart.com/releases/8.11.0/js/anychart-base.min.js')
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Math Game Hard</title>
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
        </>
    )
}

export default MathGameHard;