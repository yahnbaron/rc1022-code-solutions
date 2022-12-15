import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOn: true };
  }

  handleClick() {
    if (this.state.isOn) {
      this.setState({ isOn: false });
    } else {
      this.setState({ isOn: true });
    }
  }

  render() {
    const onButton = <input type="checkbox" onClick={this.handleClick} className="on" />;
    const onLabel = <label>On</label>;
    const offButton = <input type="checkbox" onClick={this.handleClick} className="off" />;
    const offLabel = <label>Off</label>;
    if (this.state.isOn) {
      return <div>{onButton}{onLabel}</div>;
    } else {
      return <div>{offButton}{offLabel}</div>;
    }
  }
}
