import React from 'react';
import './CatchGame.css';
import useScript from "../useScript"
import { Box } from '@mui/system';

function CatchGame() {
    useScript('CatchGame.js')
    useScript('https://cdn.anychart.com/releases/8.11.0/js/anychart-base.min.js')
    return (
        <>
            <link type="text/css" rel="stylesheet" href="CatchGame.css" />
            <title>Catch</title>
            <table class="center">
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <h1 style={{ textAlign: "center" }}>Catch Falling Objects!</h1>
                        </td>
                        <td>
                            <h1>Score: </h1>
                        </td>
                        <td>
                            <h1 id="score">0</h1>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="rules">
                <p><strong>How to play:</strong></p>
                <p>Use the LEFT and RIGHT arrow keys to move the paddle.</p>
                <p>Catch as many blocks as you can!</p>
            </div>
            <div id="path" className="path">
                <div id="block" className="block" />
                <div id="brick" className="brick" />
                <div id="gameover" />
                <div id="chart" />
            </div>
            <br />
            <div className="box">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <button id="start">
                                    <b>Start Game</b>
                                </button>
                            </td>
                            <td>
                                <button id="reset">
                                    <b>Reset</b>
                                </button>
                            </td>
                            <td>
                                <button id="data">
                                    <b>Data</b>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CatchGame;