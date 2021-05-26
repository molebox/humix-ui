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

### Button

A super duper simple, accessible button component.

#### Usage

The button asks that you make a choice as to how you want it to render. It's totally explicit and will shout at you if you dont supply it the props it wants.

Have a look [in real life](https://humix-ui.netlify.app/?path=/docs/interactive-elements-button--primary-button)

**Props**
- color
  - primary
  - secondary
- cornerRadius
  - square
  - slight
  - rounded

```tsx
import { Button } from 'humix-ui'

const RootBoogie = () => (
    <section>
      <Button color="primary" cornerRadius="rounded" onClick={handleTheClicking}>Im a button!</Button>
    </section>
)
```

### Box

A polymorphic box that can be styled in multiple ways. The box has an `as` props which allows it to be rendered as any HTML element.

#### Usage

It's main usage is as a container. It ships with a number of boolean props which add border and / or box shadows of `primary` or `secondary` colors according to the theme config.

The box also takes a `stylz` props which can be used to style the box using object syntax css.

All css properties are avalaible via intellisense and you can use theme token direct in the `stylz` object!

**Props**
 - stylz - Style the container by adding object syntax css. Accepts theme tokens as $myThemeToken
 - border - Attaches a 2px border
 - primaryBottomRight - A box shadow using the primary color on the bottom right
 - primaryBottomLeft - A box shadow using the primary color on the bottom left
 - primaryTopRight - A box shadow using the primary color on the top right
 - primaryTopLeft - A box shadow using the primary color on the top left
 - secondaryTopLeft - A box shadow using the secondary color on the top left
 - secondaryTopRight - A box shadow using the secondary color on the top right
 - secondaryBottomLeft - A box shadow using the secondary color on the bottom left
 - secondaryBottomRight - A box shadow using the secondary color on the bottom right

The following example is a pure container with no visual styling.

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

The following container has some funky arse box shadow styling with a 2px border. The primary color is set via the theme config.

Have a look [in real life](https://humix-ui.netlify.app/?path=/docs/layout-elements-box--primary-box-as-section)

  ```tsx
import { Box, Button } from 'humix-ui';

const RootBoogie = () => (
    <Box
      as="aside"
      primaryBottomRight
      border
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

 Last but not least, this box uses a theme token in it's `stylz` object. OMG 😱

   ```tsx
import { Box, Button } from 'humix-ui';

const RootBoogie = () => (
    <Box
      as="aside"
      primaryBottomRight
      border
      stylz={{
        backgroundColor: '$primary100' // theme token magic
      }}
    >
      <p>some text in my box</p>
    </Box>
)
 ```

 ### Link

 A link component that can be used for external linkage, but also accepts a polymorphic `as` prop so that you can use it with other cool links such as `GatsbyLink` or `NextLink`. It's accessible by default and has minimal styling.

 #### Usage

The link accepts two styling props, `primary` and `secondary`. These style the hover, focus and active states and match them to the colors determined in the theme config.

TODO: add `stylz` prop for easy custom config.

**Props**
- primary
- secondary

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