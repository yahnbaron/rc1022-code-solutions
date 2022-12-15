import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      counter: 0,
      isCounting: false,
      intervalId: 0
    };
  }

  handleClick() {
    if (this.state.isOn) {
      this.setState({ isOn: false });
    } else {
      this.setState({ isOn: true });
    }
  }

  render() {
    if (this.state.isCounting) {
      return (
        <div>
          <div className="circle">
            <p className="counter">{this.state.counter}</p>
          </div>
          <i className="fa-solid fa-pause" onClick={this.handleButtonClick}></i>
        </div>
      );
    } else {
      return (
        <div>
          <div className="circle">
            <p className="counter">{this.state.counter}</p>
          </div>
          <i className="fa-solid fa-play" onClick={this.handleButtonClick}></i>
        </div>
      );
    }
  }
}
