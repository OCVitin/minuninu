import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link'; // Importando o Link do Next.js
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { postData } from '../services/api';

import { useRouter } from 'next/router';
import { useState } from 'react';

const defaultTheme = createTheme();

const Register: React.FC = () => {
  const param = [
    { label: 'Ciência da Computação', id: 1 },
    { label: 'Engenharia da Computação', id: 2 },
    { label: 'Uma Área Que Dá Futuro', id: 3 },
  ];
  
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [area, setArea] = useState('');
  const [funcao, setFuncao] = useState('');
  const [estande, setEstande] = useState('');

  const [accountCreated, setAccountCreated] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      const data = new FormData(event.currentTarget);
      const endpoint = funcao === '0' ? 'alunos' : 'professores';
      const estandeId = estande ? Number(estande) : null;
      if (funcao === '0') {
        const curso = area;
        try {
          await postRequest(endpoint, {
            nome,
            matricula,
            curso,
            estandeId,
          });
          setAccountCreated(true);
        } catch (error) {
          console.error(error);
        }
      }
      else {
        try{
          await postRequest(endpoint, {
            nome,
            matricula,
            area,
          });
          setAccountCreated(true);
        } catch (error) {
          console.error(error);
        }
      }

    } catch (error) {
      console.error(error);
    }
  };
  
  const postRequest = async (endpoint: string, requestData: any) => {
    try {
      const response = await postData(endpoint, requestData);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error in postRequest:', error);
      throw error;
    }
  };
      

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
            backgroundColor: t =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '8px',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <PersonAddIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Criar Conta
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="nome"
                label="Nome"
                name="nome"
                autoComplete="nome"
                autoFocus
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={param}
                    renderInput={(param) => <TextField {...param} label="Área" />}
                    onChange={(e, value) => {
                      console.log(value);
                      setArea(value ? value.label : '');
                    }}
                  />
                </Grid>
                <Grid item>
                  <Select
                    labelId="funcao"
                    id="funcao"
                    value={funcao}
                    label="Funcao"
                    onChange={(e) => setFuncao(e.target.value)}
                  >
                    <MenuItem value={"0"}>Aluno</MenuItem>
                    <MenuItem value={"1"}>Professor</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="baseline">
                <Grid item xs={12} md={6}>
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
                </Grid>
                <Grid item xs={12} md={6}>
                  {/* render textfield if funcao is == 0 */}
                  {funcao == "0" && (
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="estande"
                    label="Numero de Estande"
                    type="estande"
                    id="estande"
                    autoComplete="current-estande"
                    value={estande}
                    onChange={(e) => setEstande(e.target.value)}
                  />
                  )}
                  
                </Grid>
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="new-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirmar Senha"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Criar Conta
              </Button>
              {accountCreated && (
                <Typography color="green">
                  Conta criada com sucesso!
                </Typography>
              )}
            </Box>
            <Link href="/login" passHref>
              <Typography variant="body2" sx={{ cursor: 'pointer', mt: 2 }}>
                Já tem uma conta? Faça login
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Register;
