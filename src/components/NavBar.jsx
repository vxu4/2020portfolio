import React from 'react';
import { Form, Col } from 'react-bootstrap';

import menu from '../assets/figma/menu.png';
import logo from '../assets/figma/logo.png';

const NavBar = () => {
  return (
    <div className="w-100 d-flex flex-row justify-content-between align-items-center p-4" style={{position: 'fixed'}}>
      <img src={logo} className="" style={{}} />
      <img src={menu} className="" style={{}} />
    </div>
  )
}

export default NavBar;