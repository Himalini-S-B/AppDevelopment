import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Container, CircularProgress, Card, CardContent, Typography, TextField, Button ,Box} from '@mui/material';
import Footer from './Footer';
import img1 from './image/i1.png';
import img2 from './image/i2.jpg';
import img3 from './image/i3.png';
import img4 from './image/i4.png';

const apiKey = 'Api key';
const backgroundImages = {
  clear: 'url(https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?cs=srgb&dl=agriculture-clouds-countryside-440731.jpg&fm=jpg)',
  clouds: 'url(https://c4.wallpaperflare.com/wallpaper/753/137/265/field-storm-landscape-wallpaper-preview.jpg)',
  rain: 'url(https://www.freightwaves.com/wp-content/uploads/2021/06/Snow_rain_crops_1_iStock.jpg)',
  snow: 'url(https://www.statcan.gc.ca/o1/sites/default/files/2023-02/Winter%20wheat_Article_1366x768-01.jpg)', 
  mist: 'url(https://wallup.net/wp-content/uploads/2016/03/10/304394-mist-forest-trees-nature.jpg)', 
  default: 'url(http://cdn.wallpapersafari.com/31/46/GgyrPf.jpg)',
};

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [advice, setAdvice] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(backgroundImages.default);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    setWeather(null);
    setAdvice('');
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}. ${errorMessage}`);
      }
      const data = await response.json();
      setWeather(data);
      generateAdvice(data);
      updateBackgroundImage(data.weather[0].main.toLowerCase());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city) {
      fetchWeather(city);
    }
  };

  const generateAdvice = (data) => {
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const condition = data.weather[0].description;

    let advice = '';
    if (temp > 20 && temp < 30 && humidity > 50) {
      advice += 'The conditions are good for planting most summer crops like maize and soybeans.\n';
    } else if (temp < 10) {
      advice += 'The temperature is too low for most crops. Consider planting cold-resistant crops like wheat or barley.\n';
    } else if (humidity < 30) {
      advice += 'The humidity is too low. Consider crops that are drought-resistant like millet or sorghum.\n';
    } else {
      advice += 'The current weather conditions are not ideal for planting. Monitor the weather closely for better conditions.\n';
    }

    // General irrigation advice
    if (humidity < 30) {
      advice += 'Ensure adequate irrigation to maintain soil moisture. Drip irrigation can be effective in conserving water.\n';
    } else if (humidity > 70) {
      advice += 'Be cautious of over-irrigation. High humidity can increase the risk of fungal diseases.\n';
    }

    // General pest management advice
    if (condition.includes('rain')) {
      advice += 'High rainfall can increase the risk of fungal and bacterial diseases. Regularly monitor crops and use appropriate fungicides.\n';
    } else if (condition.includes('dry')) {
      advice += 'Dry conditions can lead to pest infestations like aphids and spider mites. Use integrated pest management practices.\n';
    }

    // Crop selection advice
    if (temp > 30) {
      advice += 'High temperatures are suitable for planting heat-tolerant crops like okra, peppers, and eggplants.\n';
    } else if (temp < 15) {
      advice += 'Cooler temperatures are ideal for planting leafy greens like spinach, lettuce, and cabbage.\n';
    }

    setAdvice(advice);
  };

  const updateBackgroundImage = (weatherCondition) => {
    switch (weatherCondition) {
      case 'clear':
        setBackgroundImage(backgroundImages.clear);
        break;
      case 'clouds':
        setBackgroundImage(backgroundImages.clouds);
        break;
      case 'mist':
        setBackgroundImage(backgroundImages.mist);
        break;
      case 'rain':
        setBackgroundImage(backgroundImages.rain);
        break;
      case 'snow':
        setBackgroundImage(backgroundImages.snow);
        break;
      default:
        setBackgroundImage(backgroundImages.default);
        break;
    }
  };

  return (
    <div sx={{backgroundColor: 'rgb(160, 52, 122)'}}>
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          height: '100vh',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: backgroundImage,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Weather and Farming Insights
            </Typography>
            <Typography variant="body1" sx={{textAlign: 'left'}}paragraph>
              Welcome to our weather and farming insights page. Here, you can get up-to-date weather information for your city and tailored advice on how to manage your crops based on the current conditions.
              Understanding weather conditions is crucial for successful farming. By knowing the temperature, humidity, and overall weather patterns, you can make informed decisions about planting, irrigation, and pest management.
              To get started, simply enter your city name below and click "Get Weather". You'll receive the latest weather data along with expert advice to help you optimize your farming practices.
              </Typography>
          </CardContent>
          <CardContent>
            <TextField
              variant='filled'
              color='secondary'
              label="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              sx={{ marginBottom: '1rem', width: '300px' }}
            />
          </CardContent>
          <CardContent>
            <Button variant="contained" color="secondary" onClick={handleSearch} sx={{ marginBottom: '2rem' }}>
              Get Weather
            </Button>
          </CardContent>
          <CardContent>
            {loading && <CircularProgress />}
            {error && (
              <Typography color="error">Error: {error.message}</Typography>
            )}
            {weather && (
              <Card>
                <CardContent>
                  <Typography variant="h5">{weather.name}</Typography>
                  <Typography variant="body1">Temperature: {weather.main.temp} °C</Typography>
                  <Typography variant="body1">Humidity: {weather.main.humidity} %</Typography>
                  <Typography variant="body1">Condition: {weather.weather[0].description}</Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="h5">Based on the current weather conditions:</Typography>
                  <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>{advice}</Typography>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </Container>
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
        backgroundImage: `url(${img3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box 
        sx={{
          flex: 1,
          textAlign: 'left',
        }}
      >
        <img
          src={img4} 
          alt="Farming"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>
      <Box 
        sx={{
          flex: 1,
          paddingLeft: '1rem',
          textAlign: 'left',
          color: 'purple'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Weather Forecast
        </Typography>
        <Typography variant="body1" paragraph>
        Stay ahead of the weather with our comprehensive and accurate weather forecast tailored specifically for farmers. Understanding and anticipating weather conditions is crucial for effective farm management and maximizing crop yields. Our weather forecast service provides you with the latest updates and predictions, helping you make informed decisions about your agricultural activities.
         </Typography>
      </Box>
    </Box>
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
        backgroundImage: `url(${img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white'
      }}
    >
      <Box 
        sx={{
          flex: 1,
          paddingRight: '1rem',
          textAlign: 'left'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Climate change
        </Typography>
        <Typography variant="body1" paragraph>
        Climate change is an ever-present challenge that significantly impacts agricultural operations worldwide. As a farmer, understanding the implications of climate change on your farm is crucial for adapting your practices, protecting your crops, and ensuring long-term sustainability. Our platform is dedicated to providing you with the knowledge and tools needed to navigate the evolving climate landscape.
          </Typography>
      </Box>
      <Box 
        sx={{
          flex: 1,
          textAlign: 'right',
        }}
      >
        <img
          src={img1}
          alt="Farming"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>
    </Box>
      <Footer />
    </div>
  );
}

export default Weather;
