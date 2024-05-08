import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Copyright = (props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://mui.com/">
      A.K.
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

const handleIdInputChange = (setSignInId) => (event) => {
  setSignInId(event.target.value);
};

const handlePasswordInputChange = (setSignInPassword) => (event) => {
  setSignInPassword(event.target.value);
};

const SignInForm = ({ loadUser, onRouteChange }) => {
  const [signInId, setSignInId] = React.useState('');
  const [signInPassword, setSignInPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/signin', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: signInId, password: signInPassword }),
      });
      const user = await response.json();
      if (user.id) {
        loadUser(user);
        onRouteChange('/ClientHomePage');
      } else {
        // Handle invalid credentials
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      setError('Error: ', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Id"
        name="Id"
        autoComplete="Id"
        autoFocus
        value={signInId}
        onChange={handleIdInputChange(setSignInId)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={signInPassword}
        onChange={handlePasswordInputChange(setSignInPassword)}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
      >
        {loading? 'Loading...' : 'Sign In'}
      </Button>
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}
    </Box>
  );
};

const SignInSide = ({ loadUser, onRouteChange }) => {
  return (
    <ThemeProvider theme={theme}>
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
              t.palette.mode === 'light'? t.palette.grey[50] : t.palette.grey[900],
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
            <Avatar sx={{ m: 1, bgcolor: 'econdary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <SignInForm loadUser={loadUser} onRouteChange={onRouteChange} />
            <Grid container>
              <Grid item>
                <Link href="/RegisterPage" variant="body2" align='center'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignInSide;