import React from 'react';
import Grid from "@mui/material/Grid";
import GameDisplay from '../componets/GameDisplay';
import { Typography } from '@mui/material';



function Play() {
    return (


        <Grid container
            sx={{
                mt: "80pt",
                mb: "40pt",
                padding: 2,
                display: "flex"}}>

            <Grid container sx={{display: "flex", flexWrap: "wrap", padding: 2, mb:2,
                backgroundColor: '#7CB65C',
                border: "10px solid #FFFFFF",
                borderRadius: "10px"}}>
                <Typography sx={{p:1, fontSize: '48pt', fontFamily: 'Comic Sans MS'}}>Grades 1-2</Typography>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/CakeGame'}> <GameDisplay name={"Cake Game"}/> </a>
                </Grid>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/LegoGame'}> <GameDisplay name={"Lego Game"}/></a>
                </Grid>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/OceanGame'}> <GameDisplay name={"Ocean Game"}/> </a>
                </Grid>

            </Grid>


            <Grid container sx={{display: "flex", flexWrap: "wrap", padding: 2, mb:2,
                backgroundColor: '#7CB65C',
                border: "10px solid #FFFFFF",
                borderRadius: "10px"}}>
                <Typography sx={{p:1, fontSize: '48pt', fontFamily: 'Comic Sans MS'}}>Grades 3-4</Typography>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/CatchGame'}> <GameDisplay name={"Catch Game"}/> </a>
                </Grid>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/MathGame'}> <GameDisplay name={"Math Game"}/> </a>
                </Grid>

            </Grid>


            <Grid container sx={{display: "flex", flexWrap: "wrap", padding: 2, mb:2,
                backgroundColor: '#7CB65C',
                border: "10px solid #FFFFFF",
                borderRadius: "10px"}}>
                <Typography sx={{p:1, fontSize: '48pt', fontFamily: 'Comic Sans MS'}}>Grades 5+</Typography>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/TowerGame'}> <GameDisplay  name={"Tower Game"}/> </a>
                </Grid>
                <Grid item sx={{width: "400px", p:2}}>
                    <a href={'/MathGameHard'}> <GameDisplay name={"Math Game Hard"}/> </a>
                </Grid>
            </Grid>


        </Grid>





    );
}

export default Play;