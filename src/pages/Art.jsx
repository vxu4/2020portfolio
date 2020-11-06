import React from 'react';
import { Nav } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'
import AppsIcon from '@material-ui/icons/Apps';
import Carousel from '../components/carousel/carousel';
import carouselThumbnails from '../assets/carousels/carouselItems';
import { Redirect } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';
import '../styles/IndivPages.scss';


configureAnchors({ scrollDuration: 700 });

class Art extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'gallery',
    };
  }

  isActive = (route) => {
    const { location } = this.props;
    return location.pathname.startsWith(route);
  };
  onSubmit = () => {
    console.log('hit');
    return <Redirect to="/Home" />
  }
  render() {
    return (
      <div className="bg-white d-flex flex-column justify-content-center align-items-center" style={{ height: '1000px' }}>
        <ScrollableAnchor id={'art'}>
          <div style={{ height: '5vh' }} />
        </ScrollableAnchor>
        <Nav.Link
          as={Link}
          to="/Art"
        >
          <div className="p-5" onClick={this.onSubmit} >
            <AppsIcon className="grid-icon cursor-pointer" />
          </div>
        </Nav.Link>
        <Carousel slides={carouselThumbnails} />
      </div>
    )
  }
}

export default withRouter(Art);