import React, { useState } from 'react';
import '../header/header.css';
import travellogo2 from '../../images/travellogo2.jpg';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';

function Header() {
  const [active, setActive] = useState('nav__menu');
  
  return (
    <nav className="nav">
      <div className="nav__brand-container">
      <img src={travellogo2}  className="nav__logo" alt="Logo" style={{ width: 100 }}  />
      <h1 href="#" className="nav__brand">
       HERDOY HOLIDAYS
      </h1>
      </div>
      <ul className={active}>
        <li className="nav__item">
        <Link to="/" className="nav__link">
           Home
          </Link>
        </li>
        <li className="nav__item">
         <Link to="/booking"  className="nav__link">
          Packages
         </Link>
        </li>
      
        <li className="nav__item">
        <Link to="/gallery" className="nav__link">
           Gallery
          </Link>
        </li>
        <li className="nav__item">
        <Link to="/feedback" className="nav__link">
            Feedback
          </Link>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
          <Link to="/register">
          <PersonAddIcon style={{ fontSize: '4rem' }} />
          </Link>
          </a>
        </li>
        
      </ul>
    
    </nav>
  );
}

export default Header;





