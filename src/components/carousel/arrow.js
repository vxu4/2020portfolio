import React from 'react';
// import device from "../styles/device";
// import colors from "../styles/palette";
import '../../styles/Utilities.scss';
import '../../styles/Carousel.scss'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Arrow = ({ id, onClick, right }) => (
    <>
    {right ? 
        <div className="arrow-icon orient-right"
            id={ id }
            onClick={ onClick }>
              <ArrowBackIosIcon />
        </div> : 
        <div className="arrow-icon orient-left"
            id={ id }
            onClick={ onClick }>
            <ArrowForwardIosIcon />
        </div>
    }
    </>
)

export default Arrow;