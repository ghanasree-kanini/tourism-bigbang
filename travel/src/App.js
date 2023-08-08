import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './components/register/register';
import Login from './components/login/login';
import Homepage from './components/homepage/homepage';
import Header from './components/header/header';
import Feedback from './components/feedback/feedback';
import Booking from './components/booking/booking';
import Package from './components/packages/packages';
import Packagesget from './components/packagesget/packagesget';
import Admin from './components/Admin/admin';
import Navbar from './components/navbar/navbar';

import { Switch } from '@mui/material';
import Gallery from './components/gallery/gallery';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Homepage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/header" element={<Header />} /> */}
          <Route path='/' element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/feedback" element={<Feedback /> } />
          <Route path="/gallery" element={<Gallery /> } />
          <Route path="/booking" element={<Booking />} />
      
        </Routes>
      </BrowserRouter>

      {/* < Feedback /> */}
      {/* < Package /> */}
      {/* <Packagesget /> */}
      {/* <RegisterPage />
      <Login /> */}
      {/* < Admin /> */}
      {/* < Navbar /> */}
    
   
     </div> 
  );
}

export default App;

