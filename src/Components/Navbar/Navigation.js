import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";


import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../Assets/logo.png';
import Button from 'react-bootstrap/Button';

function Navigation() {
  return (
      <Navbar className="navbar-body ">
              <Navbar.Brand href="#home">
              <img src={Logo} alt="" />

              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                 
                <Link to="/website" className="navbar-link">Website</Link>
                  <Link to="/mobile" className="navbar-link">Mobile Apps</Link>
                  <Link to="/portfolio" className="navbar-link">Portfolio</Link>
                  <Button className="nav-button">
                    <Link to="/make" className="navbar-link">Make an App</Link>
                  </Button>
              </Navbar.Collapse>
      </Navbar>
  )
}

export default Navigation