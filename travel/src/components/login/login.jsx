import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Container,
  Grid,
  Snackbar
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './login.css';
import Alert from '@mui/material/Alert';
import Header from "../header/header";
import Stack from '@mui/material/Stack';
import corouselreg6 from "../../images/corouselreg6.jpg";
import Footer from '../footer/footer';

const Login = () => {

  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    emailId: '',
    password: '',

  });


  const validateEmail = (email) => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;

    setFormData({
      ...formData,
      [fieldName]: value,
    });

    if (fieldName === 'emailId') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: !validateEmail(value) ? 'Please enter a valid email address.' : '',
      }));
    }

    else {

      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: value.trim() === '' ? 'This field is required.' : '',
      }));
    }

  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);

  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting login data:', formData);

    try {

      const { emailId, password } = formData;
      const response = await axios.post('https://localhost:7038/api/Users/login', { emailId, password });
      setOpenSnackbar(true);
      if (response.status === 200) {
        const token = response.data;
        localStorage.setItem('token', token);

        const decodedToken = jwt_decode(token);

        console.log('Token:', token);
        console.log('Name:', formData.emailId);
        console.log('Role:', decodedToken.role);
        console.log('nameid', decodedToken.nameid);
        localStorage.setItem('nameid', decodedToken.nameid);

        if (decodedToken.role === "Admin") {


          navigate("/approve");
        }
        else if (decodedToken.role === "Agent") {

          navigate("/details");
        }
        else if (decodedToken.role === "User") {

          navigate("/destinations");
        }
        else {
          console.log("invalid");
        }


      } else {
        console.error('Error during login:', response);

      }
    } catch (error) {
      console.error('Error during login:', error);

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
            <img src={corouselreg6}/>
            <div class="layer">
                <h3>Have a look!</h3>
            </div>
        </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>



        <div class="login-container">
          <Container component="main" maxWidth="xs" sx={{ padding: 5, height: 'auto', }}>
            <div>
              <p className="login-header" >Login!</p>
              <form onSubmit={handleSubmit} sx={{ width: 500, }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      fullWidth
                      variant="outlined"
                      name="emailId"
                      value={formData.emailId}
                      onChange={handleChange}
                      error={!!errors.emailId}
                      helperText={errors.emailId}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Password"
                      fullWidth
                      variant="outlined"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      error={!!errors.password}
                      helperText={errors.password}
                    />
                  </Grid>
                </Grid>
                <div className="login-btn">
                  <Button type="submit" variant="contained" fullWidth class="logindetails" style={{ fontSize: '1.2rem', padding: '12px 24px', fontFamily: 'cursive' }}>
                    Login
                  </Button>
                </div>


              </form>
            </div>
          </Container>

          <Snackbar
            open={openSnackbar}
            autoHideDuration={5000} // Adjust the duration as needed
            onClose={handleCloseSnackbar}

          >
            <Alert onClose={handleCloseSnackbar} variant="filled" severity='info' sx={{ width: '400px', fontSize: '20px', marginLeft: '730px', }}>
              Login Successful!
            </Alert>
          </Snackbar>



        </div>
      </Stack>
      &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
      <Footer />
    </div>
  );
};

export default Login;
