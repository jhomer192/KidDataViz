import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GameDisplay from '../componets/GameDisplay';



function Play() {
    return (
      
        <Grid container
            sx={{
                minHeight: "550px",
                padding: 2,
                mt: "80pt",
                mb: "40pt",
                backgroundColor: '#8C87CD',
                borderTop: "10px solid #FFFFFF",
                borderBottom: "10px solid #FFFFFF",
                display: "flex"}}>
           
            <Grid container sx={{display: "flex", flexWrap: "wrap"}}>
                <Grid item sx={{width: "400px", p:2}}>
                <a href={'/OceanGame'}> <GameDisplay name={"Ocean Game"}/>
                    <Typography>Ocean Game</Typography></a>

                </Grid>
                <Grid item sx={{width: "400px", p:2}}>
                <a href={'/TowerGame'}> <GameDisplay  name={"Tower Game"}/> </a>
                    <Typography>Tower Game</Typography>
                </Grid>
                <Grid item sx={{width: "400px", p:2}}>
                <a href={'/CatchGame'}> <GameDisplay name={"Catch Game"}/> </a>
                    <Typography>Catch Game</Typography>
                </Grid>
                <Grid item sx={{width: "400px", p:2}}>
                <a href={'/MathGame'}> <GameDisplay name={"Math Game"}/> </a>
                    <Typography>Math Game</Typography>
                </Grid>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/MathGame'}> <GameDisplay name={"Math Game"}/> </a>
                    <Typography>Math Game</Typography>
                </Grid>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/MathGame'}> <GameDisplay name={"Math Game"}/> </a>
                    <Typography>Math Game</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Play;