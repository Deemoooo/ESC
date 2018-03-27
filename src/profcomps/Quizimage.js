import React from 'react';
import {Card, CardHeader} from 'material-ui';
import {Button, Grid, Row, Col, Image} from "react-bootstrap";
import Background from "./quiz.png";
import './Quizimage.css';

export default class Quizimage extends React.Component {

	render() {
		return (
		    <Grid >
			   	<br />
			   	<br />
			   	<br />
			   	<Row className="Show-grid">
			   		<Col md={4}>
						<Card>
				   			<CardHeader
				      			title="Push quizzes"
				      			subtitle="Upload a quiz to students"
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