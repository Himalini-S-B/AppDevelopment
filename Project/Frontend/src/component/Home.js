import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Card, Container, CardContent, Typography, CardActions, IconButton, CardMedia, Collapse, Grid } from '@mui/material';
import Footer from './Footer';
import { styled } from '@mui/material/styles';

function Home() {
  const images = [
    'https://c4.wallpaperflare.com/wallpaper/549/835/824/nature-wheat-field-cereal-wallpaper-preview.jpg',
    'https://img.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg',
    'https://www.shutterstock.com/image-photo/sunrise-over-corn-field-near-600nw-1809999373.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = (panel) => {
    setExpanded((prev) => ({
      ...prev,
      [panel]: !prev[panel],
    }));
  };

  return (
    <div>
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          height: '80vh',
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 1s ease-in-out',
          alignContent: 'center',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <h1>Make your crops and fields better and yield good with the help of us.</h1>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                height="194"
                image="https://www.okdo.com/wp-content/uploads/2023/04/smart-irrigation-automated-watering-systems-from-okdo-7.png"
                alt="Irrigation management"
              />
              <CardContent>
                <Typography variant="h5" color="text.secondary">
                  Irrigation Management
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded['irrigation']}
                  onClick={() => handleExpandClick('irrigation')}
                  aria-expanded={expanded['irrigation']}
                  aria-label="show more"size="small">Learn More
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded['irrigation']} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Irrigation management is a critical component of modern agriculture that can significantly enhance crop yields and ensure sustainable farming practices. By utilizing advanced irrigation techniques, such as drip irrigation and automated sprinklers, farmers can precisely control the amount of water delivered to their fields, reducing waste and optimizing water usage. Smart irrigation systems, which integrate sensors and weather data, allow for real-time adjustments based on soil moisture levels and climatic conditions, ensuring crops receive the optimal amount of water at the right time. This not only conserves valuable water resources but also promotes healthier plant growth, minimizes water stress, and prevents issues like soil erosion and nutrient leaching. Effective irrigation management can thus provide a substantial boon to farmers, leading to increased productivity, improved crop quality, and greater economic returns.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                height="194"
                image="https://www.cabi.org/wp-content/uploads/Capture-12.jpg"
                alt="Pest and disease management"
              />
              <CardContent>
                <Typography variant="h5" color="text.secondary">
                  Pest and Disease Management
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded['pest']}
                  onClick={() => handleExpandClick('pest')}
                  aria-expanded={expanded['pest']}
                  aria-label="show more"size="small">Learn More
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded['pest']} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                  Effective pest and disease management is crucial for sustainable farming and maximizing crop yields. Integrated Pest Management (IPM) 
                  combines various strategies, including biological control, cultural practices, and the judicious use of chemicals, to manage pest populations while
                  minimizing environmental impact. By implementing crop rotation, using pest-resistant crop varieties, and introducing natural predators or beneficial
                  insects, farmers can reduce the reliance on chemical pesticides. Additionally, the use of precision agriculture tools, such as IoT sensors and data analytics,
                  allows for real-time monitoring of pest and disease levels. This enables timely and targeted interventions, such as precise pesticide application with drones or smart sprayers, reducing chemical usage and preventing the development of pesticide resistance. Effective pest and disease management practices not only protect crops from damage but also promote healthier plant growth, leading to higher quality and increased yields. By adopting these strategies, farmers can 
                  achieve more productive and resilient farming systems, ensuring better economic returns and contributing to long-term agricultural sustainability.  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                height="194"
                image="https://www.alphaenvironmental.com.au/wp-content/uploads/2019/04/Improving-soil-health.jpg"
                alt="Pest and disease management"
              />
              <CardContent>
                <Typography variant="h5" color="text.secondary">
                Soil Health Management
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded['soil']}
                  onClick={() => handleExpandClick('soil')}
                  aria-expanded={expanded['soil']}
                  aria-label="show more"
                  size="small"
                >Learn more
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded['soil']} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                  Soil health management is essential for ensuring long-term agricultural success and sustainability. By focusing on practices that improve soil structure, nutrient
                   content, and biological activity, farmers can enhance soil fertility, boost crop yields, and protect their land from erosion and degradation. Key strategies include rotating crops to prevent pest and disease buildup, using cover crops to add organic matter and reduce soil erosion, and minimizing tillage to preserve soil structure and moisture. Regular soil testing helps tailor nutrient applications to specific needs, avoiding overuse of fertilizers and reducing environmental impact. Embracing these practices not only
                   promotes healthier crops but also contributes to a more resilient and productive farming system, safeguarding the land for future generations.
                   </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                height="194"
                image="https://cap.unl.edu/styles/article_image/public/grandvalecreative4605.jpg?itok=L20vmkou"
                alt="Pest and disease management"
              />
              <CardContent>
                <Typography variant="h5" color="text.secondary">
                Energy Management
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded['energy']}
                  onClick={() => handleExpandClick('energy')}
                  aria-expanded={expanded['energy']}
                  aria-label="show more"
                  size="small"
                >Learn more
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded['energy']} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                  Energy management is a crucial aspect of modern farming that helps farmers optimize their energy use, reduce costs, and minimize environmental impact. By implementing
                   efficient energy practices, such as upgrading to energy-saving equipment, adopting renewable energy sources like solar or wind power, and optimizing irrigation systems,
                    farmers can significantly cut down on energy consumption and expenses. Energy management also involves careful monitoring of energy use patterns, regular maintenance of machinery, and leveraging advanced technologies to improve energy efficiency. By focusing on these strategies, farmers can enhance their operational efficiency, lower their
                   carbon footprint, and contribute to a more sustainable agricultural system, ultimately improving their overall profitability and environmental stewardship.
                   </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
