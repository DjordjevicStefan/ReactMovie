import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = {
    date: {},
    errors: {}
  };

  validateProperty = input => {
    const obj = { [input.name]: input.value };
    let schema = { [input.name]: this.schema[input.name] };

    /////// posto ovde vraca result obj uvek mozemo da uradimo destracturing umesto let result stavimo {error} to je isto kao da pise result.error
    let { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };

    let result = Joi.validate(this.state.data, this.schema, options);
    console.log(result);

    if (!result.error) return null;

    const errors = {};

    for (let item of result.error.details) {
      errors[item.path] = item.message;
    }

    console.log(errors);

    return errors;

    /////////////// stari nacin bez Joi samo da se vidi da li ima nesto upisano

    //  if (this.state.data.username.trim() === "") { errors.username = "username is required " } ;
    //  if (this.state.data.password.trim() === "") { errors.password = "Password is required " } ;

    //  return Object.keys(errors).length === 0 ? null : errors ;
  };

  // saveMovie = () => {
  //    console.log("movie saved in memory");
     

  // }

  

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) {
      return;
    }

    this.doSubmit();
  };

 

  handleChange = e => {
    

    let errors = { ...this.state.errors };
    let errorMsg = this.validateProperty(e.currentTarget);
    if (errorMsg) errors[e.currentTarget.name] = errorMsg;
    else delete errors[e.currentTarget.name];

    let data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data: data, errors: errors });
  };

  renderBtn = label => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };



  // renderSaveBtn = label =>{
  //   return (
  //     <button disabled={this.saveMovie()} className="btn btn-primary">
  //       {label}
  //     </button>
  //   );

  // }

  ////// zadavanje defotne vrednosti nekom argumentu , ovde primer type
  renderInput = (name, label, type = "text") => {
    return (
      <Input
        type={type}
        name={name}
        value={this.state.data[name]}
        onChange={this.handleChange}
        label={label}
        error={this.state.errors[name]}
      />
    );
  };

  handleSelect = e => {
    let selected = e.target.value ;
    this.setState({ genre : selected });
  }

  renderSelectInput = (name, label ,opt1,opt2,opt3 ) => {
    return (
      <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select onChange={this.handleSelect} className="form-control">
      
       name ={name}
       autoFocus
       type="text" 
       className="form-control" 
       id={name}  
       <option value={opt1}>{opt1}</option>
      <option value={opt2}>{opt2}</option>
      <option value={opt3}>{opt3}</option>
      
        </select>
       
     </div> );

    
  };

}

export default Form;
