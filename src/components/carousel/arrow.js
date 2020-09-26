import React from 'react';
// import device from "../styles/device";
// import colors from "../styles/palette";
import '../../styles/Utilities.scss';
import '../../styles/Carousel.scss'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Arrow = ({ id, onClick, right }) => (
    <div>
    {right ? 
        <div className="arrow-icon orient-right"
            // style={{zIndex: 99}}
            id={ id }
            onClick={ onClick }>
              <ArrowBackIosIcon />
            {/* <img src={arrow} alt="arrow" style={{width: '6vw'}}></img> */}
        </div> : 
        <div className="arrow-icon orient-left"
            id={ id }
            onClick={ onClick }>
            {/* <img src={arrow} alt="arrow"></img> */}
            <ArrowForwardIosIcon />
        </div>
    }
    </div>
)

export default Arrow;