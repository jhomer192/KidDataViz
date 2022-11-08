
import {BoxProps} from "@mui/material/Box";
import {Box} from "@mui/system";
import React from "react";

const GameBox = (props: BoxProps) => {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: 'black',
                color: 'white',
                border: '2px solid',
                borderColor: 'white',
                p: 1,
                m: 1,
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

export default GameBox;
