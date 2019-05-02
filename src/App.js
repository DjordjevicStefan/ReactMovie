import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import NavBar from "./components/common/navbar";
import Customers from "./components/customers";
import Rental from "./components/rental";
import Vidly from "./components/vidly";

import Login from "./components/loginForm";
import Register from "./components/registerForm";
import MovieForm from "./components/movieForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <NavBar />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Switch>
              
              <Route path="/movies/:id" component={MovieForm} />
              
                <Route path="/customers" component={Customers} />
                <Route path="/rental" component={Rental} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Redirect from="/notfound" to="/" />
                <Route path="/" component={Vidly} />
                <Redirect to="/notfound" />
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
