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

    <div className="bg-white d-flex flex-column justify-content-center align-items-center" style={{ height: '800px' }}>
      <ScrollableAnchor id={'art'}>
        <div style={{height: '10vh'}} />
      </ScrollableAnchor>
      <AppsIcon className="mb-5 text-dark cursor-pointer"/>
      <Carousel slides={carouselThumbnails}/>
    </div>

  )
}

export default Art;