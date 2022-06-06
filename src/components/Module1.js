import React from 'react';
import { Card } from 'react-bootstrap';

function Module1() {
	return (
		<Card className="text-center">
			<Card.Header>AUTHENTICATED PROTECTED MODULE</Card.Header>
			<Card.Body>
				<Card.Title>Module 1</Card.Title>
			</Card.Body>
		</Card>
	);
}
export default Module1;
