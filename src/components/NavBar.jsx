import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import MenuIcon from '@material-ui/icons/Menu';
import '../styles/Utilities.scss';

const NavBar = () => {
  return (
    <div className="w-100 d-flex flex-row justify-content-between align-items-center py-3 px-4 text-primary" style={{position: 'fixed', zIndex: 50}}>
      <Nav.Link
          as={Link}
          to="/"
        >
      <h1 className="text-primary">Victoria Xu</h1>
      </Nav.Link>
      <MenuIcon style={{fontSize: '40px'}} className="font-weight-bold p-0 m-0" />
    </div>
  )
}

export default withRouter(NavBar);