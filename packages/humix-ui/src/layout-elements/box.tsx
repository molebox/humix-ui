import * as React from 'react';
import { styled } from '../../stitches.config';
import { StitchesVariants } from '@stitches/react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { HumixBase } from '../utils';
import { widths, grids, pads, margie } from '.';

// auto-fill vs auto-fit https://gridbyexample.com/examples/example37/

const RootBoogie = styled('div', {
  variants: {
    ...widths,
    ...grids,
    flex: {
      row: {
        display: 'flex',
        flexDirection: 'row'
      },
      column: {
        display: 'flex',
        flexDirection: 'column'
      }
    },
    align: {
      center: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      even: {
        justifyContent: 'space-evenly',
        alignItems: 'center'
      },
      around: {
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      between: {
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    },
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
    ...pads,
    ...margie
  },
});


interface RestrictedProps extends React.ComponentProps<typeof RootBoogie> {
  as?: 'div' | 'section' | 'main' | 'header' | 'nav' | 'footer' | 'aside' | 'article'
}

type BoxProps = RestrictedProps & HumixBase & StitchesVariants<typeof RootBoogie>;

type BoxComponent = Polymorphic.ForwardRefComponent<
  'div',
  BoxProps
>;

/**
 * A polymorphic box that can become one of the following HTML elements:
 * `div` | `section` | `main` | `header` | `nav` | `footer` | `aside` | `article`
 * @param stylz - Style the container by adding object syntax css. Accepts theme tokens as $myThemeToken
 * @param flex - Creates a flexbox, decide the direction: `row` | `column`
 * @param border - Attaches a 2px border
 * @param maxWidth - Max width of the box. `500` | `1000` | `1440`
 * @param width - Width of the box. `100%` | `75%` | `50%` | `25%` | `0`
 * @param height - The height of the box
 * @param autoFill300 - Responsive grid (auto-fill), min - auto, max - 300px
 * @param autoFill350 - Responsive grid (auto-fill), min - auto, max - 350px
 * @param autoFill400 - Responsive grid (auto-fill), min - auto, max - 400px
 * @param autoFill450 - Responsive grid (auto-fill), min - auto, max - 450px
 * @param autoFill500 - Responsive grid (auto-fill), min - auto, max - 500px
 * @param autoFit300 - Responsive grid (auto-fit), min - auto, max - 300px
 * @param autoFit350 - Responsive grid (auto-fit), min - auto, max - 350px
 * @param autoFit400 - Responsive grid (auto-fit), min - auto, max - 400px
 * @param autoFit450 - Responsive grid (auto-fit), min - auto, max - 450px
 * @param autoFit500 - Responsive grid (auto-fit), min - auto, max - 500px
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
