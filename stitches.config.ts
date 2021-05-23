import { createCss } from '@stitches/react';

export const { styled, getCssString, css } = createCss({
    theme: {
        fonts: {
            system: 'system-ui',
        },
        colors: {
            turquoise100: 'hsl(170, 86%, 62%)',
            turquoise200: 'hsl(170, 86%, 80%)',
            red100: 'hsl(359, 93%, 52%)',
            red200: 'hsl(359, 93%, 60%)',
            darkGrey: '#2F2F2F',
            offWhite: '#F7F3F5'
        },
        space: {
            1: '0px',
            2: '2px',
            3: '4px',
            4: '8px',
            5: '16px',
            6: '32px',
            7: '64px',
            8: '128px',
            9: '256px',
            10: '512px',
        },
        fontSizes: {
            1: '0.75rem',
            2: '0.875rem',
            3: '1rem',
            4: '1.25rem',
            5: '1.5rem',
            6: '2rem',
            7: '3rem',
            8: '4rem',
        },
        fontWeights: {},
        lineHeights: {
            solid: 1,
            heading: 1.25,
            body: 1.5
        },
        letterSpacings: {},
        sizes: {
            maxWidth: 1440,
            interactiveElementHeight: '40px',
            interactiveElementMinWidth: '100px'
        },
        borderWidths: {
            1: '0px',
            2: '1px',
            3: '2px',
            4: '4px'
        },
        borderStyles: {
            1: 'none',
            2: 'solid'
        },
        // Radius
        radii: {
            none: '0px',
            slight: '5px',
            rounded: '9px',
            pill: '9999px', // rounded
        },
        shadows: {},
        zIndices: {},
        transitions: {},
    },
    media: {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
    },
});