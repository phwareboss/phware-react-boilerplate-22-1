import React, { Component } from 'react'
import {Nav } from "react-bootstrap"; 
class LogoutButton extends Component {

    logout = () => {
        localStorage.clear();
        // you can also like localStorage.removeItem('Token');
        window.location.href = "/";
    }

    render() {
        return (
            <Nav.Link onClick={this.logout}>Logout</Nav.Link>
        )
    }
}

export default LogoutButton;