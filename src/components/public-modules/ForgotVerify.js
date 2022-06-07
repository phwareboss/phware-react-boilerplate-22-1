import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { APP_CONSTANTS } from '../../config';
import { login } from "../../redux/slices/auth.slice";
import { Form, Container, Spinner } from 'react-bootstrap';
import { MyButton, HelmetHtmlTitle } from '../common'
import { OneTimePasscodeInput } from '../common/controls';

const ForgotVerify = (props) => {
    // rename needed funcs, for better verbose
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);            // for spinner
    const [validated, setValidated] = useState(false);        // for react bootstrap form

    // REACT-HOOK-FORM hook init
    const { setError, handleSubmit, control, reset, formState: { errors }, getValues } = useForm()

    const onSubmit = data => {
        setLoading(true);
        console.log('data sent', data);
       // console.log('DISPATCHing NOW login()');
        //alert(JSON.stringify(data) + '<br /> dispatching now..');

        dispatch( login(data.username, data.password) ).then(() => {
            navigate("/login");
        })
        .catch(error => {
            //display_errors(error, getValues, setError)
            setLoading(false);
        });
    };


    return (
        <>
            <HelmetHtmlTitle pageName="Forgot My Password - Verification" />

            <Form noValidate validated={validated} className="form-signin text-center mt-5 ms-auto me-auto" style={{ maxWidth: "400px" }} onSubmit={handleSubmit(onSubmit)} >
                
                <h1 className="h4 mb-3 font-weight-normal">Verify your Identity</h1>

                <Form.Text>We just sent you a one-time passcode.  Enter it below to continue.</Form.Text>


                {loading && (
                    <Spinner animation="border" />
                )}

                <Form.Control type="hidden" name="authcode" value={"1"} />

                <OneTimePasscodeInput  />
                

                <MyButton type="submit" className="mt-3">Submit</MyButton>

                <Container className="mt-3 d-flex justify-content-evenly">
                    <MyButton to="/login" variant="link">Back to login</MyButton>
                </Container>

            </Form>
        </>
    );
};
export default ForgotVerify;