import React from "react";
import Gallery from '../components/gallery';
import landingPic from '../assets/home_landingPic_3.jpg';
import vxx from '../assets/figma/home_artPic.png';
import artPic from '../assets/flowerNet.jpg';
import ArtThumbnails from '../assets/art';

const IMAGES =
  [{
    src: artPic,
    thumbnail: artPic,
    thumbnailWidth: 'auto',
    thumbnailHeight: 'auto',
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: vxx,
    thumbnail: vxx,
    thumbnailWidth: 'auto',
    thumbnailHeight: 'auto',
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: landingPic,
    thumbnail: landingPic,
    thumbnailWidth: 'auto',
    thumbnailHeight: 'auto',
    caption: "Boats (Jeshu John - designerspics.com)"
  }]
export const Art_Overall = () => (
  <div className="p-5 m-5">
    <Gallery image_list={ArtThumbnails}
      enableLightbox={false}
      enableImageSelection={false} />
  </div>
)

export default Art_Overall;