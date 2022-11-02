import React, { useState } from 'react';
import {
  Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';

export default function DrawerComponent(): JSX.Element {
  const [open, setOpen] = useState(false);
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const navigate = useNavigate();
  return (
    <Box>
      <IconButton>
        <MenuIcon onClick={handleDrawerOpen} />
      </IconButton>
      <Drawer
        anchor="left"
        variant="temporary"
        open={open}
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
          },
        }}
      >
        <IconButton sx={{ width: 40, margin: 1 }} onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <List sx={{ width: '200px' }}>
          {['Inicio', 'Produtos', 'Pedidos'].map((text) => (
            <ListItemButton key={text}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
          <ListItemButton onClick={() => navigate('/customers')}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Clientes" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}
