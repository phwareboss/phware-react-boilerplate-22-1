import React from 'react';
import { Card } from 'react-bootstrap';

function ModuleNChild1() {
	return (
		<Card className="text-center">
			<Card.Header>AUTHENTICATED PROTECTED MODULE</Card.Header>
			<Card.Body>
				<Card.Title>Module - N - Child - 1</Card.Title>
			</Card.Body>
		</Card>
	);
}
export default ModuleNChild1;
