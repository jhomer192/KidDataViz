//Source: https://mui.com/material-ui/react-app-bar/

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './NavBar.css'


export default function NavBar(props) {
    const { window } = props;
    //Prop for if mobile menu is open
    const [mobileOpen, setMobileOpen] = React.useState(false);

    //Toggles the drawer for mobile access
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    //Create drawer with menu buttons
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', background: '#7CB65C'}}>
            <Typography variant="h6" sx={{ my: 2, fontFamily: 'Comic Sans MS', color: 'white', fontSize: '24pt'}}>
                Data4Kids
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton href="/Home" sx={{ textAlign: 'center', color: 'white'}}>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton href="/Play" sx={{ textAlign: 'center', color: 'white' }}>
                        <ListItemText primary="Play" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton href="/About" sx={{ textAlign: 'center', color: 'white'}}>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton href="/Help" sx={{ textAlign: 'center', color: 'white' }}>
                        <ListItemText primary="Help" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="navigation" elevation={0} sx={{background: '#7CB65C', borderBottom: "10px solid #FFFFFF"}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: 'white', fontFamily: 'Comic Sans MS'} }}
                    >
                        Logo
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button href="/Home" sx={{width: '90px', textTransform: 'none', fontSize: '18pt',
                                    m:1, fontFamily: 'Comic Sans MS', color: 'white',
                                    border: "2pt solid #FFFFFF", background: '#E66A85'}}>
                            Home
                        </Button>
                        <Button href="/Play" sx={{width: '90px', textTransform: 'none', fontSize: '18pt',
                            m:1, fontFamily: 'Comic Sans MS', color: 'white',
                            border: "2pt solid #FFFFFF", background: '#B28CCD'}}>
                            Play
                        </Button>
                        <Button href="/About" sx={{width: '90px', textTransform: 'none', fontSize: '18pt',
                            m:1, fontFamily: 'Comic Sans MS', color: 'white',
                            border: "2pt solid #FFFFFF", background: '#8C87CD'}}>
                            About
                        </Button>
                        <Button href="/Help" sx={{width: '90px', textTransform: 'none',fontSize: '18pt',
                            m:1, fontFamily: 'Comic Sans MS', color: 'white',
                            border: "2pt solid #FFFFFF", background: '#EF7F4F'}}>
                            Help
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', background: '#7CB65C'},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}
