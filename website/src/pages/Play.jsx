import React from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

function Play() {
    return (
        <Box
            sx={{
                mt: 3,
                mb: 3,
                backgroundColor: '#8C87CD',
                height: '500px',
                borderTop: "10px solid #FFFFFF",
                borderBottom: "10px solid #FFFFFF",
                display: 'flex',
                justifyContent: 'center'}}>
            <Container sx={{
                backgroundColor: '#7CB65C',
                borderRight: "10px solid #FFFFFF",
                borderLeft: "10px solid #FFFFFF",
                }}>
                <Button sx={{
                    m: 1,
                    backgroundColor: "#EF7F4F",
                    fontSize: '16pt',
                    width: '100%',
                    height: '30%',
                    fontFamily: "Comic Sans MS"}}
                        href="/play" variant="contained">Category 1</Button>
                <Button sx={{
                    m: 1,
                    backgroundColor: "#EF7F4F",
                    fontSize: '16pt',
                    width: '100%',
                    height: '30%',
                    fontFamily: "Comic Sans MS"}}
                        href="/play" variant="contained">Category 2</Button>
                <Button sx={{
                    m: 1,
                    backgroundColor: "#EF7F4F",
                    fontSize: '16pt',
                    width: '100%',
                    height: '30%',
                    fontFamily: "Comic Sans MS"}}
                        href="/play" variant="contained">Category 3</Button>
            </Container>


        </Box>
    );
}

export default Play;