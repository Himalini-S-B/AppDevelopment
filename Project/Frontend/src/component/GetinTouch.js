import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper, AppBar, Toolbar, Avatar, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import image from './image1.png';
import img from './image2.png';
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export function GetinTouch() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    message: '',
    mobileNo: '',
    email: '',
    address: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleHomeClick = () => {
    navigate('/'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/user', {
        firstname: formData.firstName,
        lastname: formData.lastName,
        subject: formData.subject,
        message: formData.message,
        email: formData.email,
        number: parseInt(formData.mobileNo, 10),
        address: formData.address,
      });
      if (response.status === 200) {
        setSnackbarMessage('User details submitted successfully!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        setSnackbarMessage('Failed to submit details.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      }
    } catch (error) {
      setSnackbarMessage('An error occurred while submitting the details.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      console.error('Error:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="xl" sx={{ height: '90px', alignContent: 'center' }}>
          <Toolbar disableGutters>
            <Avatar alt="H" src={image} sx={{ mr: 2, width: 60, height: 60 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 2,
                fontFamily: 'serif',
                fontSize: 30,
                flexGrow: 1,
                fontWeight: 700,
                color: 'rgb(145, 51, 112)',
                textDecoration: 'none',
              }}
            >
              AgriSmart
            </Typography>
            <Typography sx={{ alignItems: 'end' }}>
              <HomeIcon onClick={handleHomeClick} color="secondary" sx={{ fontSize: 40 }} />
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{ display: 'grid', height: '100%', backgroundColor: 'black' }}>
        <Container sx={{ mt: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Paper
            elevation={3}
            sx={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              padding: 4,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: 800,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Get in Touch
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Mobile No"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
              />
              <Box sx={{ mt: 2 }}>
                <Button type="submit" variant="contained" color="secondary">
                  Submit
                </Button>
              </Box>
            </form>
          </Paper>
        </Container>
      </div>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Footer />
    </div>
  );
}
