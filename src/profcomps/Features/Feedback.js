import React from 'react';
import {Link} from "react-router";

export default class Feedback extends React.Component {
  
  render() {
    return (
    <div>
     <h1>Feedback here</h1>
     <Link to="/comps"><button class="btn btn-success">Back</button></Link>
    </div>
    );
  }
}