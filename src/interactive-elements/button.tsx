import * as React from 'react'
import { styled } from '@stitches/react';
import { useButton } from '@react-aria/button';

const ButtonContainer = styled('button', {
    borderRadius: '8px',
    fontSize: '13px',
    padding: ' 10px 15px',
    outline: 'none',
    '&:hover': {
        cursor: 'pointer'
    },
    variants: {
        color: {
            turquoise: {
                backgroundColor: '#4AF1D6',
                color: '#2F2F2F',
                '&:hover': {
                    backgroundColor: '#8DF6E5'
                }
            },
            red: {
                backgroundColor: '#F7191C',
                color: '#F7F3F5',
                '&:hover': {
                    backgroundColor: '#D9080B'
                }
            }

        }
    },
    defaultVariants: {
        color: 'turquoise'
    }
})

type Color = 'turquoise' | 'red';

export interface ButtonProps {
    color: Color
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const ref = React.useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(props, ref);
    const { children } = props;

    return (
        <ButtonContainer {...buttonProps} ref={ref}>
            {children}
        </ButtonContainer>
    )
}