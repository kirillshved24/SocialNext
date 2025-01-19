import React from "react";
import * as SC from './styles';

export const Input = React.forwardRef(({ errorMessage, ...props }, ref) => (
    <SC.InputWrapper>
        <SC.Input ref={ref} {...props} $error={errorMessage ? 'true' : undefined} />
        {errorMessage && <SC.ErrorMessage>{errorMessage}</SC.ErrorMessage>}
    </SC.InputWrapper>
));