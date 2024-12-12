import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Header } from './Header';
import Footer from './Footer';

export function About() {
  return (
    <div>
       <Header/>
    <Box
      component="section"
      sx={{
        py: 5,
        px: 2,
        mt: 'auto',
        backgroundColor: 'rgb(145, 51, 112)',
        color: 'white',
        textAlign: 'justify',
      }}
    >
      <Container maxWidth="lg" >
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          This website is dedicated to revolutionizing the agricultural industry with innovative solutions and other sustainable practices. Our mission is
           to empower farmers and agricultural businesses to achieve greater efficiency and productivity, which boon farmer with help of the Researchers and other sellers.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Our Mission, Vision, and Values
        </Typography>
        <Typography variant="h6">Mission</Typography>
        <Typography variant="body1" paragraph>
          To provide cutting-edge agricultural solutions that drive efficiency and sustainability.
        </Typography>
        <Typography variant="h6">Vision</Typography>
        <Typography variant="body1" paragraph>
          To be the global leader in agri-tech, continuously innovating to meet the challenges of tomorrow.
        </Typography>
        <Typography variant="h6">Values</Typography>
        <Typography variant="body1" paragraph>
          Innovation, Sustainability, Integrity, Customer Focus, and Excellence.
        </Typography>
        
        <Typography variant="h4" gutterBottom>
          Services and Products
        </Typography>
        <Typography variant="body1" paragraph>
          We offer a range of products and services designed to enhance agricultural productivity, including smart irrigation systems, crop monitoring tools, and data analytics platforms.
        </Typography>
        
        <Typography variant="h4" gutterBottom>
          Customer Testimonials
        </Typography>
        <Typography variant="body1" paragraph>
          "AgriSmart has transformed our farming operations. Their innovative solutions have significantly increased our yields and reduced our costs." - Happy Farmer
        </Typography>
        <Typography variant="h4" gutterBottom>
          Corporate Social Responsibility
        </Typography>
        <Typography variant="body1" paragraph>
          At AgriSmart, we are committed to sustainable practices and giving back to the community. Our CSR initiatives focus on promoting environmental sustainability and supporting local farmers.
        </Typography>
        
        <Typography variant="h4" gutterBottom>
          Press and Awards
        </Typography>
        <Typography variant="body1" paragraph>
          AgriSmart has been featured in numerous industry publications and has received several awards for our innovative solutions and contributions to the agricultural sector.
        </Typography>
        
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Have questions or want to learn more about AgriSmart? Contact us at contact@agrismart.com or call us at +123 456 7890.
        </Typography>
        
        <Typography variant="h4" gutterBottom>
          Follow Us
        </Typography>
        <li>
        <Link href="https://www.linkedin.com/in/himalini-s-b44b872b8/" target="_blank" rel="noopener" color="inherit">
          LinkedIn
        </Link>
        </li>
        <li>
        <Link href="https://www.youtube.com/user/agrismart" target="_blank" rel="noopener" color="inherit">
          YouTube
        </Link>
        </li>
        <li>
        <Link href="https://www.twitter.com/agrismart" target="_blank" rel="noopener" color="inherit">
          Twitter
        </Link>
        </li>
        <li>
        <Link href="https://www.whatsapp.com/agrismart" target="_blank" rel="noopener" color="inherit">
          Whatsapp
        </Link>
        </li>
        <li>
        <Link href="https://www.instagram.com/agrismart" target="_blank" rel="noopener" color="inherit">
          Instagram
        </Link>
        </li>
      </Container>
    </Box>
    <Footer/>
    </div>
  );
}
