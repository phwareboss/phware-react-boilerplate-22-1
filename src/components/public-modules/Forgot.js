import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { APP_CONSTANTS } from '../../config';
import { login } from "../../redux/slices/auth.slice";
import { Form, Container, Spinner } from 'react-bootstrap';
import { MyButton, HelmetHtmlTitle } from '../common'
import { FormTextInput } from '../common/controls';

const Forgot = (props) => {
    // rename needed funcs, for better verbose
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // init state vars - Hooks
    const { isLoggedIn } = useSelector(state => state.auth);    // auth
    const [loading, setLoading] = useState(false);            // for spinner
    const [validated, setValidated] = useState(false);        // for react bootstrap form

    const { message } = useSelector(state => state.message);    // TODO: deprecated?  Do we use this?

    // redirect if logged in already
    if (isLoggedIn) navigate(APP_CONSTANTS.AUTH_BASE_PATH);

    // REACT-HOOK-FORM hook init
    const { setError, handleSubmit, control, reset, formState: { errors }, getValues } = useForm()

    const onSubmit = data => {
        setLoading(true);
        console.log('data sent', data);

        navigate("/forgot/verify");
        return;


       // console.log('DISPATCHing NOW login()');
        //alert(JSON.stringify(data) + '<br /> dispatching now..');

        dispatch( login(data.username, data.password) ).then(() => {
            navigate("/app");
        })
        .catch(error => {
            //display_errors(error, getValues, setError)
            setLoading(false);
        });
    };

    return (
        <>
            <HelmetHtmlTitle pageName="Forgot My Password" />

            <Form noValidate validated={validated} className="form-signin text-center mt-5 ms-auto me-auto" style={{ maxWidth: "300px" }} onSubmit={handleSubmit(onSubmit)} >
                <Form.Control type="hidden" name="login-submit" value={"1"} />
                <h1 className="h4 mb-3 font-weight-normal">Enter your email or mobile phone associated with this account to start the recovery process.</h1>

                {loading && ( <Spinner animation="border" /> )}

                <FormTextInput control={control}
                    name={"username"} label={"Username or Email"} floatingLabel={true}
                    className={"mb-3"}
                    size={"lg"}
                    required={true}
                    validate={null}
                    feedback={"Enter your username or email address."}
                />

                <MyButton type="submit" className="mt-3">Submit</MyButton>

                <Container className="mt-3 d-flex justify-content-evenly">
                    <MyButton to="/login" variant="link">Cancel recovery</MyButton>
                </Container>

            </Form>
        </>
    );
};
export default Forgot;