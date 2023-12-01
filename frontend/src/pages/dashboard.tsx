// pages/dashboard.tsx
import * as React from 'react';
import { AppBar, Box, Grid, Paper, Toolbar, Typography, CssBaseline, Divider, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NextPage } from 'next';
import { fetchData } from '../services/api';

const defaultTheme = createTheme();

export async function getServerSideProps(context: { query: { userData: string; }; }) {
  const userData: { nome: string } = JSON.parse(context.query.userData);

  return {
    props: {
      userData,
    },
  };
}

const Dashboard: NextPage<{ userData: { nome: string } }> = (props) => {
  const { userData } = props;


  const [selectEstandeId, setSelectEstandeId] = React.useState('');
  const [estandeData, setEstandeData] = React.useState<any | null>(null);

  const fetchEstande = async () => {
    try {
      if (selectEstandeId) {
        const data = await fetchData("estandes", selectEstandeId);
        setEstandeData(data);
      } else {
        console.log('No ID selected');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="static" sx={{ marginBottom: 2, backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)', minHeight: 200, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center' }}>
        <Toolbar>
          <Typography variant="h4" color="inherit" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Painel de Controle
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
          Seja bem-vindo, @{userData.nome}
        </Typography>
        <Divider sx={{ marginY: 4 }} />
        
        {/* Button and input for selecting an ID */}
        <Grid container spacing={3} justifyContent="center" alignItems="baseline">
          <TextField
            label="Enter ID"
            type="number"
            variant="outlined"
            margin="normal"
            value={selectEstandeId || ''}
            onChange={(e) => setSelectEstandeId(e.target.value)}
          />
          <Grid item>
            <Button variant="contained" size="medium" onClick={fetchEstande}>
              Id do Estande
            </Button>
          </Grid>
        </Grid>
        {estandeData && (
          <TableContainer component={Paper} sx={{ marginTop: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {Object.keys(estandeData).map((key) => (
                    <TableCell key={key}>{key}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  {/* map the rows of these tables based on the values found on each key */}
                  {Object.values(estandeData).map((value, index) => (
                    <TableCell key={index}>{value as React.ReactNode}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* <Grid container spacing={3} justifyContent="center">
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Typography variant="h6">Caixa {index + 1}</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid> */}
        
        <Box component="footer" sx={{ marginTop: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {'Direitos Autorais © '}
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{ color: 'inherit' }}>
              Não clique aqui, sob hipótese alguma! ( ͡° ͜ʖ ͡°)
            </a>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>

      </Box>
    </ThemeProvider>
  );
};



export default Dashboard;