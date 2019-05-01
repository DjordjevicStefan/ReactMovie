import React, { Component } from 'react';
import Joi from "joi-browser";
import Form from "./common/form";

class Register extends Form {
  state = {
    data: { username: "", password: "", name : "" },
    errors: {}
  };

  schema = {
    username: Joi.string().email({ minDomainSegments: 2 })
      .required()
      .label("Username"),
    password: Joi.string()
      .min(3)
      .max(30)
      .required()
      .label("Password"),
      name: Joi.string()
      .required()
      .label("Name")
  };



  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
        {this.renderInput("username" , "Username")}
        {this.renderInput("password" , "Password", "password")}
        {this.renderInput("name" , "Name")}

        {this.renderBtn("Register")}
        </form>
        
      </React.Fragment>
    );
  }
}
 
 
export default Register;