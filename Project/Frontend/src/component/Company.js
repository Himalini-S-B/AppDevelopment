import { Box, Container,Typography} from "@mui/material";
import React from "react";
import { Header1 } from "./Header1";
import Footer from "./Footer";
export function Company()
{
    return(
        <div>
            <Header1/>
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
        <Typography id="team" variant="h2" gutterBottom>
        Our Team
        </Typography>
        <Typography variant="h4" gutterBottom>
        AgriSmart's Team: Innovators, Experts, and Visionaries
        </Typography>
        <Typography variant="h6"  gutterBottom>
        Our team at AgriSmart is composed of dedicated professionals who are passionate about revolutionizing agriculture. Our diverse team includes:
        </Typography>
        <Typography variant="h6"  paragraph>
       <li>Agricultural Experts: Professionals with extensive knowledge in crop science, agronomy, and soil health.</li>
       <li>Technologists: Innovators who develop cutting-edge tools and platforms for smart farming.</li>
       <li>Researchers: Individuals dedicated to studying and implementing the latest agricultural technologies and practices.</li>
       <li>Business Strategists: Experts who understand market trends and help in strategizing for the benefit of farmers and agricultural businesses. </li>
       </Typography>
        <Typography variant="h6"  paragraph>
        Together, our team is committed to providing farmers with the knowledge and tools they need to increase efficiency, improve crop yields, and achieve sustainable farming practices. </Typography>
        <Typography id="career" variant="h2" gutterBottom>
        Careers
        </Typography>
        <Typography variant="h6"  paragraph>
           Join us at AgriSmart and become part of a pioneering team that’s transforming agriculture through technology and innovation. We offer dynamic career opportunities across various domains, including technology development, research, marketing, and customer support. At AgriSmart, we value creativity, dedication, and a passion for making a difference in agriculture. By working with us, you’ll have the chance to contribute to meaningful projects that impact farmers and the agricultural industry globally. Explore our current job openings and discover how you can be a part of our mission to drive agricultural excellence.
        </Typography>
        <Typography id="press" variant="h2" gutterBottom>
        Press Releases
        </Typography>
        <Typography variant="h4" gutterBottom>
        Stay Updated with AgriSmart's Latest News and Innovations
        </Typography>
        <Typography variant="h6"  paragraph>
        Our press releases section keeps you informed about the latest developments at AgriSmart, including:</Typography>
        <Typography variant="h6"  paragraph>
        <li>New Product Launches: Information about our latest tools and technologies designed to enhance agricultural productivity.</li>
        <li>Research Findings: Summaries of recent studies and research conducted by our team, providing insights into new farming techniques and practices.</li>
        <li>Partnership Announcements: Updates on collaborations with other industry leaders, research institutions, and governmental organizations to promote agricultural advancements.</li>
        <li>Event Participation: Details of conferences, seminars, and workshops where AgriSmart is presenting or participating.</li>
        </Typography>
        <Typography variant="h6"  gutterBottom>
        Farmers can stay informed about the latest trends and technologies in agriculture, enabling them to adopt new practices and improve their operations.
        </Typography>
        <Typography id="investor" variant="h2" gutterBottom>
        Investor Relations
        </Typography>
        <Typography variant="h4" gutterBottom>
        Building a Sustainable Future Together
        </Typography>
        <Typography variant="h6"  paragraph>
        AgriSmart is committed to transparency and building strong relationships with our investors. Our investor relations section provides:
       </Typography>
        <Typography variant="h6"  paragraph>
        <li>Financial Reports: Detailed annual and quarterly reports showcasing our financial health and growth prospects.</li>
        <li>Corporate Governance: Information about our board of directors, governance policies, and commitment to ethical business practices.</li>
        <li>Investment Opportunities: Details on how investors can participate in AgriSmart's growth, including information on upcoming funding rounds and strategic initiatives.</li>
        <li>Sustainability Efforts: Insights into our sustainability projects and how they contribute to long-term value creation for both farmers and investors.</li>
        </Typography>
        <Typography variant="h6"  gutterBottom>
        By partnering with us, investors can support the advancement of sustainable agriculture while benefiting from AgriSmart's innovative solutions and market growth.
        </Typography>
        <Typography id="sustain" variant="h2" gutterBottom>
        Sustainability
        </Typography>
        <Typography variant="h4" gutterBottom>
        Commitment to Sustainable Agriculture
        </Typography>
        <Typography variant="h6"  paragraph>
        At AgriSmart, sustainability is at the core of everything we do. Our sustainability initiatives focus on:
       </Typography>
        <Typography variant="h6"  paragraph>
        <li>Eco-Friendly Practices: Promoting farming techniques that reduce environmental impact, such as precision agriculture, organic farming, and integrated pest management.</li>
        <li>Resource Conservation: Developing technologies that optimize the use of water, energy, and other resources, helping farmers to reduce costs and environmental footprint.</li>
        <li>Community Support: Engaging with local communities to provide education, resources, and support for sustainable farming practices.</li>
        <li>Innovation for Sustainability: Investing in research and development to create new solutions that promote sustainable agriculture, such as smart irrigation systems and biodegradable pesticides.</li>
        </Typography>
        <Typography variant="h6"  gutterBottom>
        By adopting our sustainable practices and technologies, farmers can improve their productivity and profitability while contributing to the health and sustainability of our planet.
        </Typography>
        </Container>
        </Box>
      <Footer/>
        </div>
    );
}