import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Register, Login, Logout,
		 Forgot, ForgotSend, ForgotVerify } from '../components/public-modules';
import { AppHeaderNavbarPublic, AppFooterNavbarPublic } from '../components/Navbars';
function PublicRoutes() {
	return (
		<Fragment>
			<AppHeaderNavbarPublic />
			<Routes>
				<Route index element={<Home />} />	
				<Route path="/register" element={<Register />} />	
				<Route path="/login" element={<Login />} />	
				<Route path="/logout" element={<Logout />} />	
				<Route path="/forgot" element={<Forgot />} />
				<Route path="/forgot/send" element={<ForgotSend />} />
				<Route path="/forgot/verify" element={<ForgotVerify />} />
			</Routes>
			<AppFooterNavbarPublic />
		</Fragment>
	)
}

export default PublicRoutes;