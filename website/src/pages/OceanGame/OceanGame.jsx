import React from 'react';
import './OceanGame.css';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import GameBox from "../GameBox"
import Slider from '@mui/material/Slider';



function OceanGame() {
    return (
                <GameBox>
                    <Typography sx={{ textTransform: 'none',fontSize: '32pt', m:2, fontFamily: 'Comic Sans MS'}} >
                        Ocean Game!
                    </Typography>

                    <Grid container
                          sx={{
                              minHeight: "550px",
                              padding: 2,
                              display: "flex", flexWrap: "wrap",}}>
                        <Grid container sx={{display: "flex", flexWrap: "wrap", padding: 2, mb:2,
                            backgroundColor: '#7CB65C',
                            border: "10px solid #FFFFFF",
                            borderRadius: "10px"}}>
                            <Typography sx={{textTransform: 'none',fontSize: '24pt', m:2, fontFamily: 'Comic Sans MS'}} >
                                Contents of the Ocean
                            </Typography>

                            <Slider
                                size="large"
                                defaultValue={20}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            />
                            <Slider
                                size="large"
                                defaultValue={20}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            />
                            <Slider
                                size="large"
                                defaultValue={20}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            />
                            <Slider
                                size="large"
                                defaultValue={20}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            />

                        </Grid>

                        <Grid container sx={{display: "flex", flexWrap: "wrap", padding: 2, mb:2,
                            backgroundColor: '#7CB65C',
                            border: "10px solid #FFFFFF",
                            borderRadius: "10px"}}>

                        </Grid>

                    </Grid>

                </GameBox>
    );
}

export default OceanGame;