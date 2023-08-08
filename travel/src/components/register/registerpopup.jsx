// components/register/RegisterPopup.js
import React from 'react';
import { Modal } from '@mui/material';
import '../../components/register/registerpopup.css'; // Import the CSS file for styling
import RegisterPage from '../../components/register/register'; // Import your RegisterPage component here
import registration from '../../images/registration.jpg';

const RegisterPopup = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} className="popup-container">
      <div className="popup-content">
        {/* Image on the left */}
        <img className="popup-img" src={registration} style={{ width: 450, height: 600 }} alt="" />
        {/* Form on the right */}
        <div className="form-container">
          <RegisterPage />
        </div>
      </div>
    </Modal>
  );
};

export default RegisterPopup;
