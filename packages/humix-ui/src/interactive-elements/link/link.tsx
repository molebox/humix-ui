import * as React from 'react';
import { StitchesVariants } from '@stitches/react';
import { styled } from '../../../stitches.config';
import { useLink } from '@react-aria/link';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { HumixBase } from '../../utils';

const DEFAULT_ELEMENT = 'a';

const RootBoogie = styled('a', {
  textDecoration: 'none',
  position: 'relative',
  width: 'fit-content',
  zIndex: 11,
  cursor: 'pointer'
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
          '&::after': {
            content: `''`,
            position: 'absolute',
            display: 'inline-block',
            top: '8px',
            left: '-5px',
            height: '10px',
            zIndex: -10,
            width: '100%',
            backgroundColor: '$primary100',
            transition: '0.8s ease',
          }
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
          outline: 'none',
          '&::after': {
            content: `''`,
            position: 'absolute',
            display: 'inline-block',
            top: '8px',
            left: '-5px',
            height: '10px',
            zIndex: -10,
            width: '100%',
            backgroundColor: '$secondary100',
            transition: '0.8s ease',
          },
        },
      },
    },
  },
});

export type LinkProps = HumixBase & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  StitchesVariants<typeof LinkVariants>;

type LinkComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof LinkVariants>,
  Polymorphic.OwnProps<typeof LinkVariants>
>;

/**
 * A simple, accesible button component.
 * The `href` prop is used to navigate internally or externally.
 * When used with Nextjs, the `as` prop wont work, instead, wrap this component
 * with the Nextjs Link conponent.
 * @param color - primary | secondary
 */
export const Link = React.forwardRef((props: LinkProps, forwardRef) => {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const { linkProps } = useLink(props, ref);
  const { children, href, target, stylz } = props;
  return (
    <LinkVariants
      css={{ ...stylz }}
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
