import React from 'react';
import { Card } from 'react-bootstrap';
import { MyButton } from '../../components/common'
import { APP_CONSTANTS } from '../../config';

function Public_Home() {
	return (
		<Card className="text-center">
			<Card.Header>PUBLIC MODULE</Card.Header>
			<Card.Body>
				<Card.Title>Home</Card.Title>
				<Card.Text>
					Welcome to {APP_CONSTANTS.APP_NAME}!  Members please login.
				</Card.Text>

				<MyButton to="/login">Login</MyButton>
				
			</Card.Body>
		</Card>
	);
}
export default Public_Home;
