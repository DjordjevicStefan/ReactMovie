import React from 'react';
import {Link} from "react-router-dom"

const NavBar = () => {
  return ( 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" href="#">Vidly</Link>
  
 
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/">Movies </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="#">Customers</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="#">Rental</Link>
      </li>
      
    </ul>
  
</nav>
   );
}
 
export default NavBar;