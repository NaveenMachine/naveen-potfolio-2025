import { useState } from 'react';
import { Drawer, IconButton, Typography, Box, List, ListItemButton, ListItemText, Button } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PropTypes from 'prop-types';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function DrawerComp({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Drawer Component */}
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(9,9,121,1)',
          },
        }}
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Typography variant="h6" component="div" sx={{ color: 'white', marginBottom: 2 }}>
            Naveen's Portfolio
          </Typography>
          <List>
            {links.map((link, index) => (
              <ListItemButton key={index} onClick={() => setOpen(false)}>
                <ListItemText sx={{ color: 'white', textAlign: 'center' }} primary={link} />
              </ListItemButton>
            ))}
            {/* Row of Icon Buttons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2, // Spacing between buttons
                marginTop: 2,
              }}
            >
              <IconButton sx={{ background: 'white' }}>
                <LinkedInIcon sx={{ color: 'black', '&:hover': { color: 'white' } }} />
              </IconButton>
              <IconButton sx={{ background: 'white' }}>
                <GitHubIcon sx={{ color: 'black', '&:hover': { color: 'white' } }} />
              </IconButton>
              <IconButton sx={{ background: 'white' }}>
                <InstagramIcon sx={{ color: 'black', '&:hover': { color: 'white' } }} />
              </IconButton>
            </Box>
            {/* Centered Contact Button */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 2,
              }}
            >
              <Button
                sx={{
                  background: 'white',
                  '&:hover': {
                    background: 'rgba(2,0,36,0.8)',
                    color: 'white',
                  },
                  color: 'black',
                }}
                variant="contained"
              >
                Contact
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>

      {/* IconButton to Open Drawer */}
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          marginLeft: 'auto',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
}

// Define prop types for the NavBar component
DrawerComp.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired, // Validate 'links' as a required array of strings
};
