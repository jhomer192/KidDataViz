import React from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import GameDisplay from '../componets/GameDisplay';
import { Typography } from '@mui/material';



function Play() {
    return (


        <Grid container
            sx={{
                mt: "80pt",
                mb: "40pt",
                height:"200pt",
                backgroundColor: '#8C87CD',
                borderTop: "10px solid #FFFFFF",
                borderBottom: "10px solid #FFFFFF",
                display: "flex"}}>

            <Grid container sx={{display: "flex", flexWrap: "wrap", padding: 2, mb:2,
                backgroundColor: '#7CB65C',
                border: "10px solid #FFFFFF",
                borderRadius: "10px"}}>
                <Typography sx={{p:1, fontSize: '48pt', fontFamily: 'Comic Sans MS'}}>Grades 1-2</Typography>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/CakeGame'}> <GameDisplay name={"Cake Game"}/> </a>
                    <Typography>Cake Game</Typography>
                </Grid>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/OceanGame'}> <GameDisplay name={"Ocean Game"}/></a>
                    <Typography>Ocean Game</Typography>
                </Grid>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/LegoGame'}> <GameDisplay name={"Lego Game"}/></a>
                    <Typography>Lego Game</Typography>
                </Grid>

            </Grid>


            <Grid container sx={{display: "flex", flexWrap: "wrap", padding: 2, mb:2,
                backgroundColor: '#7CB65C',
                border: "10px solid #FFFFFF",
                borderRadius: "10px"}}>
                <Typography sx={{p:1, fontSize: '48pt', fontFamily: 'Comic Sans MS'}}>Grades 3-4</Typography>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/CatchGame'}> <GameDisplay name={"Catch Game"}/> </a>
                    <Typography>Catch Game</Typography>
                </Grid>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/MathGame'}> <GameDisplay name={"Math Game"}/> </a>
                    <Typography>Math Game</Typography>
                </Grid>

            </Grid>


            <Grid container sx={{display: "flex", flexWrap: "wrap", padding: 2, mb:2,
                backgroundColor: '#7CB65C',
                border: "10px solid #FFFFFF",
                borderRadius: "10px"}}>
                <Typography sx={{p:1, fontSize: '48pt', fontFamily: 'Comic Sans MS'}}>Grades 5+</Typography>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/TowerGame'}> <GameDisplay  name={"Tower Game"}/> </a>
                    <Typography>Tower Game</Typography>
                </Grid>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/MathGameHard'}> <GameDisplay name={"Math Game Hard"}/> </a>
                    <Typography>Math Game Hard</Typography>
                </Grid>
            </Grid>


        </Grid>





    );
}

export default Play;