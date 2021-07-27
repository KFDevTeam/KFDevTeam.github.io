import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { Switch , Route , withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import {Redirect} from 'react-router'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={'/${process.env.PUBLIC_URL}'}><App /></Router>
  </React.StrictMode>,
  document.getElementById('root')
);

<Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/login.component"/>
  ) : (
    <PublicHomePage/>
  )
)}/>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
