import React, { useState } from "react";
import { Container, Navbar, Nav, Modal, Button } from "react-bootstrap";
import { AppNavbarBrand } from './common';

function AppHeaderNavbarPublic(props) {
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);


    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <AppNavbarBrand />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={handleShowModal}>EX Show Modal</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className="me-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AppHeaderNavbarPublic;