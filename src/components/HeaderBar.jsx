import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

const drawerWidth = 240; // Define the drawer width (should be the same as in the Drawer component)

const Header = styled(AppBar)({
  zIndex: 1200, // Set a valid z-index value, e.g., 1200
  width: '100%',
  background: '#fff',
  height: '70px',
  borderBottom: 'none',
  boxShadow: 'inset 0 -1px 0 0 #dadce0', // Corrected box-shadow property
});

const HeaderBar = ({ handleDrawerToggle }) => { // Pass the handleDrawerToggle function as a prop
  return (
    <Header>
      <Toolbar>
        <IconButton
          edge="start"
          sx={{
            marginRight: 5,
          }}
          onClick={handleDrawerToggle} // Call the handleDrawerToggle function when the button is clicked
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </Header>
  );
};

const ParentComponent = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        onClick={handleDrawerToggle} // Use handleDrawerToggle function instead
        edge="start"
        sx={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 1300,
        }}
      >
        <MenuIcon />
      </IconButton>
      <HeaderBar handleDrawerToggle={handleDrawerToggle} /> {/* Pass the handleDrawerToggle function as a prop */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open} // Set the 'open' state to control the drawer open/close state
        onClick={handleDrawerToggle} // Close the drawer when clicking outside of it
      >
        <div style={{ width: drawerWidth }}> {/* Set the width of the drawer */}
          {/* Drawer content */}
        </div>
      </Drawer>
      {/* Other content and components */}
    </>
  );
};

export default ParentComponent;
