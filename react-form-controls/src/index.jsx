import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = { username: '', password: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('State: ', this.state);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label name="username">
            Username
            <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
          <label name="password">
            Password
            <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);
