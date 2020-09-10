import React from 'react';
import './RoundButton.scss';

class RoundButton extends React.Component {
  render() {
    const {
      text,
      color,
      hover,
      style
    } = this.props;

    return (
      <button className={`round-btn ${ color }-btn ${ style }-btn ${ hover }-btn`}>{ text }</button>
    );
  }
}

export default RoundButton;