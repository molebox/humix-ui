import * as React from 'react'
import { styled, StitchesVariants } from '@stitches/react';
import { useButton } from '@react-aria/button';

const ButtonBase = styled('button', {
    borderRadius: '8px',
    fontSize: '13px',
    padding: ' 10px 15px',
    outline: 'none',
    border: 'solid 2px #2F2F2F',
    boxShadow: "-2px 3px 1px 0px rgba(0,0,0,1)",
    transition: 'all 250ms ease',
    '&:active': {
        transform: 'translateY(3px)',
        boxShadow: "0px 1px 0px 0px rgba(0,0,0,1)"
    },
    '&:hover': {
        cursor: 'pointer',
    },
    variants: {
        color: {
            turquoise: {
                backgroundColor: '#4AF1D6',
                color: '#2F2F2F',
                '&:hover': {
                    backgroundColor: '#8DF6E5'
                },
            },
            red: {
                backgroundColor: '#F61317',
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

type ButtonProps = StitchesVariants<typeof ButtonBase>

export const Button: React.FC<ButtonProps> = (props) => {
    const ref = React.useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(props, ref);
    const { children } = props;

    return (
        <ButtonBase {...buttonProps} ref={ref} {...props}>
            {children}
        </ButtonBase>
    )
}