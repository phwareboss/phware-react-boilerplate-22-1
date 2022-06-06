import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, LoginDev, Logout, Register, Forgot } from '../components/public-modules';
import { AppHeaderNavbarPublic, AppFooterNavbarPublic } from '../components/Navbars';
function PublicRoutes() {
	return (
		<Fragment>
			<AppHeaderNavbarPublic />
			<Routes>
				<Route index element={<Home />} />	
				<Route path="/forgot" element={<Forgot />} />
				<Route path="/register" element={<Register />} />	
				<Route path="/login" element={<LoginDev />} />	
				<Route path="/logout" element={<Logout />} />	
			</Routes>
			<AppFooterNavbarPublic />
		</Fragment>
	)
}

export default PublicRoutes;