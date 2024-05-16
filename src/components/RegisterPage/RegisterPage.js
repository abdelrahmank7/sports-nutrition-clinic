import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'; // Icon for the avatar
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const theme = createTheme();

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [sport, setSport] = useState('');
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      message.error('Passwords do not match!');
      return;
    }
    // Here you would typically handle the form submission to your backend
    // For example, sending a POST request with the form data
    // This is a placeholder for your actual submission logic
    console.log({
      email,
      password, // In a real app, make sure to hash the password before sending it to your server
      height,
      weight,
      medicalHistory,
      sport,
    });
    message.success('User registered successfully!');
    history.push('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
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
              <SportsSoccerIcon /> {/* Icon added here */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {/* New fields for sports nutrition clinic */}
              <TextField
                margin="normal"
                required
                fullWidth
                label="Height (cm)"
                name="height"
                autoComplete="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Weight (kg)"
                name="weight"
                autoComplete="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Medical History"
                name="medicalHistory"
                autoComplete="medical-history"
                multiline
                rows={4}
                value={medicalHistory}
                onChange={(e) => setMedicalHistory(e.target.value)}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel id="sport-select-label">Type of Sport</InputLabel>
                <Select
                  labelId="sport-select-label"
                  id="sport-select"
                  value={sport}
                  label="Type of Sport"
                  onChange={(e) => setSport(e.target.value)}
                  startAdornment={<SportsSoccerIcon />} // Icon added here
                >
                  {/* Populate this list with the sports you support */}
                  <MenuItem value={'Football'}>Football</MenuItem>
                  <MenuItem value={'Basketball'}>Basketball</MenuItem>
                  <MenuItem value={'Swimming'}>Swimming</MenuItem>
                  {/* ... other sports */}
                </Select>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Grid>
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
      </Grid>
    </ThemeProvider>
  );
};

export default RegisterPage;
