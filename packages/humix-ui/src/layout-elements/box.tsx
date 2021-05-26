import * as React from 'react';
import { styled, CSS } from '../../stitches.config';
import { StitchesVariants } from '@stitches/react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

const RootBoogie = styled('div', {
  variants: {
    primaryBottomRight: {
      true: {
        boxShadow: '$primaryBoxBottomRight',
      },
    },
    secondaryBottomRight: {
      true: {
        boxShadow: '$secondaryBoxBottomRight',
      },
    },
    primaryBottomLeft: {
      true: {
        boxShadow: '$primaryBoxBottomLeft',
      },
    },
    secondaryBottomLeft: {
      true: {
        boxShadow: '$secondaryBoxBottomLeft',
      },
    },
    primaryTopRight: {
      true: {
        boxShadow: '$primaryBoxTopRight',
      },
    },
    secondaryTopRight: {
      true: {
        boxShadow: '$secondaryBoxTopRight',
      },
    },
    primaryTopLeft: {
      true: {
        boxShadow: '$primaryBoxTopLeft',
      },
    },
    secondaryTopLeft: {
      true: {
        boxShadow: '$secondaryBoxTopLeft',
      },
    },
    border: {
      true: {
        border: 'solid 2px $darkText',
      },
    },
  },
});

type OwnProps = {
  stylz?: CSS;
};

type BoxProps = OwnProps & StitchesVariants<typeof RootBoogie>;

type BoxComponent = Polymorphic.ForwardRefComponent<
  'div',
  BoxProps
>;

/**
 * A polymorphic box, it can be any HTML element under the sun.
 * @param stylz - Style the container by adding object syntax css. Accepts theme tokens as $myThemeToken
 * @param border - Attaches a 2px border
 * @param primaryBottomRight - A box shadow using the primary color on the bottom right
 * @param primaryBottomLeft - A box shadow using the primary color on the bottom left
 * @param primaryTopRight - A box shadow using the primary color on the top right
 * @param primaryTopLeft - A box shadow using the primary color on the top left
 * @param secondaryTopLeft - A box shadow using the secondary color on the top left
 * @param secondaryTopRight - A box shadow using the secondary color on the top right
 * @param secondaryBottomLeft - A box shadow using the secondary color on the bottom left
 * @param secondaryBottomRight - A box shadow using the secondary color on the bottom right
 */
export const Box = React.forwardRef((props, forwardRef) => {
  const { stylz } = props;
  return <RootBoogie css={{ ...stylz }} {...props} ref={forwardRef} />;
}) as BoxComponent;
