import React from 'react';
import Slide from "./slide";
import Arrow from "./arrow";
import '../../styles/Utilities.scss';
import '../../styles/Carousel.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.carouselThumbnails = props.slides;
    this.state = {
      currIndex: 0,
      slideDirection: 'next',
      sliding: null
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.doSliding = this.doSliding.bind(this);
  }

  doSliding(currIndex, direction) {
    this.setState({
      currIndex: currIndex,
      slideDirection: direction,
      sliding: true
    })
    //you just need enough time to make the state change--the transition will happen no matter what by the transition time
    setTimeout(() => {
      this.setState({
        sliding: false
      })
      //slide speed not effected by this number, but the delay (time between press and transition) is effected
      //because the transition is only triggered once sliding is set to false. 
      //so this time out is just the delay (in milliseconds, 1000 ms = 1 s)
    }, 50)
  }

  prevSlide = (event) => {
    //possible IMPROVEMENT: could have used the following and above edit to consolidate the function into one
    //which would also make the 'prev' and 'next' a variable :)
    const curr = this.state.currIndex;
    const numItems = this.carouselThumbnails.length || 1;
    //updates currIndex based on next or prev
    this.doSliding(curr === 0 ? numItems - 1 : curr - 1, 'prev')
  }

  nextSlide() {
    const curr = this.state.currIndex;
    const numItems = this.carouselThumbnails.length || 1;
    this.doSliding(curr === numItems - 1 ? 0 : curr + 1, 'next');
  }

  getOrder(itemIndex) {
    const curr = this.state.currIndex;
    const numItems = this.carouselThumbnails.length || 1;
    //if itemIndex less than curr, then return the order as numItems - diff(bw curr and itemindex)
    //so if currIndex is 0, numItems = 5
    // (0 = 0), (1 = 1), (2 = 2);
    //if currIndex is 1
    // (0 = 4(aka last)), (1 = 0), (2 = 1), (3 = 2)
    //if currIndex is 2
    // (0 = 3), (1 = 4), (2 = 0), (3 = 1)
    // 2, 3, 4, 0, 1
    //CONCLUSION: whatever the current index is, its always made "first" in carousel's flex order
    //thus its always rotating, and this way---there's never a "break" in the carousel
    if (itemIndex - curr < 0) {
      return numItems - Math.abs(itemIndex - curr);
    }

    return itemIndex - curr;
  }

  render() {
    const transformReturn = (sliding, direction) => {
      if (!sliding) return 'translateX(calc(-100%))'
      if (direction === 'prev') return 'translateX(calc(2*(-100%)))'
      return 'translateX(0%)'
    }
    return (
      <div className="d-flex flex-row w-100 overflow-hidden carousel">
        <Arrow id="prev" onClick={this.prevSlide} right/>
        <Arrow id="next" onClick={this.nextSlide}/>
        <div className="d-flex"
          style={{
            transition: `${this.state.sliding ? 'none' : 'transform 0.8s ease'}`,
            transform: `${transformReturn(this.state.sliding, this.state.slideDirection)}`
          }}>
          {
            this.carouselThumbnails.map((thumbnailInfo, index) =>
              //re-arranges the flex order based on the current index
              <div className="carousel-slot" id={index} key={index} style={{order: `${this.getOrder(index)}`}} order={this.getOrder(index)}>
                <Slide thumbnail={thumbnailInfo} />
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Carousel;
