import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';
import {Helmet} from "react-helmet";
import AppRouter from './routing';
import AppToastContainer from "./components/Toasts/AppToastContainer";

import {APP_CONSTANTS} from './config';

function App() {
    useEffect(() => {
        console.log("This is the same as componentDidMount in a react class. ");
    }, []);

    // const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
        <>
            <Helmet>
                <title>{APP_CONSTANTS.APP_NAME}</title>
            </Helmet>
            <Container fluid>
                <Row>
                    <Col className="p-0">
                        <AppRouter />
                    </Col>
                </Row>
                <AppToastContainer />
            </Container>
        </>
    );
}
function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}
export default connect(mapStateToProps)(App);
