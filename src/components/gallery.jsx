import React from "react";
import Gallery from 'react-grid-gallery';


export const GalleryView = ({image_list}) => (
  <Gallery images={image_list} rowHeight={300} margin={15} />
  // <div className="d-flex flex-row justify-content-center align-items-center" style={{overflow: 'wrap'}}>
  // {
  //   image_list.map((item) => {
  //     return (
  //       <img src={item.src} style={{maxHeight: '30vh', width: '30vw'}} /> 
  //     )
  //   })
  // }
  // </div>
)

export default GalleryView;