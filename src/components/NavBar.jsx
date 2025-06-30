import { AppBar, Toolbar, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Tabs, Tab, Box, Button, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import DrawerComp from './Drawer';
import PropTypes from 'prop-types';

export default function NavBar({ links }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = useState();

  return (
    <>
      

      {/* AppBar */}
      <AppBar
        sx={{
          backgroundImage:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        }}
      >
        <Toolbar>
          {/* Conditional Rendering */}
          {isMatch ? (
            <>
              {/* Fixed Logo */}
      <Button
        sx={{
          background: 'rgba(2,0,36,1)', // Optional background
          '&:hover': {
            background: 'rgba(2,0,36,0.8)', // Hover effect
          },
          color: 'white', // Text color
        }}
      >
        <Typography>NK</Typography>
      </Button>
            
            <DrawerComp links={links} />
            </>
          ) : (
            <>
            {/* Fixed Logo */}
      <Button
        sx={{
          background: 'rgba(2,0,36,1)', // Optional background
          '&:hover': {
            background: 'rgba(2,0,36,0.8)', // Hover effect
          },
          color: 'white', // Text color
        }}
      >
        <Typography>NK</Typography>
      </Button>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between', // Spread items across the navbar
                alignItems: 'center',
              }}
            >
              {/* Center (Tabs) */}
              <Tabs
                sx={{ marginLeft: 5 }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                {links.map((link, index) => (
                  <Tab key={index} label={link} />
                ))}
              </Tabs>

              {/* Right side (Icons & Contact Button) */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2, // Spacing between buttons
                }}
              >
                <IconButton sx={{ background: 'rgba(2,0,36,1)' }}>
                  <LinkedInIcon sx={{ color: 'white', '&:hover':{color:'black'}  }} />
                </IconButton>
                <IconButton sx={{ background: 'rgba(2,0,36,1)' }}>
                  <GitHubIcon sx={{ color: 'white', '&:hover':{color:'black'} }} />
                </IconButton>
                <IconButton sx={{ background: 'rgba(2,0,36,1)' }}>
                  <InstagramIcon sx={{ color: 'white', '&:hover':{color:'black'} }} />
                </IconButton>
                <Button
                  sx={{ marginLeft: 5, background: 'rgba(2,0,36,1)' }}
                  variant="contained"
                >
                  Contact
                </Button>
              </Box>
            </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

// Define prop types for the NavBar component
NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired, // Validate 'links' as a required array of strings
};
