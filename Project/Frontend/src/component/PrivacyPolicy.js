import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Header } from './Header';
import Footer from './Footer';

function PrivacyPolicy() {
  return (
    <div>
      <Header />
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
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            At AgriSmart, we prioritize your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to ensure its security.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Information Collection
          </Typography>
          <Typography variant="body1" paragraph>
            We collect information you provide directly to us when you create an account, fill out forms, or communicate with us. This may include your name, email address, phone number, and other details relevant to the services you use. We also collect information about your interactions with our platform, including IP address, device information, and usage data, through cookies and similar technologies.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Use of Information
          </Typography>
          <Typography variant="body1" paragraph>
            The information we collect is used to provide, maintain, and improve our services. This includes personalizing your experience, processing transactions, responding to inquiries, and sending updates or promotional offers related to our services. We may also use the data for research and analysis to better understand user needs and preferences.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Data Sharing
          </Typography>
          <Typography variant="body1" paragraph>
            We do not sell or rent your personal information to third parties. However, we may share your information with trusted partners who assist us in operating our platform, conducting business, or servicing you, provided they agree to keep this information confidential. We may also disclose your information if required by law, to enforce our site policies, or protect our or others' rights, property, or safety.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Security Measures
          </Typography>
          <Typography variant="body1" paragraph>
            We implement a variety of security measures to protect your personal information. These include encryption, secure access protocols, and regular monitoring of our systems for vulnerabilities. Despite these efforts, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to access, correct, or delete the personal information we hold about you. You can also object to the processing of your data, request the restriction of its processing, or request its transfer to another service. To exercise these rights, please contact us using the information provided below.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Changes to This Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this policy periodically for any updates. Your continued use of our services after changes to this policy will constitute your acceptance of those changes.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@agrismart.com. We are committed to addressing any issues you may have regarding your privacy.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
export default PrivacyPolicy;