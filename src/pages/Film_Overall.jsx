import React from "react";
import Carousel from '../components/carousel/carousel';
import beluThumbnails from '../assets/carousels/filmOverallCarousel/beluConvo';
import estrellaThumbnails from '../assets/carousels/filmOverallCarousel/estrella';
import landingThumbnails from '../assets/carousels/filmOverallCarousel/landing';

export const Film_Overall = () => (
  <div className="p-5 m-5 w-100 h-100">
    <div className="w-100 py-4">
      <Carousel slides={estrellaThumbnails} />
    </div>
    <div className="w-100 py-4">
      <Carousel slides={beluThumbnails} />
    </div>
    <div className="w-100 py-4">
      <Carousel slides={landingThumbnails} />
    </div>
  </div>
)

export default Film_Overall;