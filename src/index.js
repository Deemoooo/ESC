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
      <Route path="/comps" component={Prof} name="ssd"></Route>
      <Route path="/comps" component={Student}></Route>
      <Route path="/comps/Quizzes" component={Quizzes}></Route>
      <Route path="/comps/Feedback" component={Feedback}></Route>
      <Route path="/comps/Analysis" component={Analysis}></Route>
  </Router>,

  document.getElementById('root')
);
