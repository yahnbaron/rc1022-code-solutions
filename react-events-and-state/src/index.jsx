import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    if (this.state.isClicked) {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });
    }
  }

  render() {
    if (this.state.isClicked) {
      return <button onClick={this.handleClick}>Thanks!</button>;
    } else {
      return <button onClick={this.handleClick}>{this.props.text}</button>;
    }
  }
}

const element = (
  <div>
    <CustomButton text="Click Me!" />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
