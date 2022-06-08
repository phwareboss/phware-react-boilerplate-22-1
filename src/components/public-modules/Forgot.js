import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useForm, trigger } from "react-hook-form";

import { APP_CONSTANTS } from '../../config';
import { login } from "../../redux/slices/auth.slice";
import { Form, Container, Spinner } from 'react-bootstrap';
import { MyButton, HelmetHtmlTitle } from '../common'
import { FormTextInput, Input } from '../common/controls';

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
    const { setError, handleSubmit, control, trigger, reset, formState: { errors }, getValues } = useForm({
                                                                                                    mode: "all" // "onSubmit (d), onBlur, onChange, onTouched, all" mode for validation
                                                                                                });
    

    const onSubmit = data => {
        setLoading(true);
        console.log('data sent', data);

        navigate("/forgot/verify");
        return;


       // console.log('DISPATCHing NOW login()');
        // alert(JSON.stringify(data) + '<br /> dispatching now..');

        // dispatch( login(data.username, data.password) ).then(() => {
        //     navigate("/app");
        // })
        // .catch(error => {
        //     //display_errors(error, getValues, setError)
        //     setLoading(false);
        // });
    };

    const handleKeyUp = (e) => {
        //console.log(e.target.value)
       trigger();
       console.log(control.getFieldState("emailormobile").invalid)
    };
        

    return (
        <>
            <HelmetHtmlTitle pageName="Forgot My Password" />

            <Container className="text-center pt-5">
                <h2 className="h4 mb-3 font-weight-normal">Enter your email or mobile phone associated with<br />this account to start the recovery process.</h2>
                <Form noValidate validated={validated} className="form-signin text-center mt-5 ms-auto me-auto" style={{ maxWidth: "300px" }} onSubmit={handleSubmit(onSubmit)} >
                    <Form.Control type="hidden" name="login-submit" value={"1"} />
                    {loading && ( <Spinner animation="border" /> )}

                    <Input name={"emailormobile"} control={control}   
                        label={"Email or Mobile#"} floatingLabel={true}
                        helpText={null}
                        className={"mb-3"}
                        size={"lg"}
                        autoFocus={false}
                        onKeyUp={handleKeyUp}
                        rules={{
                            required: 'A value is required',
                            validate: (val) => {return (
                                val!=='hh' 
                                && 
                                val.length>1
                            )},
                        }}
                        
                        feedback={"A valid email address or mobile # is required."}
                        feedbackClass="text-start"
                        
                    />
<button
        type="button"
        onClick={() => {
          trigger();
        }}
      >
        Trigger All
      </button>
                    <MyButton type="submit" className="mt-3" >Submit</MyButton>

                    <Container className="mt-3 d-flex justify-content-evenly">
                        <MyButton to="/login" variant="link">cancel</MyButton>
                    </Container>
                </Form>
            </Container>
        </>
    );
};
export default Forgot;