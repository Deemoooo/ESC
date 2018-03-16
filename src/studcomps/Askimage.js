import React from 'react';
import {Card, CardHeader} from 'material-ui';
import {Button, Grid, Row, Col, Image} from "react-bootstrap";
import Background from "./question.png";

export default class Askimage extends React.Component {

	render() {
		return (
		    <Grid alignItems="center">
			   	<br />
			   	<br />
			   	<br />
			   	<Row className="Show-grid">
			   		<Col md={4}>
						<Card>
				   			<CardHeader
				      			title="Ask a Question"
				      			subtitle="Let prof know your doubts"
				    		/>
				    		<br/>
				    		<Grid>
				    		<Grid>
				    		<Grid>
				    		<Grid>
				    		<Grid>
				    		<br/>
				    			<Col>
				    				<Image src= {Background} rounded />
				    			</Col>
				    		</Grid>
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