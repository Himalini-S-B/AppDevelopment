import React from 'react';
import { Card, CardContent, CardHeader, Container, Grid, Typography, Box } from '@mui/material';
import { Header } from './Header';
import Footer from './Footer';

const pesticidesData = [
  { id: 1, name: "Glyphosate", usage: "Broad-spectrum herbicide", applicationRate: "1-2 quarts/acre", details: "Controls broadleaf weeds and grasses" },
  { id: 2, name: "Atrazine", usage: "Herbicide", applicationRate: "1-2 pounds/acre", details: "Used for broadleaf and grassy weed control in crops" },
  { id: 3, name: "Chlorpyrifos", usage: "Insecticide", applicationRate: "1-2 pints/acre", details: "Controls a variety of insects including termites" },
  { id: 4, name: "Imidacloprid", usage: "Insecticide", applicationRate: "0.5-1 pounds/acre", details: "Used for controlling sucking insects" },
  { id: 5, name: "Metolachlor", usage: "Herbicide", applicationRate: "1-2 quarts/acre", details: "Controls annual grasses and certain broadleaf weeds" },
  { id: 6, name: "Bifenthrin", usage: "Insecticide", applicationRate: "0.1-0.2 pounds/acre", details: "Used to control ants, fleas, ticks, and other pests" },
  { id: 7, name: "Paraquat", usage: "Herbicide", applicationRate: "0.5-1.5 quarts/acre", details: "Non-selective herbicide used for weed control" },
  { id: 8, name: "Carbaryl", usage: "Insecticide", applicationRate: "1-2 pounds/acre", details: "Effective against a variety of insects" },
  { id: 9, name: "Copper sulfate", usage: "Fungicide", applicationRate: "2-3 pounds/acre", details: "Controls fungal diseases in crops" },
  { id: 10, name: "Malathion", usage: "Insecticide", applicationRate: "1-2 pints/acre", details: "Controls a wide range of insects" },
  { id: 11, name: "Pendimethalin", usage: "Herbicide", applicationRate: "1-2 quarts/acre", details: "Pre-emergence herbicide for weed control" },
  { id: 12, name: "Spinosad", usage: "Insecticide", applicationRate: "0.1-0.2 pounds/acre", details: "Derived from bacteria to control insects" },
  { id: 13, name: "Trifluralin", usage: "Herbicide", applicationRate: "0.5-1 pounds/acre", details: "Prevents weed seed germination" },
  { id: 14, name: "Neem Oil", usage: "Insecticide/Fungicide", applicationRate: "1-2 tablespoons/gallon of water", details: "Organic pesticide for insects and diseases" },
  { id: 15, name: "Pyrethrin", usage: "Insecticide", applicationRate: "0.1-0.2 pounds/acre", details: "Derived from chrysanthemum flowers for insect control" },
  { id: 16, name: "Sulfur", usage: "Fungicide", applicationRate: "2-3 pounds/acre", details: "Controls fungal diseases and mites" },
  { id: 17, name: "Diatomaceous Earth", usage: "Insecticide", applicationRate: "1-2 pounds/acre", details: "Mechanical insecticide causing dehydration in insects" },
  { id: 18, name: "Bordeaux Mixture", usage: "Fungicide", applicationRate: "2-3 pounds/acre", details: "Mixture of copper sulfate and lime for disease control" },
  { id: 19, name: "Bacillus Thuringiensis (Bt)", usage: "Insecticide", applicationRate: "0.5-1 pounds/acre", details: "Bacterial insecticide for caterpillar control" },
  { id: 20, name: "Lime Sulfur", usage: "Fungicide/Insecticide", applicationRate: "2-3 gallons/acre", details: "Used for controlling fungal diseases and insects" },
];

const Pesticides = () => {
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
          color: 'black',
          textAlign: 'justify',
        }}
      >
        <Container>
          <Typography variant="h4" component="h1"  color="purple" gutterBottom sx={{ textAlign: 'center'}}>
            Pesticides Usage and Details
          </Typography>
          <Grid container spacing={3}>
            {pesticidesData.map((pesticide) => (
              <Grid item xs={12} sm={6} md={4} key={pesticide.id}>
                <Card>
                  <CardHeader color='purple' title={pesticide.name} />
                  <CardContent>
                    <Typography variant="h6" component="div" color="purple">Usage</Typography>
                    <Typography variant="body2" color="text.secondary">{pesticide.usage}</Typography>
                    <Typography variant="h6" component="div" color="purple">Application Rate</Typography>
                    <Typography variant="body2" color="text.secondary">{pesticide.applicationRate}</Typography>
                    <Typography variant="h6" component="div" color="purple">Details</Typography>
                    <Typography variant="body2" color="text.secondary">{pesticide.details}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default Pesticides;
