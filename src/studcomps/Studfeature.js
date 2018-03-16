import React from 'react';
import {Link} from "react-router";
import {Row, Col, Grid, Button, SplitButton, DropdownButton, MenuItem} from "react-bootstrap";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Feedbackimage from './Feedbackimage';
import Perfimage from './Perfimage';
import Askimage from './Askimage';
import "C:/Users/DELL/my-app/src/index.css";

export default class Studfeatures extends React.Component {

	constructor() {
		super()
		this.state = {
			text: "Please select a class"
		}
	}

	changetext(name) {
		this.setState({
			text: name,
		})
	}
  
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <br />
            <Col sm={2} md={11}>
              <h1>Hello Student</h1>
            </Col>
            <Col sm={2} md={1}>
              <br />
              <br />
              <Link to="/"><Button bsSize="small" bsStyle="danger">LOGOUT</Button></Link>
            </Col>
          </Row>
          <Grid>
          <Row>
          	<SplitButton
      bsStyle="primary"
      title={this.state.text}
    >
    <DropdownButton
    	bsStyle="default"
    	title="Computer System Engineering"
    	noCaret
    	>
      <MenuItem eventKey="Prof1" onClick={() => this.changetext("Prof1")}>Prof1</MenuItem>
      <MenuItem eventKey="2">Prof2</MenuItem>
      <MenuItem eventKey="3">Prof3</MenuItem>
    </DropdownButton>
      <DropdownButton
    	bsStyle="default"
    	title="Probability and Statistics"
    	noCaret
    	>
      <MenuItem eventKey="1">Prof4</MenuItem>
      <MenuItem eventKey="2">Prof5</MenuItem>
      <MenuItem eventKey="3">Prof6</MenuItem>
    </DropdownButton>
    <DropdownButton
    	bsStyle="default"
    	title="Elements of Software Construction"
    	noCaret
    	>
      <MenuItem eventKey="1">Prof7</MenuItem>
      <MenuItem eventKey="2">Prof8</MenuItem>
      <MenuItem eventKey="3">Prof9</MenuItem>
    </DropdownButton>
    </SplitButton>
          </Row>
          </Grid>
        </Grid>
        <Grid>
        <Grid>
          <Row className="show-grid">
            <Col sm={1} md={1}>
            
            </Col>
            <Col sm={2} md={4}>
            <MuiThemeProvider>
              <Feedbackimage />
            </MuiThemeProvider>
            <br/>
            <Grid>
            <Grid>
            <Grid>
            <Col sm={3}>
              <Link to="/studcomps/Analysis"><Button bsSize="large" bsStyle="success" block>Give Feedback</Button></Link>
            </Col>
            </Grid>
            </Grid>
            </Grid>
            </Col>
            <Col sm={1}/>
            <Col sm={2} md={4}>
            <MuiThemeProvider>
              <Askimage />
            </MuiThemeProvider>
            <br />
            <Grid>
            <Grid>
            <Grid>
            <Col sm={3}>
              <Link to="/studcomps/Quizzes"><Button bsSize="large" bsStyle="success" block>Ask a Question</Button></Link>
            </Col>
            </Grid>
            </Grid>
            </Grid>
            </Col>
          </Row>
        </Grid>
        </Grid>
      </div>
    );
  }
}