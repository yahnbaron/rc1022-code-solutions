import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
    this.state = {
      password: ''
    };
  }

  handleText(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    if (this.state.password.length === 0) {
      return (
        <div>
          <form>
            <label className='block'>Password</label>
            <input name='password' type='text' value={this.state.password} onChange={this.handleText}></input>
            <i className="fa-solid fa-xmark red x-or-check"></i>
            <p className='red'>A password is required.</p>
          </form>
        </div>
      );
    } else if (this.state.password.length < 8) {
      return (
        <div>
          <form>
            <label className='block'>Password</label>
            <input name='password' type='text' value={this.state.password} onChange={this.handleText}></input>
            <i className="fa-solid fa-xmark red x-or-check"></i>
            <p className='red'>Your password is too short.</p>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <form>
            <label className='block'>Password</label>
            <input name='password' type='text' value={this.state.password} onChange={this.handleText}></input>
            <i className="fa-solid fa-check green x-or-check"></i>
          </form>
        </div>
      );
    }
  }
}
