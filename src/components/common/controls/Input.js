import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import { useController, useForm } from "react-hook-form";
import { Form, FloatingLabel, InputGroup } from 'react-bootstrap';

function Input(props) {

   

    const { field, fieldState, formState } = useController({                    // field:{ onChange, onBlur, name, value, ref },
        name: props.name,                                                       // fieldState: { invalid, isTouched, isDirty },
        control: props.control,                                                 // formState: { touchedFields, dirtyFields }
        defaultValue: props.value,
        rules: {
            disabled:  props.rules?.disabled, 
            required:  props.rules?.required,
            maxLength: props.rules?.maxLength,
            minLength: props.rules?.minLength,
            max: props.rules?.max,
            min: props.rules?.min,
            pattern: props.rules?.pattern,
            validate: props.rules?.validate,
        },
    });

    useEffect(() => {
        console.log("fieldState.invalid",fieldState.invalid);
    }, []);

    const FormControl = (
        <Form.Control 
            onChange={field.onChange} onBlur={field.onBlur} value={field.value} ref={field.ref}    // <-- Binds the BS Control to react-hook-form Controller
            as={props.as}
            size={props.size}
            placeholder={props.floatingLabel ? props.label : props.placeholder}
            className={props.controlClass}
            readOnly={props.readOnly}
            autoFocus={props.autoFocus}
            disabled={props.rules?.disabled}
            isInvalid={fieldState.invalid}
            isValid={fieldState.invalid}
            onKeyUp={props.onKeyUp}
            onKeyPress={props.onKeyPress}
        />
    );
    
    let output = "";
  //  const feedbackClass = "text-start " + props.feedbackClass;
  //  const helpTextClass = "text-start " + props.helpTextClass;

    if (props.floatingLabel) {
        output = (
            <Form.Group className={props.className} controlId={props.name + '_group'}>
                <InputGroup hasValidation>
                    <FloatingLabel label={props.label} className={props.labelClass} style={{ width: '100%' }}>
                        {FormControl}
                        <Form.Control.Feedback type="invalid" className={props.feedbackClass}>
                            {props.feedback}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </InputGroup>
                <Form.Text className={props.helpTextClass} muted>{props.helpText}</Form.Text>
            </Form.Group>
        );
    } else {
        output = (
            <Form.Group className={props.className} controlId={props.name + '_group'}>
                <Form.Label className={props.labelClass}>{props.label}</Form.Label>
                <InputGroup hasValidation>
                    {FormControl}
                    <Form.Control.Feedback type="invalid" className={props.feedbackClass}>
                        {props.feedback}
                    </Form.Control.Feedback>
                </InputGroup>
                <Form.Text className={props.helpTextClass} muted>{props.helpText}</Form.Text>
            </Form.Group>
        );
    }
    return output;
};
export default Input;

Input.propTypes = {
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
    
    autoFocus: PropTypes.bool,
    size: PropTypes.string,         /* lg, sm, or blank for normal */
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,

    control: PropTypes.object,   /* Pass in the react-hook-form controller to this. */
    ref: PropTypes.object,  // React element ref
    
    rules: PropTypes.object,
    
    maxLength: PropTypes.number,  //  The maximum length of the value to accept for this input.
    minLength: PropTypes.number,  //  The minimum length of the value to accept for this input.
    max: PropTypes.number,        //  The maximum value to accept for this input.
    min: PropTypes.number,        //  The minimum value to accept for this input.
    pattern: PropTypes.any,        //  The regex pattern for the input.    pattern: /[A-Za-z]{3}/
    
    
    
    validate: PropTypes.func,
    feedback: PropTypes.string,      // invalid feedback
    feedbackClass: PropTypes.string,

    onKeyUp: PropTypes.func,
    onKeyPress: PropTypes.func,
}
Input.defaultProps = {
    as: 'input',   /*  input or textarea */
    label: null,
    type: 'text',
    required: false,
    autoFocus: false,
    size: null, /* normal */
    value: "",
    readOnly: false,
    disabled: false,
    controlClass:"",
    labelClass:"",
    helpTextClass: "",
    feedbackClass: "",
};