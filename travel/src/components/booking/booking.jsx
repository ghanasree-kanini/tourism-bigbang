// import React, { useState } from 'react';
// import {
//   Button,
//   Stack,
//   Box,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from '@mui/material';
// import dayjs from 'dayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Header from "../header/header";
// import Footer from '../footer/footer';

// const Booking = () => {
//   const [Name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phonenumber, setNumber] = useState('');
//   const [Residence, setResidence] = useState('');
//   const [Destination, setDestination] = useState('');
//   const [Vacaytype, setVacaytype] = useState('');
//   const [Adult, setAdult] = useState('');
//   const [Children, setChildren] = useState('');

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(Name, email, phonenumber, Residence, Destination, Vacaytype);
//   }

//   return (

//     <div>
//       <Header />
//     <div className="booking-container">
//       <p className="booking-header">Booking</p>
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
//           style={{ width: '300px' }}
//         /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <TextField
//           type="number"
//           variant="outlined"
//           color="secondary"
//           label="Number"
//           onChange={(e) => setNumber(e.target.value)}
//           value={phonenumber}
//           fullWidth
//           required
//           // style={{ width: '300px' }}
//         /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <TextField
//           type="email"
//           variant="outlined"
//           color="secondary"
//           label="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           fullWidth
//           required
//           // style={{ width: '300px' }}
//         /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <TextField
//           type="text"
//           variant="outlined"
//           color="secondary"
//           label="City of Residence"
//           onChange={(e) => setResidence(e.target.value)}
//           value={Residence}
//           fullWidth
//           required
//           // style={{ width: '300px' }}
//         /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <TextField
//           type="text"
//           variant="outlined"
//           color="secondary"
//           label="Travel destination"
//           onChange={(e) => setDestination(e.target.value)}
//           value={Destination}
//           fullWidth
//           required
         
//         /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <FormControl fullWidth required variant="outlined" color="secondary" sx={{ mb: 4 }}>
//           <InputLabel htmlFor="vacation-type">Vacation Type</InputLabel>
//           <Select
//             value={Vacaytype}
//             onChange={(e) => setVacaytype(e.target.value)}
//             label="Vacation Type"
//             inputProps={{
//               name: 'vacation-type',
//               id: 'vacation-type',
//             }}
//           >
//             <MenuItem value="Destination1">Destination 1</MenuItem>
//             <MenuItem value="Destination2">Destination 2</MenuItem>
//             <MenuItem value="Destination3">Destination 3</MenuItem>
           
//             {/* Add more options as needed */}
         
//           </Select> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
//           <Stack spacing={2} direction="row" >
//             <TextField
//               type="text"
//               variant='outlined'
//               color='secondary'
//               label="No of adult"
//               onChange={e => setAdult(e.target.value)}
//               value={Adult}
//               fullWidth
//               style={{ width: '332px' }}
//               required
//             /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <TextField
//               type="text"
//               variant='outlined'
//               color='secondary'
//               label="No of children"
//               onChange={e => setChildren(e.target.value)}
//               value={Children}
//               fullWidth
//               required
//             />
//           </Stack>
          
//         {/* Move the ResponsiveDatePickers component here */}
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DatePicker defaultValue={dayjs('2022-04-17')} />
//         </LocalizationProvider>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//         {/* Center the Register button */}
//         <Box textAlign="center">
//           <Button variant="contained" color="primary" type="submit">
//             Book!
//           </Button>
//         </Box>
//         </FormControl>

//       </form>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Booking;


import React, { useState } from 'react';
import {
  Button,
  Stack,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Header from '../header/header';
import Footer from '../footer/footer';

const Booking = () => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setNumber] = useState('');
  const [Residence, setResidence] = useState('');
  const [Destination, setDestination] = useState('');
  const [Vacaytype, setVacaytype] = useState('');
  const [Adult, setAdult] = useState('');
  const [Children, setChildren] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(Name, email, phonenumber, Residence, Destination, Vacaytype);
  }

  return (
    <div>
      <Header />
      <p className="booking-header">Booking</p>
      <div className="booking-container">
        
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            value={Name}
            fullWidth
            required
            style={{ width: '300px', marginBottom: '16px' }}
          />
          <TextField
            type="number"
            variant="outlined"
            color="primary"
            label="Number"
            onChange={(e) => setNumber(e.target.value)}
            value={phonenumber}
            fullWidth
            required
            style={{ width: '300px', marginBottom: '16px' }}
          />
          <TextField
            type="email"
            variant="outlined"
            color="primary"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            fullWidth
            required
            style={{ width: '300px', marginBottom: '16px' }}
          />
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="City of Residence"
            onChange={(e) => setResidence(e.target.value)}
            value={Residence}
            fullWidth
            required
            style={{ width: '300px', marginBottom: '16px' }}
          />
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Travel destination"
            onChange={(e) => setDestination(e.target.value)}
            value={Destination}
            fullWidth
            required
            style={{ width: '300px', marginBottom: '16px' }}
          />
          <FormControl fullWidth required variant="outlined" color="secondary" sx={{ mb: 4 }}>
            <InputLabel htmlFor="vacation-type">Vacation Type</InputLabel>
            <Select
              value={Vacaytype}
              onChange={(e) => setVacaytype(e.target.value)}
              label="Vacation Type"
              inputProps={{
                name: 'vacation-type',
                id: 'vacation-type',
              }}
            >
              <MenuItem value="Destination1">Destination 1</MenuItem>
              <MenuItem value="Destination2">Destination 2</MenuItem>
              <MenuItem value="Destination3">Destination 3</MenuItem>
            </Select>
              <TextField
                type="text"
                variant="outlined"
                color="primary"
                label="No of adult"
                onChange={(e) => setAdult(e.target.value)}
                value={Adult}
                fullWidth
                required
                style={{ width: '300px' }}
              />
              <TextField
                type="text"
                variant="outlined"
                color="primary"
                label="No of children"
                onChange={(e) => setChildren(e.target.value)}
                value={Children}
                fullWidth
                required
                style={{ width: '300px' }}
              />
           
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker defaultValue={dayjs('2022-04-17')} />
            </LocalizationProvider>
            <Box textAlign="center">
              <Button variant="contained" color="primary" type="submit">
                Book!
              </Button>
            </Box>
          </FormControl>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;

