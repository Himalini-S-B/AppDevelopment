import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Header } from './Header';
import Footer from './Footer';

export function TermsCondition() {
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
            Terms of Service
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to AgriSmart. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our services.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Account Responsibilities
          </Typography>
          <Typography variant="body1" paragraph>
            To use certain features of our platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Use of Services
          </Typography>
          <Typography variant="body1" paragraph>
            You agree to use our services only for lawful purposes and in accordance with these terms. You are prohibited from using our services to engage in any illegal activities, transmit harmful content, or interfere with the operation of our platform. We reserve the right to terminate your access to our services if we determine that you have violated these terms.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Content Ownership
          </Typography>
          <Typography variant="body1" paragraph>
            All content available on AgriSmart, including text, graphics, logos, and software, is the property of AgriSmart or its content suppliers and is protected by intellectual property laws. You are granted a limited license to access and use the content for personal, non-commercial purposes. Any unauthorized use of the content may violate copyright, trademark, and other laws.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Modifications to Services
          </Typography>
          <Typography variant="body1" paragraph>
            We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We may also impose limits on certain features or restrict access to parts or all of our services without notice or liability.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            AgriSmart provides its services on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the operation of our services, including their availability, accuracy, or reliability. To the fullest extent permitted by law, AgriSmart disclaims all liability for any damages arising from your use of our services, including direct, indirect, incidental, and consequential damages.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Indemnification
          </Typography>
          <Typography variant="body1" paragraph>
            You agree to indemnify and hold harmless AgriSmart and its affiliates from any claims, losses, liabilities, and expenses (including attorney's fees) arising from your use of our services, your violation of these terms, or your infringement of any third-party rights.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Governing Law
          </Typography>
          <Typography variant="body1" paragraph>
            These terms and your use of our services will be governed by and construed in accordance with the laws of the jurisdiction in which AgriSmart operates. Any disputes arising from these terms or your use of our services will be resolved in the courts of that jurisdiction.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Changes to Terms
          </Typography>
          <Typography variant="body1" paragraph>
            We may update these Terms of Service from time to time. Any changes will be posted on this page, and your continued use of our services after the changes take effect will constitute your acceptance of the new terms. We encourage you to review these terms periodically.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about these terms, please contact us at support@agrismart.com. We are here to assist you and ensure that your experience with AgriSmart is positive and productive.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
