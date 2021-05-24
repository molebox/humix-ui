import { createCss } from '@stitches/react';

export const { styled, getCssString, css, theme } = createCss({
    prefix: 'humix-',
    theme: {
        fonts: {
            system: 'system-ui',
        },
        colors: {
            primary100: 'hsl(170, 86%, 62%)',
            primary200: 'hsl(170, 86%, 80%)',
            secondary100: 'hsl(359, 93%, 52%)',
            secondary200: 'hsl(359, 93%, 60%)',
            darkText: '#2F2F2F',
            lightText: '#F7F3F5'
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

export const pastelTheme = theme({
    colors: {
        primary100: 'hsl(110, 100%, 87%)',
        primary200: 'hsl(110, 100%, 80%)',
        secondary100: 'hsl(62, 100%, 86%)',
        secondary200: 'hsl(62, 100%, 76%)',
        darkText: '#001F52',
        lightText: '#FFFFFC'
    }
})