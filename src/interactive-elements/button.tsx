import * as React from 'react'
import { styled } from '@stitches/react';

const ButtonContainer = styled('button', {
    backgroundColor: 'plum',
    borderRadius: '8px',
    borderColor: 'plum',
    fontSize: '13px',
    padding: ' 10px 15px',
    outline: 'none',
    '&:hover': {
        backgroundColor: 'hotpink',
        cursor: 'pointer'
    },
    variants: {
        color: {
            violet: {
                backgroundColor: 'blueviolet',
                color: 'whitesmoke',
                '&:hover': {
                    backgroundColor: 'darkviolet'
                }
            },
            purple: {
                backgroundColor: 'rebeccapurple',
                color: 'wheat',
                '&:hover': {
                    backgroundColor: 'royalblue'
                }
            }

        }
    }
})

type Color = 'violet' | 'purple';

interface ButtonProps {
    color: Color
}

export const Button: React.FunctionComponent<ButtonProps> = ({ children, color }) => {
    return (
        <ButtonContainer {...color}>
            {children}
        </ButtonContainer>
    )
}