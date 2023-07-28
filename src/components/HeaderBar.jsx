import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240; // Define the drawer width (should be the same as in the Drawer component)

const Header = styled(AppBar)({
  zIndex: 1200, // Set a valid z-index value, e.g., 1200
  width: '100%',
  background: '#fff',
  height: '70px',
  borderBottom: 'none',
  boxShadow: 'inset 0 -1px 0 0 #dadce0', // Corrected box-shadow property
});

const HeaderBar = ({ open }) => {
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          edge="start"
          sx={{
            marginRight: 5,
          }}
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

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        onClick={handleDrawer}
        edge="start"
        sx={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 1300, // Set a higher zIndex value to make the menu button visible above the HeaderBar
        }}
      >
        <MenuIcon />
      </IconButton>
      <HeaderBar open={open} />
      {/* Other content and components */}
    </>
  );
};

export default ParentComponent;
