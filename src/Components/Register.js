import React, { Component } from 'react';
import './Login.css';
import browserHistory from '../Utils/browserHistory'


class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["lName"] = "";
        fields["fname"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
    }                                                                                

  }
  navigate(){
      browserHistory.push('/user')
    }
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["fname"]) {
      formIsValid = false;
      errors["fname"] = "*Please enter your Firstname.";
    }

    if (typeof fields["fname"] !== "undefined") {
      if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["fname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["lName"]) {
      formIsValid = false;
      errors["lName"] = "*Please enter your Lastname.";
    }

    if (typeof fields["lName"] !== "undefined") {
      if (!fields["lName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lName"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,}).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }



render() {
  return (
  <div id="main-registration-container">
   <div id="register">
      <h3>Registration page</h3>
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <label>First Name:</label>
      <input type="text" name="fname" value={this.state.fields.fname} onChange={this.handleChange} />
      <div className="error">{this.state.errors.fname}</div>
      <label>Last Name:</label>
      <input type="text" name="lName" value={this.state.fields.lName} onChange={this.handleChange}  />
      <div className="error">{this.state.errors.lName}</div>
      <label>User Name:</label>
      <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange}   />
      <div className="error">{this.state.errors.username}</div>
      <label>Password</label>
      <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
      <div className="error">{this.state.errors.password}</div>
      <button type="submit" onClick={this.Register} className="register" value="Register">register</button>
      </form>
  </div>
  <button type="submit" onClick={this.navigate}>next</button>
</div>

    );
}}

export default Register;