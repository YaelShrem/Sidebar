import {useState} from 'react';
import Box from '@mui/material/Box';
import {AppBar} from './AppBar';
import { Sidebar, DrawerHeader } from './Sidebar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export const App= () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open} style={{backgroundColor: 'green'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          temp
      </Typography>
      </Box>
    </Box>
  );
}
