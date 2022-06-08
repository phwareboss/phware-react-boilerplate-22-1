import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { APP_CONSTANTS } from '../../config';
import { login } from "../../redux/slices/auth.slice";
import { Form, Container, Spinner } from 'react-bootstrap';
import { MyButton, HelmetHtmlTitle } from '../common'
import { OneTimePasscodeInput } from '../common/controls';

const ForgotNewPass = (props) => {
    // rename needed funcs, for better verbose
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);            // for spinner
    const [validated, setValidated] = useState(false);        // for react bootstrap form

    // REACT-HOOK-FORM hook init
    const { setError, handleSubmit, control, reset, formState: { errors }, getValues } = useForm()

    const onSubmit = data => {
        
        console.log('data submitted', data);
       // console.log('DISPATCHing NOW login()');
        //alert(JSON.stringify(data) + '<br /> dispatching now..');
        setLoading(true);
        dispatch( login(data.username, data.password) ).then(() => {
            navigate("/login");
        })
        .catch(error => {
            //display_errors(error, getValues, setError)
            setLoading(false);
        });
    };
    const passrequirements="" //TODO: automate pass requirements from constants. 

    return (
        <>
            <HelmetHtmlTitle pageName="Forgot My Password - Verification" />

            <Form noValidate validated={validated} className="form-signin text-center mt-5 ms-auto me-auto" style={{ maxWidth: "400px" }} onSubmit={handleSubmit(onSubmit)} >
                
                <h1 className="h4 mb-3 font-weight-normal">Choose a new Password</h1>

                <Form.Text>
                    Your new password must meet the following requirements:

                    {passrequirements}

                </Form.Text>

                {loading && (
                    <Spinner animation="border" />
                )}

            
                <MyButton type="submit" className="mt-3">Submit</MyButton>

                <Container className="mt-3 d-flex justify-content-evenly">
                    <MyButton to="/login" variant="link">cancel</MyButton>
                </Container>

            </Form>
        </>
    );
};
export default ForgotNewPass;