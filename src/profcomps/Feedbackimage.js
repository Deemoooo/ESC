import React from 'react';
import {Card, CardHeader} from 'material-ui';
import {Button, Grid, Row, Col, Image} from "react-bootstrap";
import Background from "./feedback.png";
import './Quizimage';

export default class Feedbackimage extends React.Component {

	render() {
		return (
		    <Grid >
			   	<br />
			   	<br />
			   	<br />
			   	<Row>
			   		<Col md={4}>
						<Card>
				   			<CardHeader
				      			title="Review Feedback"
				      			subtitle="Check the feedback from students	"
				    		/>
				    		<br/>
				    		<Grid>
				    		<Grid>
				    		<Grid>
				    		<Grid>
				    		<Col>
				    		<Image src= {Background} rounded />
				    		</Col>
				    		</Grid>
				    		</Grid>
				    		</Grid>
				    		</Grid>
				    		<br />
				    		<br />
				   		</Card>
			   		</Col>
				</Row>
		    </Grid>
		);
	}
}