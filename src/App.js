import React from 'react';
import './App.css';
import AboutUs from './Aboutus.js'
import {Switch, Route, Redirect, Router } from "react-router-dom"
import Navigation from "./Navigation.js"
import Technology from "./Technology"
import Case_Studies from "./Case_Studies.js"
import Resources from "./Resources.js"
import SignUp from "./SignUp"
import Login from "./Login"
import Recrutier from './Recruiter';
import createJob from './createJob';
import createAssesment from './createAssesment';
import JobTitle from './JobTitle';
import ActiveJobPosting from './ActiveJobPosting';
import topCandidates from './topCandidates';
import CandidatesDetails from './CadidatesDetails';
import postJob from './postJob'
import history from './history';
import buttonJobs from './buttonJobs';


function App() {
  return (
    <div>
      <Router history={history}>
      <Switch>
        <Route exact path="/" component={AboutUs} />
        <Route exact path="/technology" component={Technology} />
        <Route exact path="/Case_Studies" component={Case_Studies} />
        <Route exact path="/Resources" component={Resources} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/rec" component={Recrutier}/>
        <Route exact path="/createjob" component={createJob}/>
        <Route exact path="/createassesment" component={createAssesment}/>
        <Route exact path="/jobtitle" component={JobTitle}/>
        <Route exact path="/activejobposting" component={ActiveJobPosting}/>
        <Route exact path="/topcandidate" component={topCandidates} />
        <Route exact path="/candidatesDetails" component={CandidatesDetails} />
        <Route exact path="/postJob" component={postJob} />
        <Route exact path="/buttonJobs" component={buttonJobs} />
        <Redirect to="/" />
      </Switch>
      </Router>
      {/*Footer*/}
    </div>
  );
}

export default App;
