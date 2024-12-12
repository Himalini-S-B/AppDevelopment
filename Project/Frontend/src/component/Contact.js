import React from 'react';
import { Box, Button, Container, Typography, AppBar, Avatar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import image from './image1.png';
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export const Contact = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/getintouch');
  };
  const handleHomeClick = () => {
    navigate('/');
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
            <HomeIcon  onClick={handleHomeClick} color="secondary" sx={{ fontSize: 40 }}/>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Box
        component="section"
        sx={{
          py: 5,
          px: 2,
          mt: 'auto',
          backgroundColor: 'rgb(145, 51, 112)',
          color: 'white',
          textAlign: 'justify'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h4" gutterBottom>
            We’re Here to Help You Grow
          </Typography>
          <Typography variant="body1" paragraph>
            At AgriSmart, we understand that farming is both a passion and a livelihood. Whether you have questions about our services, need technical support, or simply want to share your feedback, we're here to assist you every step of the way.
          </Typography>

          <Typography variant="h4" gutterBottom>
            How Can We Assist You?
          </Typography>

          <Typography variant="h6" gutterBottom>
            Technical Support
          </Typography>
          <Typography variant="body1" paragraph>
            Facing challenges with our tools or technology? Our support team is ready to help you troubleshoot and resolve any issues you might encounter. Please provide detailed information about the problem, including screenshots or error messages, so we can assist you more effectively.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Product Inquiries
          </Typography>
          <Typography variant="body1" paragraph>
            Curious about our products, services, or upcoming innovations? Reach out to us for detailed information and personalized recommendations. Let us know what specific products or services you are interested in, and we'll provide the relevant information.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Feedback
          </Typography>
          <Typography variant="body1" paragraph>
            Your insights are invaluable to us. Share your experiences, suggestions, or concerns to help us improve and better serve you. Whether it's about our website, customer service, or products, we want to hear from you.
          </Typography>

          <Typography variant="h6" gutterBottom>
            General Questions
          </Typography>
          <Typography variant="body1" paragraph>
            Have any other questions or need more information? Don’t hesitate to contact us. We are here to help you with any inquiries you might have about our services, farming techniques, or any other agricultural-related questions.
          </Typography>

          <Typography variant="h4" gutterBottom>
            Contact Form
          </Typography>
          <Typography variant="body1" paragraph>
            Please use our "Get in Touch" page to fill out a contact form, and our team will get back to you as soon as possible. Your inquiries are important to us, and we look forward to assisting you. Click the button below to navigate to the contact form.
          </Typography>
          
          <Button
            variant="contained"
            onClick={handleRedirect}
            sx={{
              mt: 3,
              backgroundColor: 'white',
              color: 'purple',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>
      <Footer />
    </div>
  );
};
