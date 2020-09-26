import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import '../styles/Utilities.scss';

const NavBar = () => {
  return (
    <div className="w-100 d-flex flex-row justify-content-between align-items-center py-3 px-4 text-primary" style={{position: 'fixed', zIndex: 50}}>
      {/* <img src={logo} className="" style={{}} /> */}
      <h1 className="text-primary">Victoria Xu</h1>
      {/* <img src={menu} alt="menu icon" className="" style={{}} /> */}
      <MenuIcon style={{fontSize: '40px'}} className="font-weight-bold p-0 m-0" />
    </div>
  )
}

export default NavBar;