import React from 'react';
export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    if (this.state.counter <= 3) {
      return <button className='freezing' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.counter <= 6) {
      return <button className='cold' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.counter <= 9) {
      return <button className='cool' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.counter <= 12) {
      return <button className='warm' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.counter <= 15) {
      return <button className='hot' onClick={this.handleClick}>Hot Button</button>;
    } else {
      return <button className='fusion' onClick={this.handleClick}>Hot Button</button>;
    }
  }
}
