import React from 'react';
import Box from '@mui/material/Box';
import './OceanGame.css';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GameBox from "../GameBox";



function OceanGame() {
    return (
        <Box
            sx={{
                mt: "80pt",
                mb: "40pt",
                height: "400px",
                backgroundColor: '#8C87CD',
                borderTop: "10px solid #FFFFFF",
                borderBottom: "10px solid #FFFFFF",
                display: 'flex',
                alignContent: 'center'}}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 10fr)' }}>
                <GameBox>
                    <Typography sx={{ textTransform: 'none',fontSize: '16pt', m:2, fontFamily: 'Comic Sans MS'}} >
                        Ocean Game!
                    </Typography>
                </GameBox>
                <GameBox>
                    <Button sx={{textTransform: 'none', fontSize: '16pt',
                        m:2, fontFamily: 'Comic Sans MS', color: 'white',
                        border: "2pt solid #FFFFFF", background: '#8C87CD'}}>
                        New
                    </Button>
                    <Button sx={{textTransform: 'none', fontSize: '16pt',
                        m:2, fontFamily: 'Comic Sans MS', color: 'white',
                        border: "2pt solid #FFFFFF", background: '#8C87CD'}}>
                        Save
                    </Button>
                    <Button sx={{textTransform: 'none', fontSize: '16pt',
                        m:2, fontFamily: 'Comic Sans MS', color: 'white',
                        border: "2pt solid #FFFFFF", background: '#8C87CD'}}>
                        Help
                    </Button>
                </GameBox>
                <GameBox></GameBox>
            </Box>
        </Box>
    );
}

export default OceanGame;