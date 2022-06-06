import React from 'react';
import { Card } from 'react-bootstrap';
import MapAllowedRoutes from "../routing/MapAllowedRoutes";
import { Link } from 'react-router-dom';
import { getAllowedRoutes } from "../config/PrivateRoutes.config";

const basePath = '/app/module-n';

function ModuleN({ children }) {
	const allowedRoutes = getAllowedRoutes(children);
	return (
		<Card className="text-center">
			<Card.Header>AUTHENTICATED PROTECTED MODULE</Card.Header>
			<Card.Body>
				<Card.Title>Module N</Card.Title>
				<Card.Text>
				{allowedRoutes.map(({ path, title }) =>
					<Link key={path} to={`${basePath}${path}`} style={{ marginRight: '10px' }}>{title}</Link>
				)}
				<MapAllowedRoutes
					routes={allowedRoutes}
					basePath={basePath}
				/>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}
export default ModuleN;
