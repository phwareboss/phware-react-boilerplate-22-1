import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar } from "react-bootstrap"; 
import { APP_CONSTANTS } from '../../../../config';

function AppNavbarBrand(props) {
    return ( 
        <LinkContainer to="/">
            <Navbar.Brand>{ APP_CONSTANTS.APP_HEADER_LOGO }</Navbar.Brand>  
        </LinkContainer>
    );
}
export default AppNavbarBrand;