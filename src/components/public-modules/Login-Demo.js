import React, { memo, useState } from 'react';
import { Alert, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { JumbotronWrapper } from '../common';

import { ROLES }  from "../../config";

const role_count = Object.keys(ROLES).length;

function Login() {
	let [selected, setSelected] = useState([]);
	let navigate = useNavigate();

	function handleChange(e) {
		const { options } = e.target;
		let selected = [];

		for (let i = 0; i < options.length; i++) {
			if (options[i].selected) {
				selected.push(options[i].value);
			}
		}
		setSelected(selected);
	}

	function handleClick() {
		localStorage.setItem('ROLES', JSON.stringify(selected));
		navigate('/app');
	}

	return (
		<JumbotronWrapper title="Login" description="">
			<Form.Group controlId="exampleForm.ControlSelect1">
				<Form.Label>Select Role:</Form.Label>
				<Form.Control
					as="select"
					value={selected}
					onChange={handleChange}
					multiple
					htmlSize={role_count}
				>
					{Object.keys(ROLES).map( (keyName, keyIndex) => {
						return (
							<option key={keyName} value={Object.values({keyName})[0]}>{keyName}</option>
						);
					})}
				</Form.Control>
			</Form.Group>
			<Alert variant="primary">Support multi ROLES.</Alert>
			<div className="text-right">
				<Link to="/forgot">Forgot Password</Link>
				&nbsp;&nbsp;&nbsp;
				<Link to="/register">Register</Link>
			</div>
			<Button
				variant="primary"
				onClick={handleClick}
				disabled={!selected.length}
			>
				Login
			</Button>
		</JumbotronWrapper>
	);
}

export default memo(Login);
