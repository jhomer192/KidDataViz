import React from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import GameDisplay from '../componets/GameDisplay';



function Play() {
    return (
      
        <Box
            sx={{
                mt: "80pt",
                mb: "40pt",
                height:"200pt",
                backgroundColor: '#8C87CD',
                borderTop: "10px solid #FFFFFF",
                borderBottom: "10px solid #FFFFFF"}}>
           
            <Grid container rowSpacing={3}>
                <Grid item xs={4}>
                <a href={'/OceanGame'}> <GameDisplay name={"Ocean Game"}/> </a>
                </Grid>
                <Grid item xs={4}>
                <a href={'/TowerGame'}> <GameDisplay name={"Tower Game"}/> </a>
                </Grid>
                <Grid item xs={4}>
                <a href={'/CatchGame'}> <GameDisplay name={"Catch Game"}/> </a>
                </Grid>
                <Grid item xs={4}>
                <a href={'/MathGame'}> <GameDisplay name={"Math Game"}/> </a>
                </Grid>

                <Grid item xs={4}>
                    <Button sx={{color: 'white', backgroundColor: 'black'}}>Game5</Button>
                </Grid>
                <Grid item xs={4}>
                <Button sx={{color: 'white', backgroundColor: 'black'}}>Game6</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button sx={{color: 'white', backgroundColor: 'black'}}>Game7</Button>
                </Grid>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/CakeGame'}> <GameDisplay name={"Cake Game"}/> </a>
                    <Typography>Cake Game</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Play;