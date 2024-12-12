import React from "react";
import { Toolbar, AppBar, Container, Typography, Avatar, Box, Button, Drawer } from '@mui/material';
import List from '@mui/material/List';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';
import PestControlRoundedIcon from '@mui/icons-material/PestControlRounded';
import BackpackRoundedIcon from '@mui/icons-material/BackpackRounded';
import { useNavigate } from 'react-router-dom';
import { Machinery } from "./Machinery";
import Transportation from "./Transportation";
import image from './image1.png';

export function Header() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  
  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };
  
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Machinery and Technology', 'Manures', 'Pesticides'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleNavigation(`/${text.toLowerCase()}`)}>
              <ListItemIcon>
                {(() => {
                  if (index === 0) {
                    return <AgricultureIcon />;
                  } 
                  else if (index === 1) {
                    return <BackpackRoundedIcon />;
                  } else {
                    return <PestControlRoundedIcon />;
                  }
                })()}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl" sx={{ height: '90px', alignContent: 'center' }}>
        <Toolbar disableGutters>
          <Avatar 
            alt="H" 
            src={image}  sx={{ mr: 2, width: 60, height: 60 }}
            />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 2,
              fontFamily: 'serif',
              fontSize: 30,
              flexGrow: 1,
              fontWeight: 700,
              color: 'rgb(145, 51, 112)',
              textDecoration: 'none',
            }}
            >
              AgriSmart
          </Typography>
          <Typography
            href="#app-bar-with-responsive-menu" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button sx={{ fontFamily: 'monospace', fontSize: 17 }} color='secondary' href='/'>Home</Button>
            <Button sx={{ fontFamily: 'monospace', fontSize: 17 }} onClick={toggleDrawer(true)} color='secondary' >Information</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>{DrawerList}</Drawer>
            <Button sx={{ fontFamily: 'monospace', fontSize: 17 }} color='secondary' href="weather">Weather</Button>
            <Button sx={{ fontFamily: 'monospace', fontSize: 17 }} color='secondary' href="marketprice">MarketPrice</Button>
            <Button sx={{ fontFamily: 'monospace', fontSize: 17 }} color='secondary' href="transport">Transportation</Button>
            <Button sx={{ fontFamily: 'monospace', fontSize: 17 }} color='secondary' href="recognition">ImageRecognition</Button>
            <Button sx={{ fontFamily: 'monospace', fontSize: 17 }} color='secondary' href='about'>About</Button>
            <Button sx={{ fontFamily: 'monospace', fontSize: 17 }} color='secondary' href="contact">Contact</Button>
          </Typography>
          <Typography sx={{ alignItems: 'end' }}>
            <Button variant='contained' color='secondary' href="getintouch">Get in touch</Button>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}