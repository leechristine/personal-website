import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

import Profile from 'components/Profile/Profile';
import About from 'components/About/About';
import './Landing.scss';

import cloud from 'assets/images/cloud.svg';
import stars from 'assets/images/stars.svg';


class App extends React.Component {
  render() {
    return (
      <div className="landing">
        <Parallax className="parallax" ref={ref => (this.parallax = ref)} pages={2}>
          {/* background - colors */}
          <ParallaxLayer className="bgr-one" offset={0} speed={0} />
          <ParallaxLayer className="bgr-two" offset={1} speed={0} />
          <ParallaxLayer className="bgr-three" offset={2} speed={0} style={{ backgroundColor: '#ace' }} />

          {/* background - stars */}
          <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: { stars }, backgroundSize: 'cover' }} />
          
          {/* page 1 - clouds */}
          <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={ cloud } style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={ cloud } style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={0.1} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={ cloud } style={{ display: 'block', width: '25%', marginLeft: '70%' }} />
            <img src={ cloud } style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
            <img src={ cloud } style={{ display: 'block', width: '20%', marginRight: '70%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={0.6} speed={0.2} style={{ opacity: 0.2 }}>
            <img src={ cloud } style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
            <img src={ cloud } style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
          </ParallaxLayer>

          {/*
          <ParallaxLayer offset={0.8} speed={-0.1} style={{ opacity: 0.4 }}>
            <img src={ cloud } style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
            <img src={ cloud } style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          </ParallaxLayer>
          */}

          {/* page 2 - clouds */}
          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={ cloud } style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={ cloud } style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={ cloud } style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            <img src={ cloud } style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img src={ cloud } style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
            <img src={ cloud } style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img src={ cloud } style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
            <img src={ cloud } style={{ display: 'block', width: '25%', marginLeft: '15%' }} />
            <img src={ cloud } style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
          </ParallaxLayer>

          {/* page 3 - clouds */}
          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img src={ cloud } style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
            <img src={ cloud } style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
          </ParallaxLayer>

          {/* page 1 - profile */}
          <ParallaxLayer className="parallax-profile" offset={0} speed={0.1} >
            <Profile />
            <ParallaxLayer offset={0} speed={0} onClick={() => this.parallax.scrollTo(1)} />
          </ParallaxLayer>

          {/* page 2 - about */}
          <ParallaxLayer className="parallax-about" offset={1} speed={0.7} >
            <About />
            <ParallaxLayer offset={0} speed={-0} onClick={() => this.parallax.scrollTo(0)} />
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}

export default App;
