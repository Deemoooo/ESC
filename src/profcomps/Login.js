import React from 'react';
import {Card, CardActions, CardHeader, TextField} from 'material-ui';
import {Button, Grid, Row, Col} from "react-bootstrap";
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
			<Row>
			<Col sm={4}>
		    <Grid>
			   	<Row className="Show-grid">
			   		<Col md={5}>
						<Card elevation={20}>
				   			<CardHeader
				      			title="WELCOME BACK"
				      			subtitle="Please login"
				    		/>
				    		<Grid>
				    		<Grid>
				    		<Grid>
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
			        			</Grid>
			        			</Grid>
			        			</Grid>
				    		<Grid>
				    		<Grid>
				    		<Grid>
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
			        			</Grid>
			        			</Grid>
						    	</Grid>
				    		<CardActions>
				    		<br/>
				    			<Grid>
				    			<Grid>
				    			<Col md={2} >
				    				<Link to="/profcomps"><Button 
				    				bsStyle="info" block>
				    				Prof</Button></Link>
				    			</Col>
				    			<Col md={2}>
				    				<Link to="/studcomps"><Button
				    				bsStyle="info" block>
				    				Student</Button></Link>
				    			</Col>
				    			</Grid>
				    			</Grid>
				    		</CardActions>
				    		<br />
				    		<br />
				   		</Card>
			   		</Col>
			   		<Col sm={4} />
				</Row>
		    </Grid>
		    </Col>
		    </Row>
		    </div>
		    
		);
	}
}