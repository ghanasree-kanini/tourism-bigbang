// import React, { useState } from 'react';
// import '../header/header.css';
// import travellogo2 from '../../images/travellogo2.jpg';
// // import { Button } from './Button';
// // import { Link } from 'react-router-dom';
// // import Dropdown from './Dropdown';

// function Header() {
//   const [active, setActive] = useState('nav__menu');
//   const [toggleIcon, setToggleIcon] = useState('nav__toggler');
//   const [showDropdown, setShowDropdown] = useState(false);

//   const navToggle = () => {
//     setActive(active === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu');
//     setToggleIcon(toggleIcon === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler');
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <nav className="nav">
//       <img src={travellogo2} style={{ width: 100 }} alt="Logo" />
//       <a href="#" className="nav__brand">
//         HERDOY HOLIDAYS
//       </a>
//       <ul className={active}>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             HOME
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             PACKAGES
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             BOOKING
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             GALLERY
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             FEEDBACK
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             CONTACT
//           </a>
//         </li>
//       </ul>
//       <div onClick={navToggle} className={toggleIcon}>
//         <div className="line1"></div>
//         <div className="line2"></div>
//         <div className="line3"></div>
//       </div>
//     </nav>
//   );
// }

// export default Header;


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../header/header.css';
import travellogo2 from '../../images/travellogo2.jpg';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header() {
  const [active, setActive] = useState('nav__menu');
  const [toggleIcon, setToggleIcon] = useState('nav__toggler');
  const [anchorEl, setAnchorEl] = useState(null);

  const navToggle = () => {
    setActive(active === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu');
    setToggleIcon(toggleIcon === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler');
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="nav">
      <img src={travellogo2} style={{ width: 100 }} alt="Logo" />
      <a href="#" className="nav__brand">
        HERDOY HOLIDAYS
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            HOME
          </a>
        </li>
        <li className="nav__item">
          <Button
            className="nav__link"
            id="packages-menu-button"
            aria-controls="packages-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            PACKAGES
          </Button>
          <Menu
            id="packages-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleClose}>Honeymoon</MenuItem>
            <MenuItem onClick={handleClose}>Family Trip</MenuItem>
            <MenuItem onClick={handleClose}>Adventure Trip</MenuItem>
          </Menu>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            BOOKING
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            GALLERY
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            FEEDBACK
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            CONTACT
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}



export default Header;




