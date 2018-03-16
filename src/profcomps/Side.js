import React from 'react';
import {Link} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login';
import "./Side.css";

export default class Side extends React.Component {

  constructor(props) {
  	super(props);
  	this.state={name: "ddf"};
  }
  
  render() {
    return (
      <div>
        <MuiThemeProvider>
        	<Login/>
        </MuiThemeProvider>
      </div>
    );
  }
}