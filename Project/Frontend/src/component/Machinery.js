import React, { useState } from 'react';
import {
  Container, Card, CardContent, Typography, Grid, CardMedia, Box,
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Autocomplete
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { Header } from './Header';
import Footer from './Footer';
import { purple } from '@mui/material/colors';

export function Machinery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedMachinery, setSelectedMachinery] = useState(null);

  const machineryData = [
    {
      title: 'Drones for Crop Monitoring',
      description: 'Drones equipped with sensors and cameras provide real-time data on crop health and soil conditions, aiding in precision agriculture.',
      image: 'https://d17ocfn2f5o4rl.cloudfront.net/wp-content/uploads/2020/04/Collecting-and-Analyzing-Drone-Imagery-for-Crop-Monitoring.jpg',
    },
    {
      title: 'Autonomous Tractors',
      description: 'Autonomous tractors use GPS and AI for precision farming, reducing the need for human intervention in plowing, planting, and harvesting.',
      image: 'https://preview.thenewsmarket.com/Previews/CNHA/StillAssets/1920x1080/446634.jpg',
    },
    {
      title: 'Smart Irrigation Systems',
      description: 'These systems use IoT sensors to automate irrigation based on soil moisture and weather conditions, optimizing water use.',
      image: 'https://media.istockphoto.com/id/1298836846/photo/landscape-automatic-garden-watering-system-with-different-rotating-sprinklers-installed-on.jpg?s=612x612&w=0&k=20&c=sm9QwBrjujNmyWWgaBshAmCbEyg9EluLXLW2r6Ubojo=',
    },
    {
      title: 'Harvesting Robots',
      description: 'Robots that use AI and computer vision to identify and harvest ripe crops, reducing labor costs and minimizing damage.',
      image: 'https://www.shutterstock.com/image-photo/agriculture-robotic-autonomous-car-working-260nw-1995250223.jpg',
    },
    {
      title: 'Soil Sensors',
      description: 'Sensors that monitor soil conditions such as moisture, temperature, and nutrient levels to guide better fertilization and irrigation.',
      image: 'https://miro.medium.com/v2/resize:fit:1024/1*p3aUZgRJ3DDFve90ZJ3U6g.jpeg',
    },
    {
      title: 'Precision Planters',
      description: 'Planters equipped with GPS and automated systems to ensure accurate seed placement and optimal crop spacing.',
      image: 'https://www.vaderstad.com/globalassets/_international/assets/planting/tempo-planter/tempo-r-4-6/tempo-r-6-desktop.jpg',
    },
    {
      title: 'Smart Fertilizer Spreaders',
      description: 'These spreaders use sensors to determine the exact amount of fertilizer needed and apply it precisely to reduce waste and increase yield.',
      image: 'https://media.istockphoto.com/id/172792355/photo/yard-fertilizing.jpg?s=612x612&w=0&k=20&c=tQwj9bTepReAd548SqI7wvq9vder2BbYKl2HmUTc6jM=',
    },
    {
      title: 'Precision Sprayers',
      description: 'Sprayers equipped with GPS and sensors to apply pesticides and herbicides only where needed, minimizing chemical use and environmental impact.',
      image: 'https://www.precisionfarmingdealer.com/ext/resources/images/Products/new-products/2021/May-2021/John-Deere-See-Spray-Select-Technology_0521-copy.jpg?t=1619907941&width=700',
    },
    {
      title: 'Automatic Weeders',
      description: 'Machines that use sensors and AI to identify and remove weeds, reducing the need for chemical herbicides and improving crop health.',
      image: 'https://www.farmersjournal.ie/WEBFILES/000/714/140/1867586-714140.jpg',
    },
    {
      title: 'Weather Stations',
      description: 'Weather stations provide real-time data on temperature, humidity, and rainfall to help farmers make informed decisions.',
      image: 'https://cdn.pixabay.com/photo/2019/02/05/20/00/anemometer-3977718_640.jpg',
    },
    {
      title: 'Climate-Controlled Greenhouses',
      description: 'Greenhouses with automated climate control systems to create optimal growing conditions for various crops throughout the year.',
      image: 'https://assets.cdn.thewebconsole.com/S3WEB10081/blogImages/6094326e07eab.jpg',
    },
    {
      title: 'Harvesting Drones',
      description: 'Drones designed specifically for harvesting tasks, capable of picking fruits and vegetables with precision.',
      image: 'https://cdn.trendhunterstatic.com/thumbs/470/tevel-far-drone.jpeg?auto=webp',
    },
  ];

  const filteredMachinery = machineryData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (machinery) => {
    setSelectedMachinery(machinery);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedMachinery(null);
  };

  return (
    <div>
      <Header />
      <Box
        component="section"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: 'rgb(243, 217, 234)',
          color: 'white',
          textAlign: 'justify'
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h3" align="center" gutterBottom color="purple">
            Latest Machinery and Technology for Smart Farming
          </Typography>
          <Autocomplete
            freeSolo
            options={machineryData.map((option) => option.title)}
            value={searchQuery}
            onInputChange={(event, newInputValue) => {
              setSearchQuery(newInputValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Machinery and Technology"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            )}
          />
          <Grid container spacing={4}>
            {filteredMachinery.length > 0 ? (
              filteredMachinery.map((item, index) => (
                <Grid item xs={12} sm={8} md={4} key={index}>
                  <Card onClick={() => handleCardClick(item)}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Container maxWidth="lg" sx={{ mt: 6, justifyContent: 'center' }}>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                  No machinery and technology found.
                </Typography>
              </Container>
            )}
          </Grid>
        </Container>
      </Box>
      {selectedMachinery && (
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="machinery-dialog-title"
        >
          <DialogTitle id="machinery-dialog-title">{selectedMachinery.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {selectedMachinery.description}
            </DialogContentText>
            <CardMedia
              component="img"
              height="200"
              image={selectedMachinery.image}
              alt={selectedMachinery.title}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Footer />
    </div>
  );
}
