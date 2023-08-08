import React from 'react';
import {Link} from "react-router-dom";
import * as icons from "react-icons/fa"; 
import "../../components/navbar/navbar.css";
import { navItems } from './navitems';
import Button from "../../components/navbar/button";
import "../../components/navbar/button.css";

function Navbar (){
  return(
    <div>
    <nav className="navbar" >
      <Link to="/" className="navbar-logo"></Link>
         NATURE 
         <icons.FaTree />
         <Link>
         <ul className="nav-item">
         {navItems.map(item => {
          return (
          <li key={item.id} className={item.className}>
            <Link to={item.path}>{item.title}</Link>
          </li>
          );
         })}
         </ul>
         <div className="signup-button">
         <Button></Button>
         </div>
         </Link>
    </nav> 
    </div>
    ); 
}

export default Navbar;
