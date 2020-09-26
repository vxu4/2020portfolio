import React from 'react';
import landingPic from '../assets/home_landingPic_3.jpg';
import vxx from '../assets/figma/home_artPic.png';
import filmPic from '../assets/figma/home_filmPic.png';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({ scrollDuration: 900 });

const Film = () => {
  return (
    <ScrollableAnchor id={'film'}>
    <div className="bg-white d-flex flex-row justify-content-center align-items-center" style={{ height: '800px' }}>
      <img src={filmPic} alt="flower net on grass" className="w-50" />
    </div>
    </ScrollableAnchor>

  )
}

export default Film;