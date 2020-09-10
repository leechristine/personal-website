import React from 'react';
import './ToggleButton.scss';

class ToggleButton extends React.Component {

  state = { initialIcon: <React.Fragment />,
            finalIcon: <React.Fragment />,
            isInitial: true
          }

  setTypeIcons = () => {
    if (this.props.type === 'mode') {
      this.setState({
        initialIcon: '☀️',
        finalIcon: '🌙'
      });
    }
  }

  toggleIcon() {
    this.setState({ isInitial: !this.state.isInitial });
  }

  componentDidMount() {
    this.setTypeIcons();
  }

  render() {
    const {
      color,
      style,
      hover
    } = this.props;

    return (
      <button className={`toggle-btn ${ color }-btn ${ style }-btn ${ hover }-btn`} onClick={ () => {
        this.toggleIcon();
        this.props.onToggle();
      }}>
        { this.state.isInitial && this.state.initialIcon }
        { !this.state.isInitial && this.state.finalIcon }
      </button>
    );
  }
}

export default ToggleButton;