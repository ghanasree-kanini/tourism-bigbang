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

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </BrowserRouter> */}

      {/* < Feedback /> */}
      {/* < Package /> */}
      <Packagesget />
    </div>
  );
}

export default App;

