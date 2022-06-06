import React, {useEffect} from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate as navigate } from "react-router-dom";

function Logout(props) {

    useEffect(() => {
        handle_logout()
    }, []);

    const handle_logout = () => {
        localStorage.removeItem('roles');
        navigate('/');
    }

	return (
		<Spinner animation="border" role="status">
            <span className="visually-hidden">SIGNING OUT...</span>
        </Spinner>
	);
}
export default Logout;


