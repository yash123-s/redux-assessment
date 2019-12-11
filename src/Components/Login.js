import React from "react";
import './Login.css';

const initialState = {
  name: "",
  password: "",
  nameError: "",
  passwordError: ""
};
export default class Login extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.password.includes("A-z|1-9")) {
        passwordError = "invalid password, should include @/!/*/&";
    }

    if (passwordError || nameError) {
      this.setState({ passwordError, nameError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
    this.setState(initialState);
    }
  };

  render() {
    return (
      <div>
       <h1>Login PaGE</h1>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName :</label>
          <input name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
          <div 
          className="error" > {this.state.nameError}</div><br></br>
        </div>
        <div>
        <label>Password :</label>
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
          <div className="error">{this.state.passwordError}</div><br></br>
        </div>
       <div><button type="submit">Login</button></div> 
      </form>
      <div><button>Register</button></div>
      </div>
    );
  }
}
// // export default Login;



