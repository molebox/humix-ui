import * as React from 'react';
import { styled } from '../../stitches.config';
import { StitchesVariants } from '@stitches/react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { HumixBase } from '../utils';

const BoogieBase = styled('p', {
  fontFamily: '$body',
  variants: {
    size: {
      xs: {
        fontSize: '$xs'
      },
      s: {
        fontSize: '$s'
      },
      m: {
        fontSize: '$m'
      },
      l: {
        fontSize: '$l'
      },
      xl: {
        fontSize: '$xl'
      },
      xxl: {
        fontSize: '$xxl'
      },
      huge: {
        fontSize: '$huge'
      },
      jumbo: {
        fontSize: '$jumbo'
      },
    }
  }
})

interface RestrictedProps extends React.ComponentProps<typeof BoogieBase> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'blockquote' | 'dd' | 'li' | 'abbr' | 'cite' | 'q' | 's'
}

type TypographyProps = RestrictedProps & HumixBase & Required<StitchesVariants<typeof BoogieBase>>;

type TypographyComponent = Polymorphic.ForwardRefComponent<
  'p',
  TypographyProps
>;

/**
 * A polymorphic typography component that can become one of the following HTML elements:
 * 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'blockquote' | 'dd' | 'li' | 'abbr' | 'cite' | 'q' | 's'
 * @param stylz - Style the element by adding object syntax css. Accepts theme tokens as $myThemeToken
 * @param xs - Extra small font size
 * @param s - Small font size
 * @param m - Medium font size
 * @param l - Large font size
 * @param xl - Extra large font size
 * @param xxl - Double extra large font size
 * @param huge - Huge large font size
 * @param jumbo - Jumbo large font size
 */
export const Typography = React.forwardRef((props, forwardRef) => {
  const { stylz } = props;
  return <BoogieBase css={{ ...stylz }} {...props} ref={forwardRef} />;
}) as TypographyComponent;