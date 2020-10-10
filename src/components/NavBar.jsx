import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import MenuIcon from '@material-ui/icons/Menu';
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
          className={`${this.state.sideBar ? 'side-menu' : 'side-menu-collapsed'} h-100 bg-primary p-5`}
          style={{ position: 'fixed', zIndex: 30, width: '20%' }}>
          <Nav.Link
            as={Link}
            to="/"
            className="p-0"
          >
            <h3 className="side-menu-name p-2 pt-5">home</h3>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Art"
            className="p-0"
          >
            <h3 className="side-menu-name p-2">art</h3>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Art"
            className="p-0"
          >
            <h3 className="side-menu-name p-2">film</h3>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Art"
            className="p-0"
          >
            <h3 className="side-menu-name p-2">design</h3>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Art"
            className="p-0"
          >
            <h3 className="side-menu-name p-2">dev</h3>
          </Nav.Link>
        </div>
      </>
    )
  }
}

export default withRouter(NavBar);