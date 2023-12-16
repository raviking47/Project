// Import necessary modules from Chakra UI
import { LinkBox } from '@chakra-ui/react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Navbar component
const Navbar = () => {
  const navigate = useNavigate()
  const auth = localStorage.getItem('user')
  const logout = () => {
    localStorage.clear()
    navigate('/Signup')
  }
  // Use media query to determine if screen width is less than 768px

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <LinkBox className="navbar-brand" to="/">Made 2 Automate</LinkBox>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {auth?(<ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/addProduct">Add Product</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/statusbar">Status Bar</Link>
          </li>
          <li classs="nav-item active">

            <Link className="nav-link" onClick={logout} to="/Signup">
              Logout
            </Link>

          </li>

        </ul>):( <ul className="navbar-nav mr-auto"><li className="nav-item active">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li classs="nav-item active">

          <Link className="nav-link" onClick={logout} to="/signup">
              Sign Up
            </Link>

          </li>

        </ul>)}


      </div>
    </nav>
  );
};

export default Navbar;
