import { imageListClasses, useThemeProps } from "@mui/material";
import React from "react";
import "./GameDisplay.css";

function GameDisplay(props)
{
    return (
        <img src={"./" + props.name+ ".png"}/>
    );
}
export default GameDisplay;