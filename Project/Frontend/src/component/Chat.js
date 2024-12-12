import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ChatBox = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [isChatVisible, setIsChatVisible] = useState(false);

  const API_URL = 'https://api-inference.huggingface.co/models/gpt2';
  const headers = {
    Authorization: 'Bearer Apikey',
    'Content-Type': 'application/json',
  };

  const queryAPI = async (payload) => {
    try {
      const response = await axios.post(API_URL, payload, { headers });
      const data = response.data;
      setMessages((prevMessages) => [...prevMessages, { role: 'ai', content: data[0]?.generated_text || 'No response text' }]);
    } catch (error) {
      setError(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  const handleSubmit = () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const payload = { inputs: input };
    queryAPI(payload);

    setInput('');
  };

  const toggleChatVisibility = () => {
    setIsChatVisible((prev) => !prev);
  };

  return (
    <Box sx={{ width: '100%',maxWidth: '600px', backgroundColor:'white', margin: '0 auto', padding: '16px', border: '1px solid #ccc', borderRadius: '8px' ,marginBottom: '8px',marginTop: '8px'}}>
      <Button variant="contained" color="secondary" onClick={toggleChatVisibility} fullWidth sx={{ marginBottom: '8px' }}>
        {isChatVisible ? 'Hide' : 'SupportBot'}
      </Button>
      {isChatVisible && (
        <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', padding: '8px' }}>
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>SupportBot</Typography>
          <Box sx={{ height: '200px', overflowY: 'scroll', marginBottom: '8px', padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
            {messages.map((msg, index) => (
              <Typography key={index} sx={{ margin: '8px 0', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
                <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
              </Typography>
            ))}
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            sx={{
              marginBottom: '8px'
            }}
          />
          <Button variant="contained" color="secondary" onClick={handleSubmit} fullWidth >
            Send
          </Button>
          {error && <Typography color="error" >{error}</Typography>}
        </Box>
      )}
    </Box>
  );
};

export default ChatBox;
