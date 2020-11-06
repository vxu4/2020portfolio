import React from 'react';
import { Nav } from 'react-bootstrap';
import AppsIcon from '@material-ui/icons/Apps';
import filmCarousel from '../assets/carousels/filmCarousel';
import Carousel from '../components/carousel/carousel';
import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({ scrollDuration: 900 });

const Film = () => {
  return (
    <div className="bg-white d-flex flex-column justify-content-center align-items-center" style={{ height: '1000px' }}>
    <ScrollableAnchor id={'film'}>
      <div style={{ height: '5vh' }} />
    </ScrollableAnchor>
    <Nav.Link
      as={Link}
      to="/Art"
    >
      <div className="p-5"
      // onClick={this.onSubmit}
      >
        <AppsIcon className="grid-icon cursor-pointer" />
      </div>
    </Nav.Link>
    <Carousel slides={filmCarousel} />
  </div>
    // <ScrollableAnchor id={'film'}>
    // <div className="bg-white d-flex flex-row justify-content-center align-items-center" style={{ height: '800px' }}>
    //   <img src={filmPic} alt="Alexis in Estrella" className="w-50" />
    // </div>
    // </ScrollableAnchor>
    //     <Carousel slides={carouselThumbnails} />
  )
}

export default Film;