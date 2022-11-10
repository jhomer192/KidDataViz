import React from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";



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
                    <Button href={'/OceanGame'} sx={{color: 'white', backgroundColor: 'black'}}>Ocean Game</Button>
                </Grid>
                {/* <Grid item xs={4}>
                    <Button href={'/TowerGame'} sx={{color: 'white', backgroundColor: 'black'}}>Game2</Button>
                </Grid> */}
                <Grid item xs={4}>
                    <Button sx={{color: 'white', backgroundColor: 'black'}}>Game3</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button sx={{color: 'white', backgroundColor: 'black'}}>Game4</Button>
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
                <Grid item xs={4}>
                    <Button sx={{color: 'white', backgroundColor: 'black'}}>Game8</Button>
                </Grid>                <Grid item xs={4}>
                <Button sx={{color: 'white', backgroundColor: 'black'}}>Game9</Button>
            </Grid>


            </Grid>
        </Box>
    );
}

export default Play;