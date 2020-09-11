import React from 'react';
import './Navbar.scss';

class Navbar extends React.Component {
  render() {
    const {
      brand,
      menu,
      end
    } = this.props;

    return (
      <div className="navbar-container">
        <div className="navbar-start">
          <div className="navbar-brand">
            {/*
            { brand }
            */}
          </div>
          <div className="navbar-menu">
            {/*
            { menu }
            */}
          </div>
        </div>
        <div className="navbar-end">
          { end }
        </div>
      </div>
    );
  }
}
export default Navbar;