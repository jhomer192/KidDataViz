import {BoxProps} from "@mui/material/Box";
import {Box} from "@mui/system";
import React from "react";

const GameBox = (props: BoxProps) => {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                minHeight: "550px",
                mt: '80pt',
                mb: '80pt',
                p: 2,
                backgroundColor: '#8C87CD',
                height: '100%',
                borderTop: "10px solid #FFFFFF",
                borderBottom: "10px solid #FFFFFF",
                ...sx,
            }}
            {...other}
        />
    );
}

export default GameBox;
