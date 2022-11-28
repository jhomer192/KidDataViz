import React from 'react';
import './OceanGame.css';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import GameBox from "../GameBox"
import Slider from '@mui/material/Slider';

var curBlueFish = 20;
var curRedFish = 20;
var curKelp = 20;
var curCoral = 20;
var init = false;
function OceanGame() {
    function firstOpen() {
        if (!init) {
            //make 20 of everything
            init = true;
        }
    }
    firstOpen();
    function handleChange(e) {
        switch (e.target.id) {
            case "blueSlide":
                if (curBlueFish < e.target.value)
                {
                    //make targ-curFish
                }
                else
                {
                    //make cur-targ
                }
                curBlueFish = e.target.value;
                break;
            case "redSlide":
                break;
            case "kelpSlide":
                break;
            case "coralSlide":
                break;
        }
    }

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
                <Grid container sx={{
                    display: "flex", flexWrap: "wrap", padding: 2, mb: 2,
                    backgroundColor: '#7CB65C',
                    border: "10px solid #FFFFFF",
                    borderRadius: "10px"
                }}>
                    <Typography sx={{ textTransform: 'none', fontSize: '24pt', m: 2, fontFamily: 'Comic Sans MS' }} >
                        Contents of the Ocean
                    </Typography>
                    <br/>
                    <Typography>Blue Fish</Typography>
                    <Slider
                     id={"blueSlide"}
                        label="Blue Fish"
                        size="large"
                        defaultValue={20}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={handleChange}
                       
                    />
                    <Typography>Red Fish</Typography>
                    <Slider
                    id={"redSlide"}
                        size="large"
                        defaultValue={20}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={handleChange}
                        
                    />
                    <Typography>Kelp</Typography>
                    <Slider
                    id={"kelpSlide"}
                        size="large"
                        defaultValue={20}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={handleChange}
                        
                    />
                    <Typography>Coral</Typography>
                    <Slider
                    id={"coralSlide"}
                        size="large"
                        defaultValue={20}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={handleChange}
                        
                    />

                </Grid>

                <Grid container sx={{
                    display: "flex", flexWrap: "wrap", padding: 2, mb: 2,
                    backgroundColor: '#7CB65C',
                    border: "10px solid #FFFFFF",
                    borderRadius: "10px"
                }}>

                </Grid>

            </Grid>

        </GameBox>
    );
}

export default OceanGame;