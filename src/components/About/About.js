import React from 'react';
import Typed from 'react-typed';

import './About.scss';
import wharfMe from 'assets/images/me-wharf.jpg'
import sunflowerMe from 'assets/images/me-sunflowers.jpg'
import sunset from 'assets/images/sunset.jpg'


class About extends React.Component {

  state = {
    isPageOne: true,
    isPageTwo: false,
    pageTwoIsVisible: false
  }

  goToPageOne = () => {
      this.setState({
        isPageOne: true,
        isPageTwo: false
      });
  }

  goToPageTwo = () => {
      this.setState({
        isPageOne: false,
        isPageTwo: true
      });
  }

  openPageTwo = () => {
      this.setState({
        isPageOne: false,
        isPageTwo: true,
        pageTwoIsVisible: true
      });
  }

  render() {
    const {
      isPageOne = this.state.isPageOne ? 'active' : 'inactive',
      isPageTwo = this.state.isPageTwo ? 'active' : 'inactive',
      pageTwoIsVisible = this.state.pageTwoIsVisible ? 'visible' : 'invisible'
    } = this.props;

    return (
      <div className="about-container">
        {/*
        <div className="about-header">about me</div>
        */}
        <div className="window-container">
          <div className="window-head">
            <div className="window-control-container">
              <div className="window-control close" />
              <div className="window-control minimize" />
              <div className="window-control expand" />
            </div>
            <div className="window-tab-container">
              <button className={ `window-tab ${ isPageOne }` }
                      onClick={ this.goToPageOne }>
                me
              </button>
              <button className={ `window-tab ${ isPageTwo } ${ pageTwoIsVisible }` }
                      onClick={ this.goToPageTwo }>
                me22
              </button>
            </div>
          </div>
          <div className="window-bar">
            <div className={ `window-address ${ isPageOne }` }>christinelee.ca/me</div>
            <div className={ `window-address ${ isPageTwo }` }>christinelee.ca/me22</div>
          </div>
          <div className={ `window-page-one ${ isPageOne }` }>
            <Typed className="window-page-one-header"
              strings={[
                'print(<span class="primary">"hello world!"</span>)',
                'System.<span class="primary">out</span>.println(<span class="primary">"hello world!"</span>)&semi;',
                'printf(<span class="primary">"hello world!"</span>)&semi;',
                'cout &lt;&lt; <span class="primary">"hello world!"</span>&semi;'
              ]}
              typeSpeed={65}
              backSpeed={40}
              loop
            />
            <div className="window-page-one-text">
              I'm a student at the University of Toronto currently based in Vancouver, Canada,
              with a passion for software development! I am always looking to learn and understand
              new and existing technologies and I wish to utilise my skills and knowledge to create
              technology that will bring impact to the end user. Though coding is one of my main activities,
              I also enjoy spending my downtime colouring, playing Animal Crossing and watching the sunset ☺
            </div>
            <button className="window-page-one-link" onClick={ this.openPageTwo }>
              see some pictures!
            </button>
          </div>
          <div className={ `window-page-two ${ isPageTwo }` }>
            <div className="window-page-two-image-container">
              <img className="window-page-two-image" src={ wharfMe }></img>
              <div className="window-page-two-image-text">
                <span className="primary" style={{ fontWeight: 600 }}>this is: </span>
                me! 👋
              </div>
            </div>
            <div className="window-page-two-image-container">
              <img className="window-page-two-image" src={ sunset }></img>
              <div className="window-page-two-image-text">
                <span className="primary" style={{ fontWeight: 600 }}>this is: </span>
                my love for sunsets ✨
              </div>
            </div>
            <div className="window-page-two-image-container">
              <img className="window-page-two-image" src={ sunflowerMe }></img>
              <div className="window-page-two-image-text">
                <span className="primary" style={{ fontWeight: 600 }}>this is: </span>
                me again 🌻
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;