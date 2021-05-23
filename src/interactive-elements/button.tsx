import * as React from 'react';
import { StitchesVariants } from '@stitches/react';
import { styled } from '../../stitches.config';
import { useButton } from '@react-aria/button';

const ButtonBase = styled('button', {
  height: '$interactiveElementHeight',
  minWidth: '$interactiveElementMinWidth',
  borderRadius: '$slight',
  fontSize: '$3',
  padding: '$4 $5',
  border: 'solid 2px $darkGrey',
  boxShadow: '-2px 3px 1px 0px rgba(0,0,0,1)',
  transition: 'all 250ms ease',
  '&:active': {
    transform: 'translateY(3px)',
    boxShadow: '0px 1px 0px 0px rgba(0,0,0,1)',
  },
  '&:hover': {
    cursor: 'pointer',
  },
  variants: {
    color: {
      turquoise: {
        backgroundColor: '$turquoise100',
        color: '$darkGrey',
        '&:hover': {
          backgroundColor: '$turquoise200',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '0 0 8px turquoise',
        },
      },
      red: {
        backgroundColor: '$red100',
        color: '$offWhite',
        '&:hover': {
          backgroundColor: '$red200',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '0 0 8px red',
        },
      },
    },
  },
});

type ButtonProps = StitchesVariants<typeof ButtonBase>;

export const Button: React.FC<ButtonProps> = (props) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <ButtonBase {...buttonProps} ref={ref} {...props}>
      {children}
    </ButtonBase>
  );
};
