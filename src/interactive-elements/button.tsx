import * as React from 'react';
import { StitchesVariants } from '@stitches/react';
import { styled } from '../../stitches.config';
import { useButton } from '@react-aria/button';

const RootBoogie = styled('button', {
  height: '$interactiveElementHeight',
  minWidth: '$interactiveElementMinWidth',
  fontSize: '$3',
  padding: '$4 $5',
  border: 'solid 2px $darkText',
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
      primary: {
        backgroundColor: '$primary100',
        color: '$darkText',
        '&:hover': {
          backgroundColor: '$primary200',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '$primaryFocus'
        },
      },
      secondary: {
        backgroundColor: '$secondary100',
        color: '$lightText',
        '&:hover': {
          backgroundColor: '$secondary200',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '$secondaryFocus'
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
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Required<StitchesVariants<typeof ButtonVariants>>;

/**
 * A simple, accesible button component.
 *
 * @param color - primary | secondary
 * @param cornerRadius - square | slight | rounded
 */
export const Button = (props: ButtonProps) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props as any, ref);
  const { children } = props;

  return (
    <ButtonVariants {...buttonProps} ref={ref} {...props}>
      {children}
    </ButtonVariants>
  );
};
