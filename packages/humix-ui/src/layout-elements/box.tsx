import * as React from 'react';
import { styled } from '../../stitches.config';
import { StitchesVariants } from '@stitches/react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { HumixBase } from '../utils';

// auto-fill vs auto-fit https://gridbyexample.com/examples/example37/

const RootBoogie = styled('div', {
  variants: {
    maxWidth: {
      500: {
        maxWidth: '500px'
      },
      1000: {
        maxWidth: '1000px'
      },
      1440: {
        maxWidth: '1440px'
      }
    },
    width: {
      full: {
        width: '100%'
      },
      threeQuarters: {
        width: '75%'
      },
      half: {
        width: '50%'
      },
      quarter: {
        width: '25%'
      },
      none: {
        width: 0
      }
    },
    autoFill300: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 300px))',
      },
    },
    autoFill350: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 350px))',
      },
    },
    autoFill400: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 400px))',
      },
    },
    autoFill450: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 450px))',
      },
    },
    autoFill500: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 500px))',
      },
    },
    autoFit300: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 300px))',
      },
    },
    autoFit350: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 350px))',
      },
    },
    autoFit400: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 400px))',
      },
    },
    autoFit450: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 450px))',
      },
    },
    autoFit500: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 500px))',
      },
    },
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
  },
  p: {
    none: {
      p: '$1'
    },
    2: {
      p: '#2'
    },
    4: {
      p: '$3'
    },
    8: {
      p: '$4'
    },
    16: {
      p: '$5'
    },
    32: {
      p: '$6'
    },
  },
  py: {
    none: {
      py: '$1'
    },
    2: {
      py: '#2'
    },
    4: {
      py: '$3'
    },
    8: {
      py: '$4'
    },
    16: {
      py: '$5'
    },
    32: {
      py: '$6'
    }
  },
  px: {
    none: {
      px: '$1'
    },
    2: {
      px: '#2'
    },
    4: {
      px: '$3'
    },
    8: {
      px: '$4'
    },
    16: {
      px: '$5'
    },
    32: {
      px: '$6'
    }
  },
  m: {
    none: {
      m: '$1'
    },
    2: {
      m: '#2'
    },
    4: {
      m: '$3'
    },
    8: {
      m: '$4'
    },
    16: {
      m: '$5'
    },
    32: {
      m: '$6'
    },
  },
  my: {
    none: {
      my: '$1'
    },
    2: {
      my: '#2'
    },
    4: {
      my: '$3'
    },
    8: {
      my: '$4'
    },
    16: {
      my: '$5'
    },
    32: {
      my: '$6'
    }
  },
  mx: {
    none: {
      mx: '$1'
    },
    2: {
      mx: '#2'
    },
    4: {
      mx: '$3'
    },
    8: {
      mx: '$4'
    },
    16: {
      mx: '$5'
    },
    32: {
      mx: '$6'
    }
  }
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
 * @param width - Width of the box. `100%` | `75%` | `50%` | `25%` | 0
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
