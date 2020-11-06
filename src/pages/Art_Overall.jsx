import React from "react";
import Gallery from '../components/gallery';
import ArtThumbnails from '../assets/carousels/art';

export const Art_Overall = () => (
  <div className="p-5 m-5">
    <Gallery image_list={ArtThumbnails}
      enableLightbox={false}
      enableImageSelection={false} />
  </div>
)

export default Art_Overall;