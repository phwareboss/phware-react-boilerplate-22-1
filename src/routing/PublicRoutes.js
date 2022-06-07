import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Logout, Register, Forgot, ForgotVerify } from '../components/public-modules';
import { AppHeaderNavbarPublic, AppFooterNavbarPublic } from '../components/Navbars';
function PublicRoutes() {
	return (
		<Fragment>
			<AppHeaderNavbarPublic />
			<Routes>
				<Route index element={<Home />} />	
				<Route path="/forgot" element={<Forgot />} />
				<Route path="/forgot/verify" element={<ForgotVerify />} />
				<Route path="/register" element={<Register />} />	
				<Route path="/login" element={<Login />} />	
				<Route path="/logout" element={<Logout />} />	
			</Routes>
			<AppFooterNavbarPublic />
		</Fragment>
	)
}

export default PublicRoutes;