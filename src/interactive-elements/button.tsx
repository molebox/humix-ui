import * as React from 'react';
import { StitchesVariants } from '@stitches/react';
import { styled } from '../../stitches.config';
import { useButton } from '@react-aria/button';

const RootBoogie = styled('button', {
  height: '$interactiveElementHeight',
  minWidth: '$interactiveElementMinWidth',
  fontSize: '$3',
  padding: '$4 $5',
  border: 'solid 2px $darkGrey',
  boxShadow: '-2px 3px 1px 0px rgba(0,0,0,1)',
  transition: 'all 250ms ease',
  cursor: 'pointer',
  '&:active': {
    transform: 'translateY(3px)',
    boxShadow: '0px 1px 0px 0px rgba(0,0,0,1)',
  },
})

const ButtonVariants = styled(RootBoogie, {
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
    cornerRadius: {
      square: {
        borderRadius: '$none'
      },
      slight: {
        borderRadius: '$slight'
      },
      rounded: {
        borderRadius: '$rounded'
      },
    },
  },
  defaultVariants: {
    color: 'turquoise',
    cornerRadius: 'slight'
  }
});

export type ButtonProps = Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> &
  Required<StitchesVariants<typeof ButtonVariants>>;

/**
 * A simple, accesible button component.
 *
 * Default values in bold.
 * @param color - **turquoise** | red
 * @param cornerRadius - square | **slight** | rounded
 */
export const Button = (props: ButtonProps) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <ButtonVariants {...buttonProps} ref={ref} {...props}>
      {children}
    </ButtonVariants>
  );
};
