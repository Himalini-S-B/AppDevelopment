import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Grid, Button, Typography, Box, Container, CircularProgress, Card, CardContent } from '@mui/material';
import Webcam from 'react-webcam';
import { Header } from './Header';
import Footer from './Footer';

const API_URL = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large";
const HEADERS = {
  Authorization: "Bearer Apikey",
};

const features = [
  {
    title: 'Crop Health Monitoring',
    description: `Image recognition helps farmers monitor the health of their crops by analyzing images for signs of diseases, nutrient deficiencies, and pest infestations. By capturing images of plants and uploading them to an image recognition platform, farmers can receive detailed analysis and early warnings about potential issues. This allows them to take timely action, such as applying appropriate treatments or adjusting nutrient levels, ultimately improving crop health and yield.`,
  },
  {
    title: 'Pest and Weed Management',
    description: `Farmers can use image recognition to identify pests and weeds in their fields. By analyzing images of crops, the technology can distinguish between beneficial plants and harmful weeds or pests. This enables precision agriculture techniques, where herbicides and pesticides are applied only where needed, reducing chemical use and costs. Accurate identification of pests also helps farmers choose the most effective control methods, minimizing crop damage and loss.`,
  },
  {
    title: ' Livestock Monitoring',
    description: `Image recognition technology is valuable for monitoring livestock health and behavior. By capturing images or videos of animals, farmers can use the technology to detect signs of illness, stress, or abnormal behavior. This early detection allows for prompt veterinary intervention, reducing the spread of disease and improving animal welfare. Additionally, behavioral analysis helps ensure that livestock are healthy and stress-free, contributing to better productivity and quality.`,
  },
  {
    title: 'Yield Estimation and Harvest Planning',
    description: `Image recognition aids in accurate yield estimation and harvest planning. By analyzing images of crops throughout the growing season, the technology can predict the quantity and quality of the harvest. This information helps farmers plan their harvest operations, storage, and market strategies more effectively. Image recognition can also determine the optimal time for harvesting by assessing the ripeness of fruits and vegetables, ensuring peak quality and reducing waste.`,
  },
  {
    title: 'Soil and Plant Analysis',
    description: `Farmers can use image recognition for soil and plant analysis. By analyzing images of soil samples, the technology assesses soil health by determining texture, color, and organic content. This information guides farmers in managing soil fertility and health. Similarly, regular imaging of plants allows farmers to monitor growth patterns and detect issues early. This helps in making informed decisions about irrigation, pruning, and other care practices, leading to healthier plants and better yields.`,
  },
  {
    title: 'Automated Farming Solutions',
    description: `Image recognition is integral to automated farming solutions, such as precision agriculture and robotic harvesting. Equipped with this technology, automated machinery can perform tasks like planting, spraying, and harvesting with high accuracy and efficiency. For instance, robots can use image recognition to identify and pick ripe produce selectively, reducing labor costs and enhancing the quality and consistency of the harvest. This automation streamlines farm operations and increases overall productivity.`,
  },

];

const ImageRecognition = () => {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [webcam, setWebcam] = useState(false);
  const [imageBase64, setImageBase64] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [error, setError] = useState("");

  const webcamRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result.split(',')[1]);
        setImage(URL.createObjectURL(file));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = () => {
    const screenshot = webcamRef.current.getScreenshot();
    if (screenshot) {
      setImageBase64(screenshot.split(',')[1]);
      setImage(screenshot);
      setError("");  // Clear any previous error
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile && !imageBase64) {
      setError("No file selected or image captured");
      return;
    }
  
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const binaryData = reader.result;
        processImage(binaryData);
      };
      reader.readAsArrayBuffer(selectedFile);  // Read as ArrayBuffer
    } else {
      const binaryData = new Uint8Array(atob(imageBase64).split("").map(char => char.charCodeAt(0)));
      processImage(binaryData.buffer);  // Convert base64 to ArrayBuffer
    }
  };
  
  const processImage = async (binaryData) => {
    setLoading(true);
    try {
      const response = await axios.post(API_URL, binaryData, {
        headers: {
          ...HEADERS,
          'Content-Type': 'application/octet-stream',
        },
        responseType: 'json',
      });
  
      if (response.status === 200) {
        const result = response.data;
        if (result && result.length > 0) {
          setCaption(result[0].generated_text);
          setError("");  // Clear any previous error
        } else {
          setError("Failed to generate caption: Empty response");
        }
      } else {
        setError(`Failed to generate caption: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      if (error.response) {
        setError(`Server responded with status ${error.response.status}: ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        setError("No response received from server. Please check your network.");
      } else {
        setError(`Error occurred while generating caption: ${error.message}`);
      }
    }
    setLoading(false);
  };
  
  return (
    <div>
      <Header/>
      <div sx={{ backgroundColor: 'rgb(236, 212, 227)' }}>
        <Box
          component="section"
          sx={{
            py: 5,marginTop: '90px',
            px: 2,
            mt: 'auto',
            backgroundImage: 'url(https://www.queppelin.com/wp-content/uploads/2019/12/farming-banner-with-logo-1024x576.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
            padding: '2rem',
            justifyContent: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
              Image Recognition
            </Typography>
            <Card>
              <CardContent sx={{ py: 4 }}>
                {webcam ? (
                  <div>
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      width="100%"
                      height="100%"
                      style={{ borderRadius: '8px', border: '2px solid #fff' }}
                    />
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                      <Button
                        variant="contained"
                        onClick={handleCapture}
                        sx={{
                          mr: 1,
                          bgcolor: 'white',
                          color: 'purple',
                          '&:hover': {
                            bgcolor: 'lightgray',
                            color: 'purple',
                          },
                        }}
                      >
                        Capture
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={() => setWebcam(false)}
                        sx={{
                          bgcolor: 'white',
                          color: 'purple',
                          '&:hover': {
                            bgcolor: 'lightgray',
                            color: 'purple',
                          },
                        }}
                      >
                        Back to Upload
                      </Button>
                    </Box>
                  </div>
                ) : (
                  <div>
                    <Typography variant="body1" paragraph>
                      Choose an image file to upload or use the camera to capture an image.
                    </Typography>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      style={{ marginBottom: '10px' }}
                    />
                    {selectedFile && (
                      <Typography variant="body2" style={{ marginBottom: '10px' }}>
                        {selectedFile.name}
                      </Typography>
                    )}
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                      <Button
                        variant="contained"
                        onClick={() => setWebcam(true)}
                        sx={{
                          mr: 1,
                          bgcolor: 'white',
                          color: 'purple',
                          '&:hover': {
                            bgcolor: 'lightgray',
                            color: 'purple',
                          },
                        }}
                      >
                        Use Camera
                      </Button>
                      <Button
                        variant="contained"
                        onClick={handleSubmit}
                        disabled={loading}
                        sx={{
                          mr: 1,
                          bgcolor: 'purple',
                          color: 'white',
                          '&:hover': {
                            bgcolor: 'darkpurple',
                          },
                        }}
                      >
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Process Image'}
                      </Button>
                    </Box>
                    {image && (
                      <Box sx={{ mt: 4 }}>
                        <img
                          src={image}
                          alt="Selected"
                          style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            border: '2px solid #fff',
                          }}
                        />
                      </Box>
                    )}
                    {caption && (
                      <Box sx={{ mt: 4, textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                          Description
                        </Typography>
                        <Typography variant="body1">{caption}</Typography>
                      </Box>
                    )}
                    {error && (
                      <Box sx={{ mt: 4, textAlign: 'center', color: 'red' }}>
                        <Typography variant="body1">{error}</Typography>
                      </Box>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </Container>
        </Box>
        <Box
      component="section"
      sx={{
        py: 5,
        px: 2,
        mt: 'auto',
        backgroundColor: 'rgb(236, 212, 227)',
        color: 'purple',
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg" >
        <Typography variant='h3' gutterBottom>
          What is Image Recognition
        </Typography>
        <Typography variant='h6'>
        Image recognition is a cutting-edge technology that enables computers to interpret and understand visual information from the world, similar to how humans use their eyesight. This technology uses complex algorithms and machine learning to identify objects, features, and patterns within images. By training on vast datasets, image recognition systems can accurately recognize and classify various elements in photographs.
        </Typography>
      </Container>
      </Box>
      <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box 
        sx={{
          flex: 1,
          textAlign: 'left',
          backgroundColor: 'white',
        }}
      >
        <img
          src="https://helios-i.mashable.com/imagery/articles/04E0hekYn5ysupWR8ND0ude/hero-image.fill.size_1248x702.v1667577377.jpg" 
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
        How Image Recognition Works
        </Typography>
        <Typography variant="body1" paragraph>
        Image recognition technology works by utilizing complex algorithms and machine learning models to analyze and interpret visual data. The process begins with data collection, where large sets of labeled images are gathered and used to train the model. During training, the model learns to identify patterns, features, and objects within the images. When a new image is presented, the model extracts significant features such as shapes, colors, and textures. These features are then compared with the learned knowledge to classify the image or predict what it represents. The result is a label or a set of labels that describe the content of the image. This technology is highly accurate and continues to improve as it processes more data, making it a powerful tool for various applications, including agriculture. </Typography>
      </Box>
    </Box>
    <Box
      component="section"
      sx={{
        py: 5,
        px: 2,
        mt: 'auto',
        backgroundColor: 'rgb(236, 212, 227)',
        color: 'purple',
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg" >
        <Typography variant='h4' gutterBottom>Use of Image Recognition for Farmers</Typography>
    <Grid container spacing={4} justifyContent="center">
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom style={{ color: '#73C035' }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
    </Box>
        
      </div>
      <Footer/>
    </div>
  );
};

export default ImageRecognition;
