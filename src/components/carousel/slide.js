import React from "react";
// import styled from "styled-components";
// import { ThemeProvider } from "styled-components";

import InfoThumbnail from "./infoThumbnail";
import ImgThumbnail from "./imgThumbnail";
// import device from "../styles/device";


// const ImageSlide = styled.img`
//     width: 100%;
//     -webkit-filter: blur(10px) brightness(40%);
//     filter: blur(10px) brightness(40%);
//     margin: 0px;
//     padding: 0px;
//     @media ${device.mobileS} {
//         height: 800px;
//     }
    
//     @media ${device.laptop} {
//         height: 500px;
//     }
// `;

// const OverLay = styled.div`
//     background-color: ${props => props.theme.transparent};
//     display: grid;  
//     align-items: center;
//     position: relative;
//     //THIS is redundant, because you have the carouselslot controlling your size via flex:
//     // width: 100vw;
//     padding: 0px;
//     @media ${device.mobileS} {
//         height: 800px;
//         margin-top: -800px;
//         grid-template-columns: auto 70vw auto;
//         grid-template-rows: auto auto;
//     }
    
//     @media ${device.laptop} {
//         grid-template-columns: auto 300px 500px auto;
//         grid-template-rows: auto;
//         height: 500px;
//         margin-top: -500px;
//     }
// `;

export const Slide = ({ ...props }) => (
  // <ThemeProvider theme={props.thumbnail.theme}>
  <div style={{width: '100vw'}} className="bg-white m-0 p-0 d-flex flex-row justify-content-center align-items-center">
    {/* TODO: somehow make the constraint on height not on width */}
    <img className="m-0 p-0" style={{height: '60vh'}} src={props.thumbnail.imgUrl} alt="art images" />
    {/* <OverLay>
      <ImgThumbnail src={props.thumbnail.imgUrl}></ImgThumbnail>
      <InfoThumbnail thumbnail={props.thumbnail}></InfoThumbnail>
    </OverLay> */}
  </div>
  // </ThemeProvider>
)

export default Slide;