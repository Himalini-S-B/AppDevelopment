import React, { useState, useEffect, useRef } from 'react';
import { Grid, Card, CardContent, Typography, Button, CardMedia, Container, TextField, CircularProgress, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import Footer from './Footer';
import { Header } from './Header';
import axios from 'axios';
import img2 from './image/i3.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function Transportation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentAddress, setCurrentAddress] = useState('');
  const [destinationLocation, setDestinationLocation] = useState(null);
  const [filteredTransportData, setFilteredTransportData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [distance, setDistance] = useState(null);
  const [time, setTime] = useState(null);
  const [routeDetails, setRouteDetails] = useState([]);
  const mapRef = useRef(null);
  const routingControlRef = useRef(null);
  const mapBounds = useRef(L.latLngBounds([]));
 const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
        fetchAddress(latitude, longitude);
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    if (currentLocation && !mapRef.current) {
      mapRef.current = L.map('map').setView([currentLocation.lat, currentLocation.lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);
    }
  }, [currentLocation]);

  useEffect(() => {
    if (mapRef.current && mapBounds.current) {
      mapRef.current.fitBounds(mapBounds.current);
    }
  }, [routeDetails]);

  const fetchAddress = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCurrentAddress(data.display_name);
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  const fetchDestinationCoordinates = async (destination) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${destination}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setDestinationLocation({ lat: parseFloat(lat), lng: parseFloat(lon) });
        return { lat: parseFloat(lat), lng: parseFloat(lon) };
      } else {
        alert('Destination not found.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching destination coordinates:', error);
      return null;
    }
  };

  const calculateRoute = (destination) => {
    if (currentLocation && mapRef.current) {
      if (routingControlRef.current) {
        mapRef.current.removeControl(routingControlRef.current);
      }

      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(currentLocation.lat, currentLocation.lng),
          L.latLng(destination.lat, destination.lng)
        ],
        router: L.Routing.osrmv1({ language: 'en', profile: 'driving' }),
        createMarker: () => null,
        lineOptions: {
          styles: [{ color: 'blue', weight: 4 }]
        }
      }).addTo(mapRef.current);

      routingControlRef.current.on('routesfound', (e) => {
        const route = e.routes[0];
        setDistance((route.summary.totalDistance / 1000).toFixed(2)); // Convert meters to kilometers
        setTime((route.summary.totalTime / 3600).toFixed(2)); // Convert seconds to hours

        const routeInfo = route.instructions.map((instruction) => ({ text: instruction.text, distance: (instruction.distance / 1000).toFixed(2) })); // Convert meters to kilometers
        setRouteDetails(routeInfo);

        // Update map bounds to include the route
        const bounds = L.latLngBounds([
          L.latLng(currentLocation.lat, currentLocation.lng),
          L.latLng(destination.lat, destination.lng)
        ]);
        mapBounds.current = bounds;
        mapRef.current.fitBounds(bounds);
      });
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const destination = await fetchDestinationCoordinates(searchTerm);

    if (destination && currentLocation) {
      calculateRoute(destination);

      try {
        const response = await axios.get('http://localhost:8080/search', {
          params: {
            destination: searchTerm,
            serviceType: serviceType,
            lat: currentLocation.lat,
            lng: currentLocation.lng
          }
        });
        setFilteredTransportData(response.data);
      } catch (error) {
        console.error('Error fetching transport data:', error);
      }
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div style={{
      mt: 4, backgroundImage: `url(${img2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', 
      height: '100vh', // Ensure the container covers full height
      overflow: 'auto' // Enable scrolling if content overflows
    }}>
      <Header />
      <Container maxWidth="xl" sx={{
        mt: 4,
        backgroundImage: `url(${img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Transport Facilities for Farmers
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="Current Location"
            variant="outlined"
            fullWidth
            margin="normal"
            value={currentAddress}
            disabled
          />
          <TextField
            label="Destination"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <TextField
            label="Service Type"
            variant="outlined"
            fullWidth
            margin="normal"
            value={serviceType}
            onChange={handleServiceTypeChange}
          />
          <Button type="submit" variant="contained" color="secondary">
            Search
          </Button>
        </form>
        {filteredTransportData.length > 0 ? (
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {filteredTransportData.map((transport) => (
              <Grid item xs={12} sm={6} md={12} key={transport.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={transport.image}
                    alt={transport.name}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {transport.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {transport.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Contact: {transport.contact}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h6" component="div" sx={{ mt: 4 }}>
            No transport services found within the specified criteria.
          </Typography>
        )}
        <Box id="map" sx={{
          height: '500px',
          width: '100%',
          marginTop: '20px'
        }}></Box>
        {distance && time && (
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Distance</TableCell>
                  <TableCell>Estimated Time</TableCell>
                  <TableCell>Route Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{distance} km</TableCell>
                  <TableCell>{time} hours</TableCell>
                  <TableCell>
                    <ul>
                      {routeDetails.map((detail, index) => (
                        <li key={index}>{detail.text} - {detail.distance} km</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
<Container maxWidth="lg" sx={{ mt: 4 }}>
      <Button variant="contained" color="secondary" onClick={toggleVisibility}>
        Click to know more
      </Button>
      <Grid container spacing={4} sx={{ mt:2,display: visible ? 'flex' : 'none' }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', padding: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
              Service Providers
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Farmers have access to a wide array of transportation service providers dedicated to ensuring the timely and efficient movement of agricultural goods.<br></br> <br></br>These providers range from local trucking companies to larger logistics firms, each offering unique services tailored to meet the specific needs of farmers. <br></br> <br></br> Comprehensive lists of these providers include their contact details, service areas, and ratings from other users, enabling farmers to make informed choices. By selecting reliable and well-reviewed providers, farmers can ensure their produce reaches markets or processing facilities in optimal condition, enhancing both their productivity and profitability.
                </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', padding: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
              Booking and Scheduling
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Booking and scheduling transportation services have never been easier for farmers, thanks to the advent of digital platforms and mobile applications. <br></br><br></br>Farmers can now effortlessly book transport services online, selecting preferred dates and times that align with their harvesting schedules. These platforms often feature user-friendly interfaces, real-time availability checks, and automated reminders, ensuring that no shipment is missed. <br></br> <br></br> Efficient scheduling not only saves time but also optimizes the logistics process, reducing wait times and ensuring that fresh produce reaches its destination promptly.
                   </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', padding: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
              Cost and Pricing
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Understanding the cost and pricing of transportation services is crucial for farmers to manage their budgets effectively.<br></br> <br></br>Various pricing models are available, ranging from flat rates to distance-based fees, and cost estimation tools help farmers predict expenses accurately. Additionally, many service providers offer discounts or subsidies to support the agricultural community. <br></br> <br></br> By leveraging these tools and understanding the pricing structures, farmers can make cost-effective decisions, ensuring they get the best value for their money while maintaining high-quality transportation services.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', padding: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
              Safety and Regulations
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Safety and compliance with regulations are paramount when transporting agricultural goods. <br></br><br></br>Farmers need to be aware of safety guidelines that ensure the protection of their produce during transit. This includes proper loading techniques, securing goods to prevent damage, and maintaining suitable transport conditions. Adherence to government regulations, such as those related to weight limits and vehicle maintenance, is also essential. <br></br> <br></br> Additionally, insurance options are available to safeguard against potential losses, providing farmers with peace of mind and financial security during transportation. </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', padding: 2 }}>
            {/* <img src={InformationCategoryImg} alt="Information Category" style={{ width: '100%', height: 'auto' }} /> */}
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
              Technology in Transportation
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The integration of advanced technology in transportation is revolutionizing the agricultural sector.  <br></br><br></br>GPS and tracking systems allow farmers to monitor their shipments in real-time, ensuring transparency and timely updates. Automated booking and dispatch systems streamline the logistics process, reducing administrative burdens and improving efficiency. Mobile applications further enhance convenience, enabling farmers to manage their transportation needs from anywhere.  <br></br> <br></br>These technological advancements not only improve the reliability of transport services but also contribute to reducing operational costs and environmental impact, driving the agricultural sector towards a more sustainable future.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', padding: 2 }}>
            {/* <img src={DigitalMapsImg} alt="Digital Maps" style={{ width: '100%', height: 'auto' }} /> */}
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
              Support and Helpline
              </Typography>
              <Typography variant="body2" color="text.secondary">
              To assist farmers with their transportation needs, robust support and helpline services are available. Dedicated customer support teams provide guidance on booking, scheduling, and troubleshooting any issues that may arise. <br></br> <br></br>Emergency helplines offer immediate assistance in case of unforeseen problems during transit, ensuring minimal disruption to the supply chain.  <br></br> <br></br>Frequently Asked Questions (FAQs) sections and detailed troubleshooting guides are also accessible, helping farmers resolve common issues independently and efficiently.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
      <Footer />
    </div>
  );
}

export default Transportation;
