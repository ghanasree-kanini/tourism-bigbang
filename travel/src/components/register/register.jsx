import React, { useState } from 'react';
import { Button, TextField, MenuItem } from '@mui/material';
import axios from 'axios';
import '../register/register.css';
import { Link } from 'react-router-dom';
import RegisterPopup from '../../components/register/registerpopup';
import Stack from '@mui/material/Stack';
import Header from "../header/header";
import corouselreg5 from "../../images/corouselreg5.jpg";
import Footer from '../footer/footer';




const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailId: '',
    password: '',
    role: '', // Set the default role to 'user'
  });

  const [isAgentApproved, setIsAgentApproved] = useState(false);

  // State variables for input field validation
  const [nameError, setUserNameError] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // State variable for controlling the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate name field
    if (name === 'name') {
      if (!/^[A-Za-z\s]+$/.test(value)) {
        setUserNameError('Name should only contain characters');
        setIsNameValid(false);
      } else {
        setUserNameError('');
        setIsNameValid(true);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate input fields before submitting the form
    if (validateForm()) {
      try {
        const response = await axios.post('https://localhost:7222/api/Users/register', {
          ...formData,
          status: isAgentApproved ? 'Approved' : 'Pending',
        });
        console.log('Registration success:', response.data);
      } catch (error) {
        console.error('Registration error:', error.response ? error.response.data : error.message);
      }
    }
  };

  const validateForm = () => {
    // Reset error messages
    setUserNameError('');
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    // Username validation
    if (formData.name.trim() === '') {
      setUserNameError('Username is required');
      setIsNameValid(false);
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      setUserNameError('Name should only contain characters');
      setIsNameValid(false);
      isValid = false;
    }

    // Email validation
    if (formData.emailId.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!formData.emailId.includes('@')) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    // Password validation
    if (formData.password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    }

    return isValid;
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };



  return (
    <div>

      <Header />

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Stack
        direction="row" spacing={2}>



        <div class="campus">
          <div class="campus-col">
            <img src={corouselreg5} />
            <div class="layer">
              <h3>Have a look!</h3>
            </div>
          </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


        </div>



        <div className="registration-container">
          <h1 className="registration-header">REGISTRATION!</h1>
          <div className="registration-form">
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  label="Username"
                  id="texfield"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  error={!isNameValid}
                  helperText={!isNameValid ? nameError : ''}
                  InputProps={{
                    classes: {
                      root: 'MuiOutlinedInput-root',
                      input: 'MuiOutlinedInput-input',
                      focused: 'MuiOutlinedInput-focused',
                      notchedOutline: 'MuiOutlinedInput-notchedOutline',
                    },
                  }}
                />
              </div>
              <div>
                <TextField
                  label="Email"
                  name="emailId"
                  id="texfield"
                  type="email"
                  value={formData.emailId}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  required
                  error={Boolean(emailError)}
                  helperText={emailError}
                  InputProps={{
                    classes: {
                      root: 'MuiOutlinedInput-root',
                      input: 'MuiOutlinedInput-input',
                      focused: 'MuiOutlinedInput-focused',
                      notchedOutline: 'MuiOutlinedInput-notchedOutline',
                    },
                  }}
                />
              </div>
              <div>
                <TextField
                  label="Password"
                  id="texfield"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  required
                  error={Boolean(passwordError)}
                  helperText={passwordError}
                  InputProps={{
                    classes: {
                      root: 'MuiOutlinedInput-root',
                      input: 'MuiOutlinedInput-input',
                      focused: 'MuiOutlinedInput-focused',
                      notchedOutline: 'MuiOutlinedInput-notchedOutline',
                    },
                  }}
                />
              </div>
              <div>
                <TextField
                  label="Role"
                  name="role"
                  id="texfield"
                  select
                  value={formData.role}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  style={{ width: '332px' }}
                  InputProps={{
                    classes: {
                      root: 'MuiOutlinedInput-root',
                      input: 'MuiOutlinedInput-input',
                      focused: 'MuiOutlinedInput-focused',
                      notchedOutline: 'MuiOutlinedInput-notchedOutline',
                    },
                  }}
                >
                  <MenuItem value="">
                    <em> </em>
                  </MenuItem>
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="agent">Agent</MenuItem>
                </TextField>
              </div>

              <p className="acclog">
                Already have an account? <Link to="/login">Login</Link>
              </p>

              <div className="register-btn">
                <Button type="submit" variant="contained" style={{ fontSize: '1.2rem', padding: '12px 24px', fontFamily: 'cursive' }}>
                  Register
                </Button>
              </div>
            </form>
          </div>

          {/* Render the RegisterPopup component as a modal */}
          {isPopupOpen && <RegisterPopup open={isPopupOpen} onClose={togglePopup} />}
        </div>

      </Stack>
      &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
      <Footer />
    </div>

  );
};

export default RegisterPage;

