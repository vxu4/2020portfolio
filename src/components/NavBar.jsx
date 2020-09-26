import React from 'react';
import { Form, Col } from 'react-bootstrap';

import menu from '../assets/figma/menu.png';
import logo from '../assets/figma/logo.png';

const NavBar = () => {
  return (
    <div className="w-100 d-flex flex-row justify-content-between align-items-center p-4" style={{position: 'fixed', zIndex: 50}}>
      {/* <img src={logo} className="" style={{}} /> */}
      <h1>Victoria Xu</h1>
      <img src={menu} alt="menu icon" className="" style={{}} />
    </div>
  )
}

export default NavBar;