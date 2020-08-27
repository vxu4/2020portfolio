import React from 'react';
import landingPic from '../assets/home_landingPic_3.jpg';
import artPic from '../assets/figma/home_artPic.png';
import filmPic from '../assets/figma/home_filmPic.png';
import devPic from '../assets/figma/home_devPic.png';

import banner from '../assets/figma/banner.png';


import '../styles/Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImage: landingPic
    };
  }

  render() {
    return (
      <div className="home w-100 "
      // style={{ backgroundImage: `url(${this.state.bgImage})`, backgroundPosition: 'center center', backgroundSize: 'cover', height: '100vh' }}
      >
        <img src={this.state.bgImage} className="w-100"/>
        
         {/* <li id="background"><a href="facebook.com"></a></li> */}


        <div className="d-flex flex-column align-items-center justify-content-center"
        style={{position: "fixed", top: '18vh'}}>
          <img src={banner} className="w-100" style={{ width: "100%", maxWidth: '100vw', zIndex: 10 }} />
          <span className="d-flex flex-row" style={{ position: 'fixed', top: '60vh', zIndex: 20 }}>
            <h2 className="subcat p-5" onMouseOver={() => { this.setState({ bgImage: artPic }) }}>art</h2>
            <h2 className="subcat p-5" onMouseOver={() => { this.setState({ bgImage: filmPic }) }}>film</h2>
            <h2 className="subcat p-5" onMouseOver={() => { this.setState({ bgImage: devPic }) }}>dev</h2>
            <h2 className="subcat p-5">design</h2>
          </span>
        </div>
      </div>
    )
  }
}

export default Home;