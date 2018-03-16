import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";
//import Bootstrap from "./vendor/bootstrap-without-jquery";
import './index.css';
import Prof from "./profcomps/Features";
import Student from "./studcomps/Studfeature"; 
import Side from "./profcomps/Side";

import Analysis from "./profcomps/Features/Analysis";
import Feedback from "./profcomps/Features/Feedback";
import Quizzes from "./profcomps/Features/Quizzes";

// ========================================

ReactDOM.render(
  <Router history={hashHistory}>
    
      <Route path="/" component={Side}></Route>
      <Route path="/profcomps" component={Prof} name="ssd"></Route>
      <Route path="/studcomps" component={Student}></Route>
      <Route path="/profcomps/Quizzes" component={Quizzes}></Route>
      <Route path="/profcomps/Feedback" component={Feedback}></Route>
      <Route path="/profcomps/Analysis" component={Analysis}></Route>
  </Router>,

  document.getElementById('root')
);
