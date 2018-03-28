import React from 'react';
import {Card, CardActions, CardHeader, TextField} from 'material-ui';
import {Button, Grid, Row, Col} from "react-bootstrap";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from "react-router";
import Background from "./bg.jpg";
import "./Side.css"

export default class Login extends React.Component {

	constructor() {
		super()

		this.state={
			user: "",
			password: ""
		};
	}

	render() {
		return (
			<div>
			<Grid>
          <Row className="show-grid">
            <br />
            <br />
            <Col sm={2} md={4}>
              <MuiThemeProvider>
                <br />
                <br />
                <br /> 
                <Row>
                </Row>
              </MuiThemeProvider>
              <br/>
              <Col sm={2} />
              <Col sm={8} className="Quizimage">
              </Col>           
            </Col>
            <Col sm={2} md={4}>
              <MuiThemeProvider>
                <br />
                <br />
                <br />
                <Row>
                  <Col md={12}>
                    <Card>
                      <CardHeader
                          title="Performance analysis"
                          subtitle="Analyze student's performance"
                      />
                      <br/>
                      <Col>
                        <Col sm={2} />
                          <Grid>
				    			<h4>Username</h4>
				    			<Grid>
			        				<TextField
						            	id="username"
							         	margin="normal"
							        >
			          
			       					</TextField>
			        			</Grid>
			        			</Grid>
			        			<Grid>

								<h4>Password</h4>
						        <Grid>
									<TextField
							        	id="password"
							          	margin="normal"
							        >
						        	</TextField>
						        	</Grid>
			        			</Grid>
                      </Col>
                      <br />
                      <br />
                    </Card>
                  </Col>
                </Row>
              </MuiThemeProvider>
              <br/>
              <Col sm={2} />
              <Col sm={8} className="Quizimage">
				<Link to="/comps" ><Button 
				    				bsStyle="info" block>
				    				Login</Button></Link>              </Col>           
            </Col>
            <Col sm={2} md={4}>
              <MuiThemeProvider>
                <br />
                <br />
                <br />
                <Row>
                  <Col md={12}>
                   
                  </Col>
                </Row>
              </MuiThemeProvider>
              <br/>
              <Col sm={2} />
              <Col sm={8} className="Quizimage">
                </Col>           
            </Col> 
          </Row>
        </Grid>
		    </div>
		    
		);
	}
}
