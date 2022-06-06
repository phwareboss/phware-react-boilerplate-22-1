import React from 'react';
import PropTypes from 'prop-types';
import { Toast } from 'react-bootstrap';

function AppToast(props) {
	return (
        <Toast>
            <Toast.Header>
                <strong className="me-auto">{ props.title }</strong>
                <small className="text-muted">{ props.timestampText }</small>
            </Toast.Header>
            <Toast.Body>{ props.description }</Toast.Body>
        </Toast>
	);
}
export default AppToast;

AppToast.propTypes = {
	appToastProps: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string
	})
};
AppToast.defaultProps = {
	appToastProps: {
		title: 'Toast Title Here',
        description: 'Toast Description Here'
	},
};
