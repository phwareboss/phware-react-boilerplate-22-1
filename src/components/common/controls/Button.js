import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

const MyButton = (props) => {
    let output = "";

    if (props.type && props.type==='submit') { 
        let btnclass = "btn btn-" + props.variant +' '+ props.className;
        output = (
            <button type="submit" className={btnclass}  href={props.href} target={props.target} disabled={props.disabled}>
                {props.icon && props.icon}
                {props.text}
                {props.children}
            </button>
        )
    } else if (props.href) {
        output = (
            <Button variant={props.variant} type={props.type} className={props.className} href={props.href} target={props.target} disabled={props.disabled}>
                {props.icon && props.icon}
                {props.text}
                {props.children}
            </Button>
        )
    } else if (props.to) {
        output = (
            <LinkContainer to={props.to}>
                <Button variant={props.variant} type={props.type} className={props.className} disabled={props.disabled} >
                    {props.icon && props.icon}
                    {props.text}
                    {props.children}
                </Button>
            </LinkContainer>
        )
    } else if (props.onClick) {
        output = (
            <Button variant={props.variant} type={props.type} className={props.className} onClick={props.onClick}>
                {props.icon && props.icon}
                {props.text}
                {props.children}
            </Button>
        )
    } 
    else {
        output = (
            <Button variant={"warning"} disabled={true}>ERR No Action Specified!</Button>
        )
    }
	return output;
};
MyButton.propTypes = {
	text: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    className: PropTypes.string,

    disabled: PropTypes.bool,
}
MyButton.defaultProps = {
    text: null,
    variant: "primary",
    type:"button",
	target: "_self",
    className: "f",
    onClick: null,
    to: null,
    href: null,

    disabled: false,
};

export default MyButton;