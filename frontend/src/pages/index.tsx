import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Link from 'next/link'; // Importando o Link do Next.js

const defaultTheme = createTheme();

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Box>
            <Typography component="h1" variant="h1" gutterBottom sx={{ fontWeight: 'bold'}}>
              Bem-vindo!
            </Typography>
            <Typography component="h5" variant="h5" gutterBottom sx={{ fontWeight: 'thin'}}>
              Página Inicial
            </Typography>
            <Link href="/login" passHref>
              <Button variant="contained" color="primary" size="large">
                LOGIN
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
