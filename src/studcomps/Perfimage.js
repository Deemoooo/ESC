import React from 'react';
import {Card, CardHeader} from 'material-ui';
import {Button, Grid, Row, Col, Image} from "react-bootstrap";
import Background from "./performance.png";

export default class Perfimage extends React.Component {

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
				      			title="Performance analysis"
				      			subtitle="Analyse student's performance"
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