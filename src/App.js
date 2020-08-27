import React from 'react';
import './App.css';
import AboutUs from './Aboutus.js'
import {Switch, Route, Redirect } from "react-router-dom"
import Navigation from "./Navigation.js"
import Technology from "./Technology"
import Case_Studies from "./Case_Studies.js"
import Resources from "./Resources.js"
import SignUp from "./SignUp"
import Login from "./Login"

function App() {
  return (
    <div>
      {/*Header*/}
      <Navigation />
      <Switch>
        <Route exact path="/" component={AboutUs} />
        <Route exact path="/technology" component={Technology} />
        <Route exact path="/Case_Studies" component={Case_Studies} />
        <Route exact path="/Resources" component={Resources} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
      {/*Footer*/}
    </div>
  );
}

export default App;
