import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { Form, FloatingLabel, Container} from 'react-bootstrap';
import { MyButton, HelmetHtmlTitle } from '../../components/common'
import { login } from "../../redux/slices/auth.slice";
import { APP_CONSTANTS } from '../../config';



const PAGE_NAME = "Login";

const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleLogin = (e) => {

        alert("Here we are")
        e.preventDefault();
        return;

        // e.preventDefault();
        // setLoading(true);
        //  form.current.validateAll();
        // if (checkBtn.current.context._errors.length === 0) {
        //     dispatch(login(username, password))
        //         .then(() => {
        //             props.history.push("/profile");
        //             window.location.reload();
        //         })
        //         .catch(() => {
        //             setLoading(false);
        //         });
        // } else {
        //     setLoading(false);
        // }
    };
    if (isLoggedIn) {
        return <Navigate to={APP_CONSTANTS.AUTH_BASE_PATH} />;
    }
    return (
        <>
            <HelmetHtmlTitle pageName="Login"/>
            
            <Form className="form-signin text-center mt-5 ms-auto me-auto" style={{maxWidth:"300px"}}  onSubmit={handleLogin} >
                <Form.Control type="hidden" name="login-submit" value={"1"} />
                <h1 className="h4 mb-3 font-weight-normal">Please sign in</h1>
                <FloatingLabel controlId="username" label="Email address or Username" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com or myusername" name="login-username" required autoFocus />
                </FloatingLabel>
                <FloatingLabel controlId="password" label="Password">
                    <Form.Control type="password" placeholder="Password" name="login-password" required  />
                </FloatingLabel>

                <MyButton type="submit" className="mt-3">Submit</MyButton>

                <Container className="mt-3 d-flex justify-content-evenly">
                    <MyButton to="/register" variant="link">Register</MyButton>
                    <MyButton to="/forgot" variant="link">Forgot?</MyButton>
                </Container>
            
            </Form>
        </>
    );
};
export default Login;