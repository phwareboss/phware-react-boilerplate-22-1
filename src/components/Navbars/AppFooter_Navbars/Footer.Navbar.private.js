import React from "react";
import { Container, Navbar } from "react-bootstrap"; 
import { AppFooterCopyright } from './common';

function AppFooterNavbarPrivate(props) {
  
    return (
        <Navbar className="app-footer" bg="dark" variant="dark" expand="lg">
            <Container>
                <AppFooterCopyright />
            </Container>
        </Navbar>
    );
}
export default AppFooterNavbarPrivate;