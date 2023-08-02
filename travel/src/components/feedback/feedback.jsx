import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import './feedback.css'; // Import the CSS file

const labels = {
  0.5: 'Useless',
  1: 'Poor',
  1.5: 'Poor',
  2: 'Good',
  2.5: 'Ok',
  3: 'Better',
  3.5: 'Good',
  4: 'Excell',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Feedback = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(2);
  const [hover, setHover] = useState(-1);

  // Define the validateForm function to validate the form data
  const validateForm = () => {
    // Add your validation logic here and return true or false based on the validation result
    // For example, check if Name and Experience are not empty
    return name.trim() !== '' && feedback.trim() !== '';
  };

  // Define the formData object containing the form data
  const formData = {
    name: name,
    feedback: feedback,
    rating: rating,
  };

  // Define the isAgentApproved variable with a boolean value
  const isAgentApproved = true; // Set this value based on your logic

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate input fields before submitting the form
    if (validateForm()) {
      console.log('Form Data:', formData);
      try {
        const response = await axios.post('https://localhost:7222/api/Feedback/post', {
          name: name,
          feedback: feedback,
          rating: rating.toString(), // Convert rating to string
        });
        console.log('Registration success:', response.data);
      } catch (error) {
        console.error('Registration error:', error.response ? error.response.data : error.message);
      }
    }
  };
  

  return (
    <React.Fragment>
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit} className="form-container">
      <TextField
  type="text"
  variant="outlined"
  color="secondary"
  label="Name"
  onChange={(e) => setName(e.target.value)}
  value={name}
  fullWidth
  required
  sx={{ mb: 4 }}
/>

        <FormControl fullWidth required variant="outlined" color="secondary" sx={{ mb: 4 }}>
          <InputLabel htmlFor="rating">Rating</InputLabel>
          <Select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            label="Rating"
            sx={{ mb: 4 }}
            inputProps={{
              name: 'rating',
              id: 'rating',
            }}
          >
            <MenuItem value={0.5}>0.5 Star - Useless</MenuItem>
            <MenuItem value={1}>1 Star - Useless+</MenuItem>
            <MenuItem value={1.5}>1.5 Stars - Poor</MenuItem>
            <MenuItem value={2}>2 Stars - Poor+</MenuItem>
            <MenuItem value={2.5}>2.5 Stars - Ok</MenuItem>
            <MenuItem value={3}>3 Stars - Ok+</MenuItem>
            <MenuItem value={3.5}>3.5 Stars - Good</MenuItem>
            <MenuItem value={4}>4 Stars - Good+</MenuItem>
            <MenuItem value={4.5}>4.5 Stars - Excellent</MenuItem>
            <MenuItem value={5}>5 Stars - Excellent+</MenuItem>
          </Select>
        </FormControl>

        <TextField
  type="text"
  variant="outlined"
  color="secondary"
  label="Experience with Us"
  onChange={(e) => setFeedback(e.target.value)}
  value={feedback}
  fullWidth
  required
  sx={{ mb: 4 }}
/>

        <div className="rating-container">
          <Rating
            name="hover-feedback"
            value={rating}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {rating !== null && <div className="rating-label">{labels[hover !== -1 ? hover : rating]}</div>}
        </div>

        {/* Center the Register button */}
        <div style={{ textAlign: 'center' }}>
          <Button variant="outlined" color="secondary" type="submit">
            Register
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Feedback;

