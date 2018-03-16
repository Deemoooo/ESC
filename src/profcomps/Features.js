import React from 'react';
import {Link} from "react-router";
import {Row, Col, Grid, Button} from "react-bootstrap";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Feedbackimage from './Feedbackimage';
import Perfimage from './Perfimage';
import Quizimage from './Quizimage';

export default class Features extends React.Component {
  
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <br />
            <Col sm={2} md={11}>
              <h1>Hello Prof</h1>
            </Col>
            <Col sm={2} md={1}>
              <br />
              <br />
              <Link to="/"><Button bsSize="small" bsStyle="danger">LOGOUT</Button></Link>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row className="show-grid">
            <br />
            <br />
            <Col sm={2} md={4}>
            <MuiThemeProvider>
              <Feedbackimage />
            </MuiThemeProvider>
            <br/>
            <Grid>
            <Grid>
            <Grid>
            <Col sm={3}>
              <Link to="/profcomps/Feedback"><Button bsSize="large" bsStyle="success" block>Review Feedback</Button></Link>
            </Col>
            </Grid>
            </Grid>
            </Grid>
            </Col>
            <Col sm={2} md={4}>
            <MuiThemeProvider>
              <Perfimage />
            </MuiThemeProvider>
            <br/>
            <Grid>
            <Grid>
            <Grid>
            <Col sm={3}>
              <Link to="/profcomps/Analysis"><Button bsSize="large" bsStyle="success" block>Students Performance</Button></Link>
            </Col>
            </Grid>
            </Grid>
            </Grid>
            </Col>
            <Col sm={2} md={4}>
            <MuiThemeProvider>
              <Quizimage />
            </MuiThemeProvider>
            <br />
            <Grid>
            <Grid>
            <Grid>
            <Col sm={3}>
              <Link to="/profcomps/Quizzes"><Button bsSize="large" bsStyle="success" block>Push Quizzes</Button></Link>
            </Col>
            </Grid>
            </Grid>
            </Grid>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}