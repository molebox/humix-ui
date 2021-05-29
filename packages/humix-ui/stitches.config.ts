import { createCss, StitchesCss, global } from '@stitches/react';

/**
 * Set your font globally with a self hosted font-face.
 * @param fontFamily - The font family. For example: CustomFont1
 * @param src - The path to the self hosted font. For example: local("CustomFont1"), url("CustomFont1.woff2")
 */
export const fontFace = (fontFamily: string, src: string) => global({
    '@font-face': {
        fontFamily,
        src,
    },
})

type FontFace = {
    fontFamily: string;
    src: string;
}

/**
 * Set your font globally with a self hosted font-face. This function sets multiple fonts
 * @param fontFaces - An array of font family values.
 * The config requires an object array where each object is:
 * @example
 *  {
      fontFamily: 'CustomFont1',
      src: 'local("CustomFont1"), url("CustomFont1.woff2")',
    },
    {
      fontFamily: 'CustomFont2',
      src: 'local("CustomFont2"), url("CustomFont2.woff2")',
    },
 */
export const multiFontFace = (fontFaces: FontFace[]) => global({
    '@font-face': [...fontFaces],
})

/**
 * A global css reset. Call function at the root level of your app.
 */
export const resetCSS = global({
    '*': {
        verticalAlign: 'baseline',
        fontWeight: 'inherit',
        fontFamily: 'inherit',
        fontStyle: 'inherit',
        fontSize: '100%',
        border: '0 none',
        outline: 0,
        padding: 0,
        margin: 0
    }
})

/**
 * The default humix theme
 */
export const defaultTheme = createCss({
    prefix: 'humix-',
    theme: {
        fonts: {
            body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol',
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
        zIndices: {
            neutral: 0,
            above: 100,
            below: -100,
            onTop: 999999999
        },
        transitions: {},
    },
    media: {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
    },
});

export const { styled, getCssString, css, theme } = defaultTheme;

/**
 * The CSS types that map to the theme. Used for the `stylz` css override
 */
export type CSS = StitchesCss<typeof defaultTheme>;

/**
 * An example custom theme with pastel colors.
 */
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