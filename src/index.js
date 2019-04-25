import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom" ;
// import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css" ;
import "font-awesome/css/font-awesome.css" ;
import Vidly from './components/vidly';

ReactDOM.render(<BrowserRouter>< Vidly/></BrowserRouter>, document.getElementById('root'));



serviceWorker.unregister();
