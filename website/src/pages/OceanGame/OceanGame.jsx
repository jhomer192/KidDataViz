import React, { useState } from 'react';
import './OceanGame.css';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import GameBox from "../GameBox"
import Slider from '@mui/material/Slider';
import kelpPic from './OceanGamePictures/kelp.png'
import coralPic from './OceanGamePictures/coral.png'
import bluePic from './OceanGamePictures/bluefish.png'
import redPic from './OceanGamePictures/redfish.png'



function OceanGame() {
    const [curBlueFish, setCurBlueFish] = useState(5);
    const [curRedFish, setCurRedFish] = useState(5);
    const [curKelp, setCurKelp] = useState(5);
    const [curCoral, setCurCoral] = useState(5);
    var AddedBlueFish = Array.from(Array(curBlueFish).keys()).map((d) =>  <img src={bluePic} alt={bluePic}/>);
    var AddedRedFish =   Array.from(Array(curRedFish).keys()).map((d) =>  <img src={redPic} alt={redPic}/>);
    var AddedKelp =  Array.from(Array(curKelp).keys()).map((d) =>  <img src={kelpPic} alt={kelpPic}/>);
    var AddedCoral = Array.from(Array(curCoral).keys()).map((d) =>  <img src={coralPic} alt={coralPic}/>);


    return (
        <GameBox>
            <Typography sx={{ textTransform: 'none', fontSize: '32pt', m: 2, fontFamily: 'Comic Sans MS' }} >
                Ocean Game!
            </Typography>


            <Grid container
                sx={{
                    minHeight: "550px",
                    padding: 2,
                    display: "flex", flexWrap: "wrap",
                }}>
                 <Typography sx={{ textTransform: 'none', fontSize: '24pt', m: 2, fontFamily: 'Comic Sans MS' }} >
                        Contents of the Ocean 
                    </Typography>
                <Grid container sx={{
                    display: "flex", flexWrap: "wrap", padding: 2, mb: 2,
                    backgroundColor: '#7CB65C',
                    border: "10px solid #FFFFFF",
                    borderRadius: "10px"
                }}>
                
                    
                    <Typography>Blue Fish</Typography>
                    <Slider
                        label="Blue Fish"
                        size="large"
                        defaultValue={5}
                        max ={39}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => {setCurBlueFish(e.target.value)}}
                       
                    />
                    <Typography>Red Fish</Typography>
                    <Slider
                        size="large"
                        defaultValue={5}
                        max ={39}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => {setCurRedFish(e.target.value)}}
                        
                    />
                    <Typography>Coral</Typography>
                    <Slider
                        size="large"
                        max ={39}
                        defaultValue={5}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => {setCurCoral(e.target.value)}}
                        
                    />
                    <Typography>Kelp</Typography>
                    <Slider
                        size="large"
                        max ={39}
                        defaultValue={5}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => {setCurKelp(e.target.value)}}
                        
                    />

                </Grid>

                <Grid container sx={{
                    display: "flex", flexWrap: "wrap", padding: 2, mb: 2,
                    backgroundColor: '#7CB65C',
                    border: "10px solid #FFFFFF",
                    borderRadius: "10px"
                }}>

<Grid container sx={{display: "flex", flexWrap: "wrap", padding: 2, mb:2,
                backgroundColor: '#006994',
                border: "10px solid #FFFFFF",
                borderRadius: "10px"}}>
                <Grid item sx={{width: "2000px", p:1}}>
                {AddedBlueFish}
                </Grid>
                <Grid item sx={{width: "2000px", p:1}}>
                {AddedRedFish}
                </Grid>
                <Grid item sx={{width: "2000px", p:1}}>
                {AddedCoral}
                </Grid>
                <Grid item sx={{width: "2000px", p:1}}>
                {AddedKelp}
                </Grid>
                </Grid>
                </Grid>
</Grid>
           

        </GameBox>
    );
}

export default OceanGame;