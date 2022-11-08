import React from 'react';
import './CatchGame.css';
import './CatchGame.js.js';
import GameBox from '../GameBox';

function CatchGame() {
    return (
        <GameBox>
            <>
                <link type="text/css" rel="stylesheet" href="CatchGame.css" />
                <title>Catch</title>
                <table>
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
                                    <button onclick="movedown()">
                                        <b>Start Game</b>
                                    </button>
                                </td>
                                <td>
                                    <button id="reset" onclick="reset()">
                                        <b>Reset</b>
                                    </button>
                                </td>
                                <td>
                                    <button id="data" onclick="getData()">
                                        <b>Data</b>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        </GameBox>

    )
}

export default TowerGame;