import React from 'react';
import landingPic from '../assets/home_landingPic_3.jpg';
import vxx from '../assets/figma/home_artPic.png';
import filmPic from '../assets/figma/home_filmPic.png';
import devPic from '../assets/figma/home_devPic.png';
import artPic from '../assets/flowerNet.jpg';
import designPic from '../assets/lattice.jpg';
import banner from '../assets/VXXBanner_md.png';
import VXX from '../assets/VXX_sm.png';
import arrow from '../assets/arrow.svg';
import Art from './Art';
import Film from './Film';
import '../styles/Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImage: 'vxx',
      banner: true,
      focus: undefined,
      landingText: true
    };
  }
  //maybe... componentdidmount to remove anchors? look thru tabs

  //TODO: menu icon
  //arrow function? consider making this all a banner component? and rendering a totally separate component underneath?
  render() {
    const fadeBanner = (subCat) => {
      this.setState({ banner: false, focus: subCat });
    }

    return (
      <>
        <div className="home">
          {/* background images */}

          <img src={landingPic} alt="ink painting" className="fade w-100"
            style={{ opacity: `${this.state.bgImage === 'landingPic' ? 1 : 0}`, position: 'fixed', top: 0 }} />
          <img src={artPic} alt="flower net on grass" className="fade w-100"
            style={{ opacity: `${this.state.bgImage === 'artPic' ? 1 : 0}`, position: 'fixed', top: 0 }} />
          <img src={filmPic} alt="Alexis dancing with the sky" className="fade w-100"
            style={{ opacity: `${this.state.bgImage === 'filmPic' ? 1 : 0}`, position: 'fixed', top: 0 }} />
          <img src={devPic} alt="Frontend coding" className="fade w-100"
            style={{ opacity: `${this.state.bgImage === 'devPic' ? 1 : 0}`, position: 'fixed', top: 0 }} />
          <img src={vxx} alt="flower net on back" className="fade w-100"
            style={{ opacity: `${this.state.bgImage === 'vxx' ? 1 : 0}`, position: 'fixed', top: 0 }} />
          <img src={designPic} alt="flower net on back" className="fade w-100"
            style={{ opacity: `${this.state.bgImage === 'designPic' ? 1 : 0}`, position: 'fixed', top: 0 }} />

          {/* TODO: make an icon that is 4 sq. grid to open up to grid view of art works */}


          {/* banner */}
          <div className="fade d-flex flex-column align-items-center justify-content-center"
            style={{ opacity: `${this.state.landingText ? 1 : 1}` }}>
            <img src={banner} alt="vxx banner" className="w-100 fade"
              style={{ opacity: `${this.state.banner ? 1 : 0}`, width: "100vw", maxWidth: '100vw', marginTop: '10vw', zIndex: 10 }} />
            <img src={VXX} alt="vxx" className=""
              style={{ opacity: `${this.state.focus ? 1 : 1}`, position: 'static', marginTop: '-30vw', marginLeft: '10px', width: '21vw', zIndex: 10 }} />
            <img src={VXX} alt="vxx" className="vxx-hover cursor-pointer"
              onMouseOver={() => { this.setState({ bgImage: 'vxx' }) }}
              style={{ position: 'static', marginTop: '-140px', marginLeft: '5px', width: '13.5%', zIndex: 10 }} />

            {/* subcategories */}
            <span className="d-flex flex-row font-weight-bold" style={{ zIndex: 20, marginTop: '80px' }}>
              {/* TODO: differentiate hover state from selected state! and probably don't change bg if something is selected, until other thing selected */}
              <h2 className={`${(this.state.bgImage === 'artPic' || this.state.focus === 'artPic') ? 'subcat-hover' : 'subcat'} px-5 py-3 mx-2 mt-5 rounded-lg`}
                onMouseOver={() => { if (!this.state.focus) {this.setState({ bgImage: 'artPic' })} }}
                onClick={() => { fadeBanner('art') }}>art</h2>
              <h2 className={`${(this.state.bgImage === 'filmPic' || this.state.focus === 'filmPic') ? 'subcat-hover' : 'subcat'} px-5 py-3 mx-2 mt-5 rounded-lg`}
                onMouseOver={() => { if (!this.state.focus) { this.setState({ bgImage: 'filmPic' }) }}}
                onClick={() => { fadeBanner('film') }}>film</h2>
              <h2 className={`${(this.state.bgImage === 'designPic' || this.state.focus === 'designPic') ? 'subcat-hover' : 'subcat'} px-5 py-3 mx-2 mt-5 rounded-lg`}
                onMouseOver={() => { if (!this.state.focus) { this.setState({ bgImage: 'designPic' }) }}}
                onClick={() => { fadeBanner('design') }}>design</h2>
              <h2 className={`${(this.state.bgImage === 'devPic' || this.state.focus === 'devPic') ? 'subcat-hover' : 'subcat'} px-5 py-3 mx-2 mt-5 rounded-lg`}
                onMouseOver={() => { if (!this.state.focus) { this.setState({ bgImage: 'devPic' }) }}}
                onClick={() => { fadeBanner('dev') }}>dev</h2>
            </span>

            <a href={`#${this.state.focus}`}>
              <img src={arrow} alt="vxx" className="vxx-hover cursor-pointer"
                onClick={() => this.setState({ landingText: false })}
                style={{ position: 'fixed', bottom: 50, zIndex: 10, width: "6vw", opacity: `${this.state.focus && this.state.landingText ? 1 : 0}` }} />
            </a>

          </div>
        </div>

        <div style={{ height: '1800px', position: 'sticky', maxWidth: '100vw'}} className="overflow-scroll w-100">
          <div className="" style={{ height: '600px', maxWidth: '100vw' }}> </div>
          <Art />
          <Film />
        </div>

      </>
    )
  }
}

export default Home;