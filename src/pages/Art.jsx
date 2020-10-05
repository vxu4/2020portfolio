import React from 'react';
import landingPic from '../assets/home_landingPic_3.jpg';
import vxx from '../assets/figma/home_artPic.png';
import artPic from '../assets/flowerNet.jpg';
import { Navbar, Nav, Button } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'
import AppsIcon from '@material-ui/icons/Apps';
import arrow from '../assets/arrow.svg';
import Carousel from '../components/carousel/carousel';
import carouselThumbnails from '../assets/carouselItems';
import { Redirect } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';
import Art_overall from './Art_Overall';
import Gallery from '../components/gallery';
import { GpsFixed } from '@material-ui/icons';


configureAnchors({ scrollDuration: 700 });

class Art extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'gallery',
    };
  }

  isActive = (route) => {
    const { location } = this.props;
    return location.pathname.startsWith(route);
  };
  onSubmit = () => {
    console.log('hit');
    return <Redirect to="/Home" />
  }
  render() {
    return (
      <div className="bg-white d-flex flex-column justify-content-center align-items-center" style={{ height: '1000px' }}>
        <ScrollableAnchor id={'art'}>
          <div style={{ height: '5vh' }} />
        </ScrollableAnchor>
        <Nav.Link
          as={Link}
          to="/Art"
        >
          <AppsIcon className="mb-5 text-dark cursor-pointer" onClick={this.onSubmit} />
        </Nav.Link>
        <Carousel slides={carouselThumbnails} />
      </div>
    )
  }
}

export default withRouter(Art);