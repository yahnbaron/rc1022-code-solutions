import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    if (!this.state.isOpen) {
      return <a onClick={this.handleClick}><i className="fa-solid fa-bars"></i></a>;
    } else {
      return (
        <div className='row'>
          <div className='col-20'>
            <h2>Menu</h2>
            <p>About</p>
            <p>Get Started</p>
            <p>Sign In</p>
          </div>
          <div className='col-80' onClick={this.handleClick}>
          </div>
        </div>
      );
    }
  }
}
