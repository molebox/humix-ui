import * as React from 'react'
import { styled } from '@stitches/react';

const ButtonContainer = styled('button', {
    backgroundColor: 'blue',
    borderRadius: '8px',
    borderColor: 'plum',
    fontSize: '13px',
    padding: ' 10px 15px',
    outline: 'none',
    '&:hover': {
        backgroundColor: 'hotpink',
        cursor: 'pointer'
    }
})

export const Button: React.FunctionComponent = ({ children }) => {
    return (
        <ButtonContainer>
            {children}
        </ButtonContainer>
    )
}