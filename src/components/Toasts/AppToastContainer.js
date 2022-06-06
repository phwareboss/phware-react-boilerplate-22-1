import React from 'react';
import { ToastContainer,Toast } from 'react-bootstrap';

function AppToastContainer() {
	return (
		<ToastContainer id="appToastContainer" position="top-end" className="p-3">
        <Toast>
            <Toast.Header>
                <strong className="me-auto">Bootstrap</strong>
                <small className="text-muted">just now</small>
            </Toast.Header>
            <Toast.Body>See? Just like this.</Toast.Body>
        </Toast>
        <Toast>
            <Toast.Header>
                <strong className="me-auto">Bootstrap</strong>
                <small className="text-muted">2 seconds ago</small>
            </Toast.Header>
            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
    </ToastContainer>
	);
}
export default AppToastContainer;
