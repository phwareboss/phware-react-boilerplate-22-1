import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import AuthCode from 'react-auth-code-input';

const OneTimePasscodeInput = (props) => {
    const [result, setResult] = useState();
    const handleOnChange = (res: string) => {
        setResult(res);
    };
  
    return <AuthCode allowedCharacters='numeric' onChange={handleOnChange} containerClassName="app-opt-input-wrapper" inputClassName='app-opt-inputs form-control form-control-lg '/>;
};

export default OneTimePasscodeInput;