import React from 'react';
import {Link} from "react-router";

export default class Analysis extends React.Component {
  
  render() {
    return (
    <div>
     <h1>Analysis here</h1>
     <Link to="/comps"><button class="btn btn-success">Back</button></Link>
    </div>
    );
  }
}