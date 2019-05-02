import React from 'react';

const Input = ({name, label, onChange, value, error, type }) => {

  return ( <div className="form-group">
  <label htmlFor={name}>{label}</label>
  <input 
   onChange={onChange}
   value ={value}
   name ={name}
   autoFocus
   type={type} 
   className="form-control" 
   id={name}  
   placeholder={type}/>
   {/* <small id="emailHelp" className="form-text text-muted">We'll never share your {name} with anyone else.</small> */}
{  error  &&  <div className="alert alert-danger">{error}</div>}
 </div> );
}
 
export default Input;