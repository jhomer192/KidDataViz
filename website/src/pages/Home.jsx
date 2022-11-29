import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Home() {
    return (
        <Box
            sx={{
                mt: '80pt',
                mb: 2,
                backgroundColor: '#8C87CD',
                height: '600px',
                borderTop: "10px solid #FFFFFF",
                borderBottom: "10px solid #FFFFFF",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}>
            <Box sx={{
                m: 4,
                backgroundColor: '#E66A85',
                height: '80%',
                width: '100%',
                border: "10px solid #FFFFFF",
                borderRadius: "10px"}}>
                <Box sx={{
                    m: 2 ,textAlign: 'center'}}>
                    <Typography sx={{fontSize: '32pt', fontFamily: "Comic Sans MS"}}>Welcome to KidDataViz!</Typography>
                    <Typography sx={{fontSize: '16pt', fontFamily: "Comic Sans MS"}}>Our mission is to teach kids about data visualization through fun games and activities.
                        To get started, explore the different games on our website!</Typography>
                    <Button sx={{ border: "2pt solid #FFFFFF", boxShadow: "none", backgroundColor: "#EF7F4F", fontSize: '16pt', fontFamily: "Comic Sans MS", m: 2}}
                            href="/play" variant="contained">Start Playing!</Button>
                </Box>
            </Box>

        </Box>
    );
}

export default Home;