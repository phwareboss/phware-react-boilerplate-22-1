import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Form, FloatingLabel, Container, Spinner} from 'react-bootstrap';
import { MyButton, HelmetHtmlTitle } from '../../components/common'
import { login } from "../../redux/slices/auth.slice";
import { APP_CONSTANTS } from '../../config';

import { FormTextInput } from '../../components/common/controls'; 
import { useForm, Controller } from "react-hook-form";

// transcibe axios errors to react-hook-form
function display_errors(error, getValues, setError) {
    const errs = error.response.data || []
    var got_a_useful_message = false
    // loop over all the fields and set error:  
    for (var field of Object.keys(getValues())) {
      if (errs[field]) {
        got_a_useful_message = true
        setError(field, {
          type: "server",        
          message: errs[field].join(' | ')})
      }
    }
    if (!got_a_useful_message) {
      alert('something has gone wrong')
    }
  }
  
  export {display_errors}

const PAGE_NAME = "Login";

const Login = (props) => {
    // rename needed funcs, for better verbose
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // init state vars - Hooks
    const { isLoggedIn } = useSelector(state => state.auth);    // auth
    const [ loading, setLoading ] = useState(false);            // for spinner
    const [ validated, setValidated ] = useState(false);        // for react bootstrap form

    const { message } = useSelector(state => state.message);    // TODO: deprecated?  Do we use this?

    // redirect if logged in already
    if (isLoggedIn) navigate(APP_CONSTANTS.AUTH_BASE_PATH);

    // REACT-HOOK-FORM hook init
    const {setError, handleSubmit, control, reset, formState: {errors}, getValues} = useForm()    
    
    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //    form.current.validateAll();
    //     if (checkBtn.current.context._errors.length === 0) {
    //         dispatch(login(username, password))
    //             .then(() => {
    //                 props.history.push("/profile");
    //                 window.location.reload();
    //             })
    //             .catch(() => {
    //                 setLoading(false);
    //             });
    //     } else {
    //         setLoading(false);
    //     }
    // };

    const onSubmit = data => {
        setLoading(true);
        console.log('data', data);
        console.log('DISPATCHing NOW login()');
        //alert(JSON.stringify(data) + '<br /> dispatching now..');

        dispatch( login(data.username, data.password)).then( () => {
            navigate("/app");
        })
        .catch(error => {
            display_errors(error, getValues, setError)
            setLoading(false);
        });
    };

    return (
        <>
            <HelmetHtmlTitle pageName="Login"/>
            
            <Form noValidate validated={validated} className="form-signin text-center mt-5 ms-auto me-auto" style={{maxWidth:"300px"}}  onSubmit={handleSubmit(onSubmit)} >
                <Form.Control type="hidden" name="login-submit" value={"1"} />
                <h1 className="h4 mb-3 font-weight-normal">Please sign in.</h1>

                

                {loading && (
                    <Spinner animation="border" />
                )}

                <FormTextInput control={control} 
                               name={"username"} label={"Username or Email"} floatingLabel={true} 
                               className={"mb-3"} 
                               size={"lg"}
                               required={true}
                               validate={(val) => val==='paul'}
                               feedback={"Enter your username or email address."}
                />
                <FormTextInput control={control} 
                               name={"password"} label={"Password"} floatingLabel={true} 
                               className={"mb-3"}
                               size={"lg"}
                               required={true}
                               validate={(val) => val==='paul'}
                               feedback={"Enter your password."}
                />
                
                <MyButton type="submit" className="mt-3">Submit</MyButton>

                <Container className="mt-3 d-flex justify-content-evenly">
                    <MyButton to="/register" variant="link">Register</MyButton>
                    <MyButton to="/forgot" variant="link">Forgot?</MyButton>
                </Container>
            
            </Form>
        </>
    );
};
function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    };
}
export default connect(mapStateToProps)(Login);