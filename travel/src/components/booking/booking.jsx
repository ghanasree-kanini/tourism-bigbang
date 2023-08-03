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
    <React.Fragment>
      <h2>Booking</h2>
      <form onSubmit={handleSubmit}>
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
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="Number"
          onChange={(e) => setNumber(e.target.value)}
          value={phonenumber}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="City of Residence"
          onChange={(e) => setResidence(e.target.value)}
          value={Residence}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Travel destination"
          onChange={(e) => setDestination(e.target.value)}
          value={Destination}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <FormControl fullWidth required variant="outlined" color="secondary" sx={{ mb: 4 }}>
          <InputLabel htmlFor="vacation-type">Vacation Type</InputLabel>
          <Select
            value={Vacaytype}
            onChange={(e) => setVacaytype(e.target.value)}
            label="Vacation Type"
            sx={{ mb: 4 }}
            inputProps={{
              name: 'vacation-type',
              id: 'vacation-type',
            }}
          >
            <MenuItem value="Destination1">Destination 1</MenuItem>
            <MenuItem value="Destination2">Destination 2</MenuItem>
            <MenuItem value="Destination3">Destination 3</MenuItem>
           
            {/* Add more options as needed */}
         
          </Select>
         
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              type="text"
              variant='outlined'
              color='secondary'
              label="No of adult"
              onChange={e => setAdult(e.target.value)}
              value={Adult}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant='outlined'
              color='secondary'
              label="No of children"
              onChange={e => setChildren(e.target.value)}
              value={Children}
              fullWidth
              required
            />
          </Stack>
        </FormControl>

        {/* Move the ResponsiveDatePickers component here */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker defaultValue={dayjs('2022-04-17')} />
        </LocalizationProvider>

        {/* Center the Register button */}
        <Box textAlign="center">
          <Button variant="outlined" color="secondary" type="submit">
            Register
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
};

export default Booking;
