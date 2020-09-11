import React from 'react';

import Navbar from 'components/Navbar/Navbar';
import ToggleButton from 'components/Button/ToggleButton';
import Landing from 'containers/Landing/Landing';
import './App.scss';


class App extends React.Component {

  state = {theme: 'light'}

  toggleTheme = () => {
    if (this.state.theme === 'light') {
      this.setState({theme: 'dark'});
    }
    else {
      this.setState({theme: 'light'});
    }
  }

  render() {
    return (
      <div className={ `app theme-${ this.state.theme }` }>
        <Navbar
          brand={
            <a className="navbar-item" href="#">home</a>
          }
          menu={
            <React.Fragment>
              <a className="navbar-item" href="#">about me</a>
              <a className="navbar-item" href="#">coding</a>
            </React.Fragment>
          }
          end={
            <ToggleButton type="mode" color="secondary" onToggle={ this.toggleTheme } />
          }
        />
        <Landing />
      </div>
    );
  }
}

export default App;
