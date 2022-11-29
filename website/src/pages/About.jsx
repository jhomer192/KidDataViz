import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function About() {
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
                    <Typography sx={{fontSize: '32pt', fontFamily: "Comic Sans MS"}}>Get to know the project!</Typography>
                    <Typography sx={{fontSize: '16pt', fontFamily: "Comic Sans MS"}}>More info coming soon.</Typography>
                </Box>
            </Box>

        </Box>
    );
}

export default About;