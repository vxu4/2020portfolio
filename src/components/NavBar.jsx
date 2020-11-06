import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import MenuIcon from '@material-ui/icons/Menu';
import HomeLogo from '../assets/catLogos/homeLogo.png';
import ArtLogo from '../assets/catLogos/artLogo_1.png';
import FilmLogo from '../assets/catLogos/filmLogo.png';
import DesignLogo from '../assets/catLogos/designLogo.png';
import CSLogo from '../assets/catLogos/codingLogo.png';

import '../styles/Utilities.scss';
import '../styles/Home.scss';

//turn into a class
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBar: false,
    };
  }

  render() {
    return (
      <>
        <div className="w-100 d-flex flex-row justify-content-between align-items-center py-3 px-4 text-primary" style={{ position: 'fixed', zIndex: 50 }}>
          <Nav.Link
            as={Link}
            to="/"
          >
            <h1 className="text-primary">Victoria Xu</h1>
          </Nav.Link>
          <MenuIcon
            style={{ fontSize: '40px' }}
            className={`${this.state.sideBar ? 'text-white' : 'menu-icon'} cursor-pointer font-weight-bold p-0 m-0`}
            onClick={() => this.setState({ sideBar: !this.state.sideBar })} />
        </div>
        <div
          className={`${this.state.sideBar ? 'side-menu' : 'side-menu-collapsed'} h-100 bg-primary p-5 d-flex flex-column align-items-start`}
          style={{ position: 'fixed', zIndex: 30, width: '20%' }}>
          <Nav.Link
            as={Link}
            to="/"
            className="p-0"
          >
            <div className="flex-column d-flex align-items-center py-3">
              {/* TODO: make img's change "onhover" by only exporting white outlines, and having an svg circle w fill change */}
              <img src={HomeLogo} alt="enso circle for home" style={{ height: '15vh' }} />
              <h3 className="side-menu-name p-2">home</h3>
            </div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Art"
            className="p-0"
          >
            <div className="flex-row d-flex align-items-center py-3">
              <img src={ArtLogo} alt="enso circle for home" style={{ height: '10vh' }} />
              <h4 className="side-menu-name p-3">art</h4>
            </div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Film"
            className="p-0"
          >
            <div className="flex-row d-flex align-items-center py-3">
              <img src={FilmLogo} alt="enso circle for home" style={{ height: '10vh' }} />
              <h4 className="side-menu-name p-3">film</h4>
            </div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Art"
            className="p-0"
          >
            <div className="flex-row d-flex align-items-center py-3">
              <img src={DesignLogo} alt="enso circle for home" style={{ height: '10vh' }} />
              <h4 className="side-menu-name p-3">design</h4>
            </div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Art"
            className="p-0"
          >
            <div className="flex-row d-flex align-items-center py-3">
              <img src={CSLogo} alt="enso circle for home" style={{ height: '10vh' }} />
              <h4 className="side-menu-name p-3">dev</h4>
            </div>
          </Nav.Link>
        </div>
      </>
    )
  }
}

export default withRouter(NavBar);