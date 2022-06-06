import React, {useState} from "react";
import PropTypes from 'prop-types';

import { Container, Navbar, Nav, Modal, Button } from "react-bootstrap"; 
import { isLoggedIn } from "../../../helpers";

import { AppNavbarBrand } from './common';

import LogoutButton from "../Logout-NavLink";

function AppHeaderNavbarPrivate(props) {
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

   
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <AppNavbarBrand />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                       
                        {props.routes.map(({ path, title }) => (
                            <Nav.Link key={path} href={props.basePath + path}>{title}</Nav.Link>
                        ))}
                        
                        {/* logout button */
                        isLoggedIn() && <LogoutButton />}

                        <Nav.Link onClick={handleShowModal}>EX Show Modal</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
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
            </Container>
        </Navbar>
    );
}
AppHeaderNavbarPrivate.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired
		})
	).isRequired,
	basePath: PropTypes.string,
	className: PropTypes.string
};
//shape() takes an object and validates the types inside the object.
AppHeaderNavbarPrivate.defaultProps ={
	basePath: '',
	className: ''
};
export default AppHeaderNavbarPrivate;