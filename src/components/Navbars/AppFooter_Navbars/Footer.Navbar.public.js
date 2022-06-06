import React from "react";
import { Container, Navbar } from "react-bootstrap"; 
import { AppFooterCopyright } from './common';

function AppFooterNavbarPublic(props) {
    return (
        <Navbar className="app-footer" bg="dark" variant="dark" expand="lg">
            <Container className="d-flex justify-content-center">
                <AppFooterCopyright />
            </Container>
        </Navbar>
    );
}
export default AppFooterNavbarPublic;