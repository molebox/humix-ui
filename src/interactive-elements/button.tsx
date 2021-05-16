import { styled } from '@stitches/react';

export const Button = styled('button', {
    backgroundColor: 'plum',
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