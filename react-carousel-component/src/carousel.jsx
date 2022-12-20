import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };

    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
    this.startTimer();
  }

  startTimer() {
    this.timerId = setInterval(() => {
      this.handleNextClick();
    }, 3000);
  }

  handlePrevClick() {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + this.props.images.length - 1) % this.props.images.length
    }));
    clearInterval(this.timerId);
    this.startTimer();
  }

  handleNextClick() {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.images.length
    }));
    clearInterval(this.timerId);
    this.startTimer();
  }

  handleDotClick(index) {
    this.setState({ currentIndex: index });
    clearInterval(this.timerId);
    this.startTimer();
  }

  render() {
    const currentImage = this.props.images[this.state.currentIndex];
    return (
      <div className="container">
        <div className="row gallery align-center space-between">
          <div className="col-auto">
            <i className="fa-solid fa-chevron-left left-button" onClick={this.handlePrevClick}></i>
          </div>
          <div className="col-auto">
            <img src={currentImage}></img>
          </div>
          <div className="col-auto">
            <i className="fa-solid fa-chevron-right right-button" onClick={this.handleNextClick}></i>
          </div>
        </div>
        <div className="row dots">
          {this.props.images.map((image, index) => (
            <div key={index} className="col-auto">
              <span className={`fa-solid circle${index} fa-${index === this.state.currentIndex ? 'circle' : 'o'}`}
                onClick={() => this.handleDotClick(index)}>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
