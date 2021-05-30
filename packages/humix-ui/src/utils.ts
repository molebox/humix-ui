import { CSS } from "../stitches.config";
import { global } from '@stitches/react';

export type HumixBase = {
  stylz?: CSS;
};

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