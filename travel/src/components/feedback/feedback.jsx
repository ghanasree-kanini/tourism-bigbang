// import React, { useState } from 'react';
// import {
//   Button,
//   Stack,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from '@mui/material';
// import Rating from '@mui/material/Rating';
// import StarIcon from '@mui/icons-material/Star';

// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

// function getLabelText(value) {
//   return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// }

// const Feedback = () => {
//   const [Name, setName] = useState('');
//   const [Experience, setExperience] = useState('');
//   const [rating, setRating] = useState(2);
//   const [hover, setHover] = useState(-1);

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(Name, Experience, rating);
//   }

//   return (
//     <React.Fragment>
//       <h2>Feedback</h2>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           type="text"
//           variant="outlined"
//           color="secondary"
//           label="Name"
//           onChange={(e) => setName(e.target.value)}
//           value={Name}
//           fullWidth
//           required
//           sx={{ mb: 4 }}
//         />

//         <FormControl fullWidth required variant="outlined" color="secondary" sx={{ mb: 4 }}>
//           <InputLabel htmlFor="rating">Rating</InputLabel>
//           <Select
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//             label="Rating"
//             sx={{ mb: 4 }}
//             inputProps={{
//               name: 'rating',
//               id: 'rating',
//             }}
//           >
//             <MenuItem value={0.5}>0.5 Star - Useless</MenuItem>
//             <MenuItem value={1}>1 Star - Useless+</MenuItem>
//             <MenuItem value={1.5}>1.5 Stars - Poor</MenuItem>
//             <MenuItem value={2}>2 Stars - Poor+</MenuItem>
//             <MenuItem value={2.5}>2.5 Stars - Ok</MenuItem>
//             <MenuItem value={3}>3 Stars - Ok+</MenuItem>
//             <MenuItem value={3.5}>3.5 Stars - Good</MenuItem>
//             <MenuItem value={4}>4 Stars - Good+</MenuItem>
//             <MenuItem value={4.5}>4.5 Stars - Excellent</MenuItem>
//             <MenuItem value={5}>5 Stars - Excellent+</MenuItem>
//           </Select>
//         </FormControl>

//         <TextField
//           type="text"
//           variant="outlined"
//           color="secondary"
//           label="Experience with Us"
//           onChange={(e) => setExperience(e.target.value)}
//           value={Experience}
//           fullWidth
//           required
//           sx={{ mb: 4 }}
//         />

//         <div
//           style={{
//             width: 200,
//             display: 'flex',
//             alignItems: 'center',
//           }}
//         >
//           <Rating
//             name="hover-feedback"
//             value={rating}
//             precision={0.5}
//             getLabelText={getLabelText}
//             onChange={(event, newValue) => {
//               setRating(newValue);
//             }}
//             onChangeActive={(event, newHover) => {
//               setHover(newHover);
//             }}
//             emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
//           />
//           {rating !== null && <div style={{ marginLeft: 2 }}>{labels[hover !== -1 ? hover : rating]}</div>}
//         </div>

//         {/* Center the Register button */}
//         <div style={{ textAlign: 'center' }}>
//           <Button variant="outlined" color="secondary" type="submit">
//             Register
//           </Button>
//         </div>
//       </form>
//     </React.Fragment>
//   );
// };

// export default Feedback;

// feedback.jsx
import React, { useState } from 'react';
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
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Feedback = () => {
  const [Name, setName] = useState('');
  const [Experience, setExperience] = useState('');
  const [rating, setRating] = useState(2);
  const [hover, setHover] = useState(-1);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(Name, Experience, rating);
  }

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
          value={Name}
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
          onChange={(e) => setExperience(e.target.value)}
          value={Experience}
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


