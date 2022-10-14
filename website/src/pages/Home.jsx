import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Home() {
    return (
        <Box
            sx={{
                mt: 3,
                mb: 3,
                backgroundColor: '#8C87CD',
                height: '80%',
                borderTop: "10px solid #FFFFFF",
                borderBottom: "10px solid #FFFFFF",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}>
            <Box sx={{
                m: 4,
                backgroundColor: '#E66A85',
                height: '80%',
                width: '60%',
                border: "10px solid #FFFFFF",
                borderRadius: "10px"}}>
                <Box sx={{
                    m: 2 ,textAlign: 'center'}}>
                    <h1>Welcome to Data4Kids!</h1>
                    <p>Our mission is to teach kids about data visualization through fun games and activities.
                        To get started, explore the different games on our website!</p>
                    <Button sx={{backgroundColor: "#EF7F4F", fontSize: '16pt', fontFamily: "Comic Sans MS", m: 2}}
                            href="/play" variant="contained">Start Playing!</Button>
                </Box>
            </Box>

        </Box>
    );
}

export default Home;