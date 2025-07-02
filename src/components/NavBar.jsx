import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
  Box,
  Button,
  IconButton,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import DrawerComp from './Drawer';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

export default function NavBar({ links }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = useState();

  return (
    <AppBar
      sx={{
        backgroundImage:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Button
              sx={{
                background: 'rgba(2,0,36,1)',
                '&:hover': { background: 'rgba(2,0,36,0.8)' },
                color: 'white',
              }}
            >
              <Typography component="div">NK</Typography>
            </Button>
            <DrawerComp links={links} />
          </>
        ) : (
          <>
            <Button
              sx={{
                background: 'rgba(2,0,36,1)',
                '&:hover': { background: 'rgba(2,0,36,0.8)' },
                color: 'white',
              }}
            >
              <Typography component="div">NK</Typography>
            </Button>

            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Tabs
                sx={{ marginLeft: 5 }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                // The onChange is less critical now, but we'll keep it
                onChange={(e, val) => setValue(val)}
              >
                {links.map((link, index) => (
                  <Tab
                    key={index}
                    label={link}
                    // This is the magic part:
                    component={Link} // 1. Render the Tab as a react-scroll Link
                    to={link.toLowerCase()} // 2. Set the target section ID
                    smooth={true}      // 3. Enable smooth scrolling
                    offset={-70}       // 4. Offset for your fixed navbar
                    duration={500}     // 5. Set the scroll speed
                  />
                ))}
              </Tabs>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* LinkedIn Button */}
                <IconButton
                    sx={{ background: 'rgba(2,0,36,1)' }}
                    component="a" // <--- PLACE THESE PROPS HERE on the IconButton
                    href="https://www.linkedin.com/in/naveen-kamath-434668287/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon sx={{ color: 'white', '&:hover': { color: 'black' } }} />
                </IconButton>

                {/* GitHub Button */}
                <IconButton
                    sx={{ background: 'rgba(2,0,36,1)' }}
                    component="a" // <--- PLACE THESE PROPS HERE on the IconButton
                    href="https://www.github.com/NaveenMachine"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon sx={{ color: 'white', '&:hover': { color: 'black' } }} />
                </IconButton>

                {/* Instagram Button */}
                <IconButton
                    sx={{ background: 'rgba(2,0,36,1)' }}
                    component="a" // <--- PLACE THESE PROPS HERE on the IconButton
                    href="https://www.instagram.com/naveenkamath_/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon sx={{ color: 'white', '&:hover': { color: 'black' } }} />
                </IconButton>

                <Button
                    sx={{ marginLeft: 5, background: 'rgba(2,0,36,1)' }}
                    variant="contained"
                    component={Link} // <--- ADD THIS
                    to="contact"     // <--- ADD THIS (assuming your contact section's ID is "contact")
                    smooth={true}    // <--- ADD THIS
                    offset={-70}     // <--- ADD THIS (adjust if your navbar height changes)
                    duration={500}   // <--- ADD THIS
                >
                    Contact
                </Button>
            </Box>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};
