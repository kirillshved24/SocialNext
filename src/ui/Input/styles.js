'use client'
import styled from "styled-components";

export const InputWrapper = styled.div`
   width: 100%;
   
`;

export const Input = styled.input`
    outline: none;
    border: 1px solid ${({ $error }) => ($error === 'true' ? 'red' : '#282c34')}; 
    padding: 11px 3px;
    border-radius: 5px;
    width: 100%;
    max-width: 100%;
  

    &:focus {
        border-color: ${({ $error }) => ($error === 'true' ? 'red' : '#007BFF')};
    }
`;

export const ErrorMessage = styled.span`
    color: red;
    font-size: 0.75rem;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    pointer-events: none;
`;