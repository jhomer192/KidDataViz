import { imageListClasses, useThemeProps } from "@mui/material";
import React from "react";
import "./GameDisplay.css";
import { Box } from "@mui/system";
import Typography from "@mui/material";
function GameDisplay(props)
{
    return (
        <Box>

        <img src={"./" + props.name+ ".png"}/>
        <h1>{props.name}</h1>
        </Box>
    );

}
export default GameDisplay;