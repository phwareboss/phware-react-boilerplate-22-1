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
    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    // const { isLoggedIn } = useSelector(state => state.auth);
    // if (isLoggedIn) {
    //     return <Navigate to={APP_CONSTANTS.AUTH_BASE_PATH} />;
    // }

   // const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

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
        alert(JSON.stringify(data) + '<br /> dispatching now..');

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
            
            <Form className="form-signin text-center mt-5 ms-auto me-auto" style={{maxWidth:"300px"}}  onSubmit={handleSubmit(onSubmit)} >
                <Form.Control type="hidden" name="login-submit" value={"1"} />
                <h1 className="h4 mb-3 font-weight-normal">Please sign in</h1>

                <FormTextInput control={control} name="test" label="mylabel" floatingLabel size="lg" helpText="help here" className="mb-3"/>

                {loading && (
                    <Spinner animation="border" />
                )}

                <FloatingLabel controlId="username" label="Email or Username" className="mb-3">
                    <Controller control={control} name="username" defaultValue="" render={({field: { onChange, onBlur, value, ref } }) => (       
                        <Form.Control onChange={onChange} onBlur={onBlur} value={value} ref={ref} isInvalid={errors.username}  />
                    )} rules={{ required: true }} />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">{errors.username?.message}</Form.Control.Feedback>         

                <FloatingLabel controlId="password" label="Password">
                    <Controller control={control} name="password" defaultValue="" render={({ field: { onChange, onBlur, value, ref } }) => (       
                        <Form.Control type="password" placeholder="Password" onChange={onChange} onBlur={onBlur} value={value} ref={ref}  />
                    )} rules={{ required: true }} />
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
function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    };
}
export default connect(mapStateToProps)(Login);