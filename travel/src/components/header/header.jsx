import React, {useState} from 'react';
import '../header/header.css';
import logo3 from '../../images/logo3.jpg';
 
function Header() {
    const[active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");

    const navToggle = () => {
        active === "nav__menu" 
        ? setActive('nav__menu nav__active') 
        : setActive('nav__menu');

        // toggleicon
        toggleIcon === 'nav__toggler'
        ? setToggleIcon('nav__toggler toggle')
        : setToggleIcon("nav__toggler");

    };

    return (
        <nav className="nav">
          <img src={logo3} style={{width:70}}/>
          <a href="#" className="nav__brand">herdoy</a> 
           <ul className={active}>
            <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Booking</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Gallery</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Packages</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Feedback</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
           </ul>
           <div onClick ={navToggle} className={toggleIcon}>
             <div className="line1"></div>
             <div className="line2"></div>
             <div className="line3"></div>
          
           </div>
        </nav>
    );
}

export default Header;