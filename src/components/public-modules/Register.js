import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Register(props) {
	return (
		<Card className="text-center">
			<Card.Header>AUTHENTICATED PROTECTED MODULE</Card.Header>
			<Card.Body>
				<Card.Title>Module 1</Card.Title>
				<Link to="/login">
					Back to login
				</Link>
			</Card.Body>
		</Card>
	);
}
export default Register;


