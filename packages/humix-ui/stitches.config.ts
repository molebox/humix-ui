import { createCss, StitchesCss } from '@stitches/react';

export const defaultTheme = createCss({
    prefix: 'humix-',
    theme: {
        fonts: {
            openSans: 'Open Sans',
        },
        colors: {
            primary100: 'hsl(170, 86%, 62%)',
            primary200: 'hsl(170, 86%, 80%)',
            secondary100: 'hsl(359, 93%, 70%)',
            secondary200: 'hsl(359, 93%, 60%)',
            focusOutline: 'hsl(300, 47%, 75%)',
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
            xs: '0.75rem', // xs
            s: '0.875rem', // s
            m: '1rem', // m
            l: '1.25rem', // l
            xl: '1.5rem', // xl
            xxl: '2rem', // xxl
            huge: '3rem', // huge
            jumbo: '4rem', // jumbo
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
        shadows: {
            primaryFocus: '0px 1px 0px 0px rgba(0,0,0,1), 0px 0px 8px hsl(170, 86%, 62%)',
            secondaryFocus: '0px 1px 0px 0px rgba(0,0,0,1), 0px 0px 8px hsl(359, 93%, 52%)',
            primaryBoxBottomRight: '10px 10px 1px 1px hsl(170, 86%, 62%)',
            secondaryBoxBottomRight: '10px 10px 1px 1px hsl(359, 93%, 52%)',
            primaryBoxBottomLeft: '-10px 10px 1px 1px hsl(170, 86%, 62%)',
            secondaryBoxBottomLeft: '-10px 10px 1px 1px hsl(359, 93%, 52%)',
            primaryBoxTopRight: '10px -10px 1px 1px hsl(170, 86%, 62%)',
            secondaryBoxTopRight: '10px -10px 1px 1px hsl(359, 93%, 52%)',
            primaryBoxTopLeft: '-10px -10px 1px 1px hsl(170, 86%, 62%)',
            secondaryBoxTopLeft: '-10px -10px 1px 1px hsl(359, 93%, 52%)',
        },
        zIndices: {},
        transitions: {},
    },
    media: {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
    },
});

export const { styled, getCssString, css, theme, media } = defaultTheme;

export type CSS = StitchesCss<typeof defaultTheme>;

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