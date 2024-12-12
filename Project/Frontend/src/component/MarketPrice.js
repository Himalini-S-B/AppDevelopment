import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography,Container, Box,Grid,CardMedia } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Footer from './Footer';
import { Header } from './Header';
import img2 from './image/i6.png';
import img1 from './image/i7.png';

const MarketPrice = () => {
  const [data, setData] = useState([]);
  const apiKey = 'Your_Api_key'; 
  const symbol = 'AAPL'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query`,
          {
            params: {
              function: 'TIME_SERIES_DAILY',
              symbol: symbol,
              apikey: apiKey,
            },
          }
        );

        const timeSeries = response.data['Time Series (Daily)'];
        const formattedData = Object.keys(timeSeries).map(date => ({
          date,
          price: parseFloat(timeSeries[date]['4. close']),
        }));

        setData(formattedData);
      } catch (error) {
        console.error('Error fetching market price data:', error);
      }
    };

    fetchData();
  }, [apiKey, symbol]);
 
  
  return (
    <div>
      <Header/>
      <Box component="section"
      sx={{
        py: 5,
        px: 2,
        mt: 'auto',
        backgroundColor: 'rgb(145, 51, 112)',
        color: 'white',
        textAlign: 'center',
      }}>
      <Container>
    <Card>
      <CardContent >
        <Typography variant="h3" color="purple">Market Price Chart</Typography>
        </CardContent>
        <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
      <CardContent >
        <Typography variant="h6" color="purple">The above Market Price chart represents the daily closing prices of the stock over time, allowing you to analyze the market trends and make informed decision to take before involving in the planting.</Typography>
        </CardContent>
    </Card>
    </Container>
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
          textAlign: 'left',
          color: 'purple'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Market Access
        </Typography>
        <Typography variant="body1" paragraph>
        Data on the accessibility of different markets, including transportation costs and logistics, is vital for farmers. Understanding market access helps farmers choose the most efficient and cost-effective ways to transport their produce, reducing expenses and increasing profitability. This information is crucial for planning the logistics of getting crops from farm to market.  </Typography>
      </Box>
      <Box 
        sx={{
          flex: 1,
          textAlign: 'right',
        }}
      >
        <img
          src="https://optimaxaccess.com/wp-content/uploads/2023/08/market-access-strategy-planning.webp"
          alt="market access"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>
    </Box>
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
        backgroundImage: `url(${img1})`,
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
          src="https://www.logicwis.com/wp-content/uploads/2019/02/PriceComparison.jpg" 
          alt="Price comparsion"
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
          Price Comparsion
        </Typography>
        <Typography variant="body1" paragraph>
        Comparison of prices across different markets and regions allows farmers to identify where their produce can fetch the highest prices. By knowing the differences in market prices, farmers can choose the most profitable markets to sell their crops, potentially increasing their income. This data also aids in negotiating better prices with buyers. </Typography>
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
          textAlign: 'left',
          color: 'purple'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Price trends
        </Typography>
        <Typography variant="body1" paragraph>
        Historical data showing the price trends over weeks, months, and years provides farmers with valuable insights into market fluctuations. By analyzing past trends, farmers can forecast future prices, plan their planting and harvesting schedules accordingly, and manage their financial expectations. This data helps in understanding seasonal variations and long-term market movements.</Typography>
      </Box>
      <Box 
        sx={{
          flex: 1,
          textAlign: 'right',
        }}
      >
        <img
          src="https://media.istockphoto.com/id/1487894858/photo/candlestick-chart-and-data-of-financial-market.jpg?s=612x612&w=0&k=20&c=wZ6vVmbm4BV2JOePSnNNz-0aFVOJZ0P9nhdeOMGUg5I="
          alt="price treads"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>
    </Box>
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
        backgroundImage: `url(${img1})`,
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
          src="https://www.investopedia.com/thmb/3yxTUyNrgtXCAuY65r0iTjO6n1s=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/how-governments-influence-markets-4205069-02d77ea7f3884828a57297bd60bfbe4c.jpg" 
          alt="Government policy"
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
          Government policy
        </Typography>
        <Typography variant="body1" paragraph>
        Information on government policies, subsidies, and support prices can significantly influence market prices. Staying updated on policy changes helps farmers take advantage of available support and make informed decisions that align with government initiatives. This data ensures that farmers can benefit from subsidies and support schemes designed to stabilize prices and support agricultural growth.</Typography>
      </Box>
    </Box>
    <Footer/>
    </div>
  );
};

export default MarketPrice;
