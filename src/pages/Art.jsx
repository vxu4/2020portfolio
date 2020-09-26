import React from 'react';
import landingPic from '../assets/home_landingPic_3.jpg';
import vxx from '../assets/figma/home_artPic.png';
import artPic from '../assets/flowerNet.jpg';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'
import AppsIcon from '@material-ui/icons/Apps';
import arrow from '../assets/arrow.svg';
import Carousel from '../components/carousel/carousel';
import carouselThumbnails from '../assets/carouselItems';


configureAnchors({ scrollDuration: 900 });

const Art = () => {
  return (
    <ScrollableAnchor id={'art'}>

    <div className="bg-white d-flex flex-column justify-content-center align-items-center" style={{ height: '800px' }}>
      {/* <img src={artPic} alt="flower net on grass" className="w-50" /> */}
      <AppsIcon className="mb-5"/>
      <Carousel slides={carouselThumbnails}/>

    </div>
    </ScrollableAnchor>

  )
}

export default Art;