<div align="center">
  <h1>humix-ui</h1>
</div>

<p align="center">
  A Small. Simple component library with nice props and easy config.
</p>

## What?

It's pronounced hue-mix. It's a mix of my three kids names, Hollie, Uma and Phoenix.

## Why?

Why not? Learn by doing. Ive never made a component library before. This library is built on top of [stitches](https://stitches.dev/). Anything you may find awesome is their work, this is just a nice abstraction with props that i like and easy config.

## Where?

Storybook: [humix-ui.netlify.app](https://humix-ui.netlify.app/)

## Install

`yarn add humix-ui` | `npm install humix-ui`

## Components

Current components:
- [Button](#button)
- [Box](#box)
- [Link](#link)
- [Typography](#typography)

All components are created and styled using [stitches](https://stitches.dev/). The default theme object can be overriden by importing the `createTheme` function and replacing the theme tokens. Intellisense is included by default because stitches is dope.

All tokens are customizable, let the auto-complete guide you and if that doesn't suffice you can check out the [stitches tokens docs](https://stitches.dev/docs/tokens).

```ts
import { createTheme } from 'humix-ui'

export const myTheme = creteTheme({
    colors: {
        primary100: 'hsl(110, 100%, 87%)',
        primary200: 'hsl(110, 100%, 80%)',
        secondary100: 'hsl(62, 100%, 86%)',
        secondary200: 'hsl(62, 100%, 76%)',
        darkText: '#001F52',
        lightText: '#FFFFFC'
    }
})
```

To consume your new theme just add it as a className to any parent element whose children render humix-ui components. Your new color values will now be rendered instead of the defaults.

```tsx
import { myTheme } from 'path/to/my/theme'

const RootBoogie = () => (
  <div className={myTheme}>
    <section>
      <Button color="primary" cornerRadius="rounded" >Im a button!</Button>
    </section>
  </div>
)
```

Humix also ships with a few different themes which you can import and apply the same way as stated above.

```tsx
import { pastelTheme } from 'humix-ui'

const RootBoogie = () => (
  <div className={pastelTheme}>
    <section>
      <Button color="primary" cornerRadius="rounded" onClick={handleTheClicking}>Im a button!</Button>
    </section>
  </div>
)
```

Current theme list:
- default
- pastelTheme

### Utilities

Humix ships with some handy utility functions:

- [A global CSS reset](#resetcss)
- [Font face](#fontface)
- [Multiple font faces](#multifontface)

#### `resetCSS`

Call this function at the root level of your app. It's a sane, default CSS reset:

```tsx
import { resetCSS } from 'humix-ui'

const Root = () => {
  resetCSS()

  return (
    <div>Sup?</div>
  )
}
```

#### FontFace

Set your font globally with a self hosted font-face.

```tsx
import { fontFace } from 'humix-ui'

const Root = () => {
  fontFace('Open Sans', pathToFont)

  return (
    <div>Sup?</div>
  )
}
```

#### MultiFontFace

Set multiple fonts globally with a self hosted font-faces.

```tsx
import { multiFontFace } from 'humix-ui'

const Root = () => {
    const myFonts = [
    {
      fontFamily: 'CustomFont1',
      src: 'local("CustomFont1"), url("CustomFont1.woff2")',
    },
    {
      fontFamily: 'CustomFont2',
      src: 'local("CustomFont2"), url("CustomFont2.woff2")',
    },
  ],

  multiFontFace(myFonts)

  return (
    <div>Sup?</div>
  )
}
```

### Button

A super duper simple, accessible button component.

#### Usage

The button asks that you make a choice as to how you want it to render. It's totally explicit and will shout at you if you dont supply it the props it wants.

Have a look [in real life](https://humix-ui.netlify.app/?path=/docs/interactive-elements-button--primary-button)

| prop         | default  | description                                                                          | options                       |
| ------------ | -------- | ------------------------------------------------------------------------------------ | ----------------------------- |
| stylz        | optional | Style the element by adding object syntax css. Accepts theme tokens as $myThemeToken | n/a                           |
| color        | none     | Background color of the button                                                       | `primary`, `secondary`        |
| cornerRadius | none     | Corner radius of the button                                                          | `square`, `slight`, `rounded` |

```tsx
import { Button } from 'humix-ui'

const RootBoogie = () => (
    <section>
      <Button color="primary" cornerRadius="rounded" onClick={handleTheClicking}>Im a button!</Button>
    </section>
)
```

### Box

A polymorphic box that can be styled in multiple ways. The box has an `as` props which allows it to be rendered as any of the following HTML elements:

- div (default)
- section
- main
- header
- nav
- footer
- aside
- article

#### Usage

It's main usage is as a container. It ships with a number of boolean props which add border and / or box shadows of `primary` or `secondary` colors according to the theme config.

The box also takes a `stylz` props which can be used to style the box using object syntax css.

All css properties are avalaible via intellisense and you can use theme token direct in the `stylz` object!

| prop                 | default  | description                                                                          | options                     |
| -------------------- | -------- | ------------------------------------------------------------------------------------ | --------------------------- |
| stylz                | optional | Style the element by adding object syntax css. Accepts theme tokens as $myThemeToken | n/a                         |
| border               | optional | Attaches a 2px border                                                                | n/a                         |
| maxWidth             | optional | Max width of the box.                                                                | `500px`, `1000px`, `1440px` |
| autoFill300          | optional | Responsive grid (auto-fill), min - auto, max - 300px                                 | n/a                         |
| autoFill350          | optional | Responsive grid (auto-fill), min - auto, max - 350px                                 | n/a                         |
| autoFill400          | optional | Responsive grid (auto-fill), min - auto, max - 400px                                 | n/a                         |
| autoFill450          | optional | Responsive grid (auto-fill), min - auto, max - 450px                                 | n/a                         |
| autoFill500          | optional | Responsive grid (auto-fill), min - auto, max - 500px                                 | n/a                         |
| autoFit300           | optional | Responsive grid (auto-fit), min - auto, max - 300px                                  | n/a                         |
| autoFit350           | optional | Responsive grid (auto-fit), min - auto, max - 350px                                  | n/a                         |
| autoFit400           | optional | Responsive grid (auto-fit), min - auto, max - 400px                                  | n/a                         |
| autoFit450           | optional | Responsive grid (auto-fit), min - auto, max - 450px                                  | n/a                         |
| autoFit500           | optional | Responsive grid (auto-fit), min - auto, max - 500px                                  | n/a                         |
| primaryBottomRight   | optional | A box shadow using the primary color on the bottom right                             | n/a                         |
| primaryBottomLeft    | optional | A box shadow using the primary color on the bottom left                              | n/a                         |
| primaryTopRight      | optional | A box shadow using the primary color on the top right                                | n/a                         |
| primaryTopLeft       | optional | A box shadow using the primary color on the top left                                 | n/a                         |
| secondaryTopLeft     | optional | A box shadow using the secondary color on the top left                               | n/a                         |
| secondaryTopRight    | optional | A box shadow using the secondary color on the top right                              | n/a                         |
| secondaryBottomLeft  | optional | A box shadow using the secondary color on the bottom left                            | n/a                         |
| secondaryBottomRight | optional | A box shadow using the secondary color on the bottom right                           | n/a                         |

#### No styling, just a container

 ```tsx
import { Box, Button } from 'humix-ui';

const RootBoogie = () => (
    <Box
      as="section"
      stylz={{
        width: '300px',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button color="primary" cornerRadius="rounded" onClick={handleTheClicking}>Im a button!</Button>
    </Box>
)
 ```

#### Some funky arse box shadow styling with a 2px border.

Have a look [in real life](https://humix-ui.netlify.app/?path=/docs/layout-elements-box--primary-box-as-section)

```tsx
import { Box, Button } from 'humix-ui';

const RootBoogie = () => (
    <Box
      as="aside"
      primaryBottomRight
      border
    >
      <Button color="primary" cornerRadius="rounded" onClick={handleTheClicking}>Im a button!</Button>
    </Box>
)
```

#### Using the `stlyz` prop to override the base styles

The box component is special in that, in a general sense its cool to override the base styles. It's got some nice base props bit as a conatiner component,
you'll want to style it your way.

```tsx
import { Box, Typography } from 'humix-ui';

const RootBoogie = () => (
    <Box
      as="aside"
      primaryBottomRight
      border
      stylz={{
        backgroundColor: '$primary100' // theme token magic
      }}
    >
      <Typography size="m">some text in my box</Typography>
    </Box>
)
```

#### Flexbox

```tsx
import { Box, Typography } from 'humix-ui';

const RootBoogie = () => (
    <Box
      as="aside"
      flex="column"
      border
      stylz={{
        backgroundColor: '$primary100'
      }}
    >
      <Box
      as="aside"
      border
      primaryBottomRight
      >
        <Typography size="m">some text in my box</Typography>
      </Box>
      <Box
      as="aside"
      border
      primaryBottomRight
      >
        <Typography size="m">some text in my box</Typography>
      </Box>
    </Box>
)
```

#### Responsive grids

The box supports some default responsive grids. Each grid prop equats to it title. So `autoFill300`
will make all children fill their parents width with a value of 300px each. On smaller screens they will reduce to their parents max width.

This means on mobile they should go single column. Don't forget to add padding to your container!

```tsx
import { Box, Typography } from 'humix-ui';

const RootBoogie = () => (
    <Box
      as="aside"
      flex="column"
      border
      stylz={{
        backgroundColor: '$primary100'
      }}
    >
      <Box
      as="aside"
      border
      primaryBottomRight
      >
        <Typography size="m">some text in my box</Typography>
      </Box>
      <Box
      as="aside"
      border
      primaryBottomRight
      >
        <Typography size="m">some text in my box</Typography>
      </Box>
      <Box
      as="aside"
      border
      primaryBottomRight
      >
        <Typography size="m">some text in my box</Typography>
      </Box>
    </Box>
)
```

### Link

 A link component that can be used for external linkage, but also accepts a polymorphic `as` prop so that you can use it with other cool links such as `GatsbyLink` or `NextLink`. It's accessible by default and has minimal styling.

#### Usage

The link accepts two styling props, `primary` and `secondary`. These style the hover, focus and active states and match them to the colors determined in the theme config.

| prop      | default  | description                                                                          | options |
| --------- | -------- | ------------------------------------------------------------------------------------ | ------- |
| stylz     | optional | Style the element by adding object syntax css. Accepts theme tokens as $myThemeToken | n/a     |
| primary   | none     | Primary background color                                                             | n/a     |
| secondary | none     | Secondary background color                                                           | n/a     |


The below example shows an external link.

```tsx
import { Link } from 'humix-ui'

const RootBoogie = () => (
    <section>
      <Link primary href="https://richardhaines.dev">
          Im a link, hover me!
      </Link>
    </section>
)
```

The below example shows using the `as` prop in combination with `GatsbyLink`. Passing the `GatsbyLink` component via the `as` prop is not actually needed, the Links `href` prop will navigate to the desired page anyway.

```tsx
import { Link } from 'humix-ui'
import { Link as GatsbyLink } from 'gatsby'

const RootBoogie = () => (
    <section>
      <Link primary as={GatsbyLink} href="/">
          Im a link, hover me!
      </Link>
    </section>
)
```

If you are using Nextjs you must wrap this Link component with the Nextjs Link component.

```tsx
import { Link } from 'humix-ui'
import { Link as NextLink } from 'next/link'

const RootBoogie = () => (
    <section>
      <NextLink href="/">
        <Link primary>
            Im a link, hover me!
        </Link>
      </NextLink>
    </section>
)
```

### Typography

The typography component is a polymorphic text component that can be used to render:

- p (default)
- h1
- h2
- h3
- h4
- h5
- h6
- blockquote
- dd
- li
- abbr
- cite
- q
- s

It's font size is determined in the config and set via a `size` prop.

#### Usage

By default the component render a `p` tag, you'll still have to set the size though.

| prop  | default  | description                                                                          | options |
| ----- | -------- | ------------------------------------------------------------------------------------ | ------- |
| stylz | optional | Style the element by adding object syntax css. Accepts theme tokens as $myThemeToken | n/a     |
| xs    | none     | Extra small font size color                                                          | n/a     |
| s     | none     | Small font size color                                                                | n/a     |
| m     | none     | Medium font size - Your `1rem` color                                                 | n/a     |
| l     | none     | Large font size color                                                                | n/a     |
| xl    | none     | Extra large font size color                                                          | n/a     |
| xxl   | none     | Double extra large font sizecolor                                                    | n/a     |
| huge  | none     | Huge large font size color                                                           | n/a     |
| jumbo | none     | Jumbo large font sizecolor                                                           | n/a     |

```tsx
export const Paragraph = () => (
  <Typography size="m">
    Im a paragraph!
  </Typography>
);
```

Using the component as other types of typography is as easy as declaring its type and setting its size.

```tsx
export const H1 = () => (
  <Typography as="h1" size="jumbo">
    Im an h1!
  </Typography>
);
```