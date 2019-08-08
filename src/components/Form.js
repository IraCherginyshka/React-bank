import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class Form extends Component {

  state = {
    email: "",
    password: "",
    userError: undefined,
    passwordError: undefined
  }

  onSubmit = () => {
  }

  onChangeName = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.target.value === "") {
      this.setState({
        userError: undefined
      })
    } else if (event.target.checkValidity()) {
      this.setState({
        email: event.target.value,
        userError: false
      })
    } else {
      this.setState({
        userError: `Invalid Username`
      })
    }
  }

  onChangePassword = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.target.value === "") {
      this.setState({
        passwordError: undefined
      });
    } else if (event.target.value.length < 8) {
      this.setState({
        passwordError: true
      });
    } else {
      this.setState({
        password: event.target.value,
        passwordError: false
      });
    }
  }

  render() {

    return (
      <form onSubmit={this.onSubmit} >
        <Input
          type="email"
          icon="user"
          placeholder="E-mail"
          name="user"
          errors={this.state.userError}
          onChange={this.onChangeName}
        />
        <Input
          type="password"
          icon="lock"
          placeholder="Password"
          name="password"
          errors={this.state.passwordError}
          onChange={this.onChangePassword}
        />

        <Button />

        <p className="button__caption">Forgot your password? 
          <a href="#" className="button__link"> Reset it here</a>
        </p>
      </form>
    )
  }
}
export default Form;