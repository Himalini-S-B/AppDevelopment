import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';
import ChatBox from './Chat';  // Ensure this path is correct
import ScrollToTop from './Scrolltotop';

export function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: 'inherit',
          color: 'rgb(145, 51, 112)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <Link href="about" color="inherit" variant="body2" display="block">
                About Us
              </Link>
              <Link href="/company#team" color="inherit" variant="body2" display="block">
                Our Team
              </Link>
              <Link href="/company#career" color="inherit" variant="body2" display="block">
                Careers
              </Link>
              <Link href="/company#press" color="inherit" variant="body2" display="block">
                Press Releases
              </Link>
              <Link href="/company#investor" color="inherit" variant="body2" display="block">
                Investor Relations
              </Link>
              <Link href="/company#sustain" color="inherit" variant="body2" display="block">
                Sustainability
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Resources
              </Typography>
              <Link href="/resource#blog" color="inherit" variant="body2" display="block">
                Blog
              </Link>
              <Link href="/resource#document" color="inherit" variant="body2" display="block">
                Documentation
              </Link>
              <Link href="/resource#faq" color="inherit" variant="body2" display="block">
                FAQ
              </Link>
              <Link href="/resource#industry" color="inherit" variant="body2" display="block">
                Industry News
              </Link>
              <Link href="/resource#partner" color="inherit" variant="body2" display="block">
                Partner Programs
              </Link>
              <Link href="/resource#webinar" color="inherit" variant="body2" display="block">
                Webinars
              </Link>
              <Link href="/resource#casestudy" color="inherit" variant="body2" display="block">
                Case Studies
              </Link>
              <Link href="/resource#ebook" color="inherit" variant="body2" display="block">
                E-books
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2">
                Email: contact@agrismart.com
              </Typography>
              <Typography variant="body2">
                Phone: +91 6382052747
              </Typography>
              <Typography variant="body2">
                Address: Rasipuram, Namakkal, Tamil Nadu, India
              </Typography>
              <Box mt={2}>
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                <IconButton color="inherit" href="https://www.linkedin.com/in/himalini-s-b44b872b8/" target="_blank" rel="noopener">
                  <LinkedInIcon />
                </IconButton>
                <IconButton color="inherit" href="https://www.youtube.com/user/agrismart" target="_blank" rel="noopener">
                  <YouTubeIcon />
                </IconButton>
                <IconButton color="inherit" href="https://www.twitter.com/agrismart" target="_blank" rel="noopener">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" href="https://www.whatsapp.com/agrismart" target="_blank" rel="noopener">
                  <WhatsAppIcon />
                </IconButton>
                <IconButton color="inherit" href="https://www.instagram.com/agrismart" target="_blank" rel="noopener">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box mt={4} sx={{height: '80px', alignContent: 'center'}} textAlign="center" backgroundColor="rgb(145, 51, 112)">
        <Typography variant="body2" color="white">
          © {new Date().getFullYear()} AgriSmart. All rights reserved.
        </Typography>
        <Typography variant="body2" color="white">
          <Link href="/privacy" color="inherit">
            Privacy Policy
          </Link> | <Link href="/terms" color="inherit">
            Terms of Service
          </Link>
        </Typography>
        <Typography>
      <Box sx={{ position: 'fixed', bottom: 0, right: 0, p: 2 }}>
      <ScrollToTop/>
      </Box>
      </Typography>
        <Typography>
      <Box sx={{ position: 'fixed', bottom: 0, right: 120, p: 2, width: '250px' }}>
        <ChatBox />
      </Box>
      </Typography>
      </Box>
    </div>
  );
}

export default Footer;
