import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const pages = ['Products', 'Pricing', 'Blog'];

export default function NavBar() {
  return (
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
                      borderRadius: "10px"}}>
              <Container maxWidth="xl" sx={{display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'}}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Cherry Bomb One',
                            fontWeight: 400,
                            letterSpacing: '0em',
                            textDecoration: 'none',
                            fontSize: '64px',
                            lineHeight: '93px',
                            textAlign: 'center'
                        }}
                    >
                        Play
                    </Typography>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Cherry Bomb One',
                            fontWeight: 400,
                            letterSpacing: '0em',
                            textDecoration: 'none',
                            fontSize: '64px',
                            lineHeight: '93px',
                            textAlign: 'center'
                        }}
                    >
                        Learn
                    </Typography>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Cherry Bomb One',
                            fontWeight: 400,
                            letterSpacing: '0em',
                            textDecoration: 'none',
                            fontSize: '64px',
                            lineHeight: '93px',
                            textAlign: 'center'
                        }}
                    >
                        About
                    </Typography>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Cherry Bomb One',
                            fontWeight: 400,
                            letterSpacing: '0em',
                            textDecoration: 'none',
                            fontSize: '64px',
                            lineHeight: '93px',
                            textAlign: 'center'
                        }}
                    >
                        Help
                    </Typography>
                </Toolbar>
              </Container>
          </AppBar>
        </Box>
  );
}
