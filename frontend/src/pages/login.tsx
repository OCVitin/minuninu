import * as React from 'react';

import { useState } from 'react';
import { useRouter } from 'next/router';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MuiLink from '@mui/material/Link'; // Renomeado para evitar conflito com o Link do Next.js
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Link from 'next/link'; // Importando o Link do Next.js


const Copyright: React.FC = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <MuiLink color="inherit" href="https://mui.com/">
        Isso aqui é um template do MaterialUi entao o link é pro site deles
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const defaultTheme = createTheme();

interface AutocompleteOption {
  label: string;
}

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [matricula, setMatricula] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (email && password) {
        router.push({ pathname: '/dashboard', query: { email: email.split('@')[0] } });
      } else {
        setError(true);
      }
    };



  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 , justifyItems: 'space-between'}}>
                <Grid container>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="matricula"
                        label="Numero de matricula"
                        name="matricula"
                        autoComplete="matricula"
                        autoFocus
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && (
                    <Typography color="red">
                        Escreva qualquer coisa no login, só pra simular uma conta.
                    </Typography>
                    )}
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Lembre de mim"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="/recover" >
                                <Typography variant="body2">
                                    {"Esqueci minha senha"}
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register">
                                < Typography variant="body2">
                                    {"Não tem uma conta? Cadastre-se"}
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
    
                <Copyright />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
