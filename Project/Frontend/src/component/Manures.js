import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography ,Box} from '@mui/material';
import { Header } from './Header';
import Footer from './Footer';

const Manures = () => {

const manuresData = [
    {
      id: 1,
      name: "Compost",
      composition: "Organic waste",
      applicationRate: "2-3 inches",
      benefits: "Improves soil structure and fertility",
    },
    {
      id: 2,
      name: "Green Manure",
      composition: "Cover crops",
      applicationRate: "Plow into soil before flowering",
      benefits: "Adds organic matter and nutrients",
    },
    {
      id: 3,
      name: "Farmyard Manure (FYM)",
      composition: "Animal dung and crop residue",
      applicationRate: "10-20 tons/ha",
      benefits: "Enhances soil fertility and water retention",
    },
    {
      id: 4,
      name: "Vermicompost",
      composition: "Worm castings",
      applicationRate: "1-2 tons/ha",
      benefits: "Rich in nutrients and beneficial microbes",
    },
    {
      id: 5,
      name: "Poultry Manure",
      composition: "Poultry droppings",
      applicationRate: "5-10 tons/ha",
      benefits: "High in nitrogen",
    },
    {
      id: 6,
      name: "Bone Meal",
      composition: "Ground animal bones",
      applicationRate: "1-2 kg per 100 square feet",
      benefits: "High in phosphorus",
    },
    {
      id: 7,
      name: "Blood Meal",
      composition: "Dried animal blood",
      applicationRate: "1-2 kg per 100 square feet",
      benefits: "High in nitrogen",
    },
    {
      id: 8,
      name: "Fish Emulsion",
      composition: "Processed fish",
      applicationRate: "1-2 tablespoons per gallon of water",
      benefits: "Provides nitrogen, phosphorus, and potassium",
    },
    {
      id: 9,
      name: "Seaweed Fertilizer",
      composition: "Processed seaweed",
      applicationRate: "1-2 kg per 100 square feet",
      benefits: "Rich in trace elements and growth hormones",
    },
    {
      id: 10,
      name: "Cottonseed Meal",
      composition: "Ground cottonseed",
      applicationRate: "2-4 kg per 100 square feet",
      benefits: "High in nitrogen",
    },
    {
      id: 11,
      name: "Alfalfa Meal",
      composition: "Ground alfalfa",
      applicationRate: "2-4 kg per 100 square feet",
      benefits: "Rich in nitrogen and trace elements",
    },
    {
      id: 12,
      name: "Soybean Meal",
      composition: "Ground soybeans",
      applicationRate: "2-4 kg per 100 square feet",
      benefits: "High in nitrogen",
    },
    {
      id: 13,
      name: "Bat Guano",
      composition: "Bat droppings",
      applicationRate: "1-2 kg per 100 square feet",
      benefits: "Rich in nitrogen and phosphorus",
    },
    {
      id: 14,
      name: "Rabbit Manure",
      composition: "Rabbit droppings",
      applicationRate: "5-10 tons/ha",
      benefits: "High in nitrogen, phosphorus, and potassium",
    },
    {
      id: 15,
      name: "Horse Manure",
      composition: "Horse dung and bedding",
      applicationRate: "10-20 tons/ha",
      benefits: "Improves soil structure",
    },
    {
      id: 16,
      name: "Sheep Manure",
      composition: "Sheep droppings",
      applicationRate: "5-10 tons/ha",
      benefits: "Rich in nitrogen and phosphorus",
    },
    {
      id: 17,
      name: "Mushroom Compost",
      composition: "Spent mushroom substrate",
      applicationRate: "5-10 tons/ha",
      benefits: "Adds organic matter",
    },
    {
      id: 18,
      name: "Peat Moss",
      composition: "Decomposed sphagnum moss",
      applicationRate: "2-3 inches",
      benefits: "Improves soil structure and water retention",
    },
    {
      id: 19,
      name: "Coconut Coir",
      composition: "Processed coconut husk",
      applicationRate: "2-3 inches",
      benefits: "Improves soil structure and water retention",
    },
    {
      id: 20,
      name: "Wood Ash",
      composition: "Burned wood",
      applicationRate: "1-2 kg per 100 square feet",
      benefits: "Provides potassium and raises soil pH",
    },
    {
      id: 21,
      name: "Neem Cake",
      composition: "Ground neem seeds",
      applicationRate: "2-4 kg per 100 square feet",
      benefits: "Acts as a natural pesticide",
    },
    {
      id: 22,
      name: "Mustard Cake",
      composition: "Ground mustard seeds",
      applicationRate: "2-4 kg per 100 square feet",
      benefits: "Rich in nutrients and acts as a natural pesticide",
    },
  ];
  
  return (
    <div>
        <Header/>
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
    <Container>
      <Typography variant="h4" component="h1" align="center" sx={{color: 'purple'}} gutterBottom >
        Popular Manures for Better Crops
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="manures table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Composition</TableCell>
              <TableCell>Application Rate</TableCell>
              <TableCell>Benefits</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {manuresData.map((manure) => (
              <TableRow key={manure.id}>
                <TableCell>{manure.name}</TableCell>
                <TableCell>{manure.composition}</TableCell>
                <TableCell>{manure.applicationRate}</TableCell>
                <TableCell>{manure.benefits}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    </Box>
    <Footer/>
    </div>
  );
};

export default Manures;
