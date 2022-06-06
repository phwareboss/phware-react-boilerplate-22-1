import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { history } from '../helpers/history';
import PrivateRoutes from './PrivateRoutes';
import Auth from './Auth';
function AppRouter() {
	return (
		<BrowserRouter history={history}>
			<Routes>
				<Route path="/*" element={<Auth />} />
				<Route path="/app/*" element={<PrivateRoutes />} />
			</Routes>
		</BrowserRouter>
	);
}
export default AppRouter;
