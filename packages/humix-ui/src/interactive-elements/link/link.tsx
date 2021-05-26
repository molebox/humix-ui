import * as React from 'react';
import { StitchesVariants } from '@stitches/react';
import { styled } from '../../../stitches.config';
import { useLink } from '@react-aria/link';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_ELEMENT = 'a';

const RootBoogie = styled('a', {
  textDecoration: 'none',
  position: 'relative',
  width: 'fit-content',
  zIndex: 11,
  cursor: 'pointer',
});

const LinkVariants = styled(RootBoogie, {
  variants: {
    primary: {
      true: {
        '&:hover': {
          '&::after': {
            width: '110%',
            position: 'absolute',
          },
        },
        '&:active': {
          '&::after': {
            backgroundColor: '$primary200',
          },
        },
        '&::after': {
          content: `''`,
          position: 'absolute',
          display: 'inline-block',
          top: '8px',
          left: '-5px',
          height: '10px',
          zIndex: -10,
          width: 0,
          backgroundColor: '$primary100',
          transition: '0.8s ease',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '$primaryFocus',
        },
      },
    },
    secondary: {
      true: {
        '&:hover': {
          '&::after': {
            width: '110%',
            position: 'absolute',
          },
        },
        '&:active': {
          '&::after': {
            backgroundColor: '$secondary200',
          },
        },
        '&::after': {
          content: `''`,
          position: 'absolute',
          display: 'inline-block',
          top: '8px',
          left: '-5px',
          height: '10px',
          zIndex: -10,
          width: 0,
          backgroundColor: '$secondary100',
          transition: '0.8s ease',
        },
        '&:focus': {
          outline: '2px dotted',
          textDecoration: 'none',
          boxShadow: '$secondaryFocus',
        },
      },
    },
  },
});

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  StitchesVariants<typeof LinkVariants>;

type LinkComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_ELEMENT,
  LinkProps
>;

/**
 * A simple, accesible button component.
 *
 * @param color - primary | secondary
 * @param cornerRadius - square | slight | rounded
 */
export const Link = React.forwardRef((props: LinkProps, forwardRef) => {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const { linkProps } = useLink(props, ref);
  const { children, href, target } = props;

  return (
    <LinkVariants
      {...linkProps}
      ref={forwardRef}
      href={href}
      target={target}
      {...props}
    >
      {children}
    </LinkVariants>
  );
}) as LinkComponent;
