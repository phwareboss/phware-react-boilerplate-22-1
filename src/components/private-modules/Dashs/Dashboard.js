import React from 'react';
import { Card } from 'react-bootstrap';

function Dashboard() {
	return (
		<Card className="text-center">
			<Card.Header>AUTHENTICATED PROTECTED MODULE</Card.Header>
			<Card.Body>
				<Card.Title>Dashboard 1</Card.Title>
			</Card.Body>
		</Card>
	);
}
export default Dashboard;
