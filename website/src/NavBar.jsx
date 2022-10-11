import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import data from "./data_logo.png";


function NavBar() {
    return (
        // Box to contain the whole nav bar (pink with white border)
        <Box
            sx={{
                mt: 3,
                mb: 3,
                borderTop: "10px solid #FFFFFF",
                borderBottom: "10px solid #FFFFFF",
                backgroundColor: "#E66A85",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}>
            <AppBar position="inherit"
                    sx={{width: "70%",
                        backgroundColor: '#7CB65C',
                        m: 3,
                        border: "10px solid #FFFFFF",
                        borderRadius: "10px",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Toolbar disableGutters sx={{alignItems: 'center', justifyContent: 'center'}}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/play"
                            sx={{
                                m: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Comic Sans MS',
                                fontWeight: 400,
                                letterSpacing: '0em',
                                textDecoration: 'none',
                                fontSize: '54px',
                                justifySelf: 'center'
                            }}
                        >
                            Play
                        </Typography>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/learn"
                            sx={{
                                m: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Comic Sans MS',
                                fontWeight: 400,
                                letterSpacing: '0em',
                                textDecoration: 'none',
                                fontSize: '54px',
                                justifySelf: 'center'
                            }}
                        >
                            Learn
                        </Typography>

                        <Tooltip position="static" title="Home"
                                 sx={{ml:1, mr:1, width: '10%', height: '10%', justifySelf: 'center'}}>
                            <IconButton href="/home ">
                                <Avatar alt="Logo" src={data} sx={{ width: '100%', height: '100%'}}/>
                            </IconButton>
                        </Tooltip>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/about"
                            sx={{
                                m: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Comic Sans MS',
                                fontWeight: 400,
                                letterSpacing: '0em',
                                textDecoration: 'none',
                                fontSize: '54px',
                                justifySelf: 'center'
                            }}
                        >
                            About
                        </Typography>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/help"
                            sx={{
                                m: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Comic Sans MS',
                                fontWeight: 400,
                                letterSpacing: '0em',
                                textDecoration: 'none',
                                fontSize: '54px',
                                justifySelf: 'center'
                            }}
                        >
                            Help
                        </Typography>
                    </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;