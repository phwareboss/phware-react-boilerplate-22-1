import React from "react";
import { Navbar } from "react-bootstrap"; 
import { APP_CONSTANTS } from '../../../../config';

function AppFooterCopyright(props) {
    return ( <Navbar.Brand href="/" className="app-footer-copyright">{ APP_CONSTANTS.APP_COPYRIGHT }</Navbar.Brand>  );
}
export default AppFooterCopyright;