import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Grid
      container
      component="footer"
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: '100%',
        backgroundColor: '#121212',
        color: 'white',
        py: 3,
        px: 2,
        textAlign: 'center',
      }}
    >
      {/* Follow Me Heading */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Follow Me
      </Typography>

      {/* Social Icons */}
      <Grid item>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <IconButton
              component="a"
              href="https://www.instagram.com/naveenkamath_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              sx={{ color: 'white' }}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component="a"
              href="https://github.com/NaveenMachine"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{ color: 'white' }}
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/naveen-kamath-434668287/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{ color: 'white' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Typography variant="body2" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Naveen Kamath. All rights reserved.
      </Typography>
    </Grid>
  );
}
