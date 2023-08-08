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
import './feedback.css';
import Header from '../header/header';
import Stack from '@mui/material/Stack';
import corouselreg4 from "../../images/corouselreg4.jpg";
import Footer from '../footer/footer';

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
    <div>
      <Header />   
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Stack
        direction="row" spacing={2}>

      <div class="campus">
        <div class="campus-col">
            <img src={corouselreg4}/>
            <div class="layer">
                <h3>Have a look!</h3>
            </div>
        </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>


     
      <form onSubmit={handleSubmit} className="form-container">
      <h2 className="feedback-header">Let us know about your experience</h2>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          fullWidth
          required
          sx={{ mb: 4, color: 'rgb(9, 120, 134)' }} 
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
            {Object.keys(labels).map((value) => (
              <MenuItem key={value} value={parseFloat(value)}>
                {labels[value]}
              </MenuItem>
            ))}
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
          sx={{ mb: 4, color: 'rgb(9, 120, 134)' }} 
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
        <div  className="feedback-btn"style={{ textAlign: 'center' }}>
          <Button variant="outlined"  type="submit">
           Submit
          </Button>
        </div>
      </form>
      </Stack>
      &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
      <Footer />
    </div>
 
  );
};

export default Feedback;
