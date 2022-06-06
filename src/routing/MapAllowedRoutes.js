import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from '../components/common';

/*
* This is the route utility component used for generating
* routes and child routes it only requires routes array and basePath
*/
function MapAllowedRoutes({routes, basePath, isAddNotFound}) {
	//const match = useLocation(basePath);
	//return (<Routes><Route path="module-1" element={<Module1 />}/></Routes>);

	console.log('basePath', basePath)
	
	return (
		<Routes>
			{routes.map((routing) => {
				
				let { path, component, children, title, permission, ...rest } = routing;
				let AllowedComponent = routing.component;

				if (children && children.length > 0) {
					path += '/*';
				}
				return (
					//<Route {...rest} key={path} path={`${match.pathname}${path}`} element={<Child {...rest} />} />
					<Route {...rest} key={path} path={path} element={<AllowedComponent children={children} />} />
				)
			})}
			{isAddNotFound && <Route element={<NotFound />}/>}
		</Routes>
	)
}

export default MapAllowedRoutes;