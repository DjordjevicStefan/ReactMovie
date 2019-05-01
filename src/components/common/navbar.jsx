import React from 'react';
import {Link} from "react-router-dom"

const NavBar = () => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" href="#">Vidly</Link>
  
 
    <ul className="navbar-nav">
      <li className="ml-2 nav-item">
        <Link className="nav-link" to="/">Movies </Link>
      </li>
      <li className="ml-2 nav-item">
        <Link className="nav-link" to="/customers">Customers</Link>
      </li>
      <li className="ml-2 nav-item">
        <Link className="nav-link" to="/rental">Rental</Link>
      </li>
      <li className="ml-2 nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="ml-2 nav-item">
        <Link className="nav-link" to="/register">Register</Link>
      </li>
      
    </ul>
  
</nav>
   );
}
 
export default NavBar;