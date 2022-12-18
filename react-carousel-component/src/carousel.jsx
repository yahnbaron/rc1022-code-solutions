import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 1 };
  }

  handleClick() {
    this.setState({ currentImage: this.state.currentImage + 1 });
  }

  render() {
    return <div></div>;
  }
}
