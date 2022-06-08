import React from 'react';
import PropTypes from 'prop-types';
import { Form, FloatingLabel, InputGroup } from 'react-bootstrap';
import { Controller } from "react-hook-form";

const FormTextInput = (props) => {
    let output = "";

    const formTextClass = "text-muted mt-0 " + props.helpTextClass;

    const FormControl = (
        <Controller control={props.control} name={props.name} defaultValue={props.value}
            render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
                <Form.Control onChange={onChange} onBlur={onBlur} value={value} ref={ref}
                    as={props.as}
                    size={props.size}
                    placeholder={props.floatingLabel ? props.label : props.placeholder}
                    className={props.controlClass}
                    readOnly={props.readOnly}
                    autoFocus={props.autoFocus}
                    disabled={props.disabled}

                    isInvalid={fieldState.invalid}
                    onKeyPress={props.onKeyPress}
                    
                />
            )} rules={{
                // disabled:   props.disabled, 
                required: props.required,
                maxLength: props.maxLength,
                minLength: props.minLength,
                max: props.max,
                min: props.min,
                pattern: props.pattern,
                validate: props.validate,
            }}
        />
    );

    if (props.floatingLabel) {
        output = (
            <Form.Group className={props.className} controlId={props.name + '_group'}>
                <InputGroup hasValidation>
                    <FloatingLabel label={props.label} className={props.labelClass} style={{width:'100%'}}>
                        {FormControl}
                        <Form.Control.Feedback type="invalid">
                            {props.feedback}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </InputGroup>
                <Form.Text className={formTextClass}>{props.helpText}</Form.Text>
            </Form.Group>
        );
    } else {
        output = (
            <Form.Group className={props.className} controlId={props.name + '_group'}>
                <Form.Label className={props.labelClass}>{props.label}</Form.Label>
                <InputGroup hasValidation>
                    {FormControl}
                    <Form.Control.Feedback type="invalid">
                        {props.feedback}
                    </Form.Control.Feedback>
                </InputGroup>
                <Form.Text className={formTextClass}>{props.helpText}</Form.Text>
            </Form.Group>
        );
    }
    return output;
};
export default FormTextInput;

FormTextInput.propTypes = {
    as: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    labelClass: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    controlClass: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    helpText: PropTypes.string,
    helpTextClass: PropTypes.string,
    required: PropTypes.bool,
    autoFocus: PropTypes.bool,
    size: PropTypes.string,         /* lg, sm, or blank for normal */
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,

    control: PropTypes.object,   /* Pass in the react-hook-form controller to this. */
    ref: PropTypes.object,  // React element ref
    maxLength: PropTypes.number,  //  The maximum length of the value to accept for this input.
    minLength: PropTypes.number,  //  The minimum length of the value to accept for this input.
    max: PropTypes.number,        //  The maximum value to accept for this input.
    min: PropTypes.number,        //  The minimum value to accept for this input.
    pattern: PropTypes.any,        //  The regex pattern for the input.    pattern: /[A-Za-z]{3}/

    feedback: PropTypes.string,      // invalid feedback

    onKeyPress: PropTypes.func,
}
FormTextInput.defaultProps = {
    as: 'input',   /*  input or textarea */
    label: null,
    type: 'text',
    required: false,
    autoFocus: false,
    size: null, /* normal */
    value: "",
    readOnly: false,
    disabled: false
};