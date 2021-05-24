<div align="center">
  <h1>humix-ui</h1>
</div>

<p align="center">
  Small. Simple component library.
</p>

## What?

It's pronounced hue-mix. It's a mix of my three kids names, Hollie, Uma and Phoenix.

## Why?

Why not? Learn by doing. Ive never made a component library before.

## Where?

Storybook: [humix-ui.netlify.app](https://humix-ui.netlify.app/)

## Install

`yarn add humix-ui` | `npm install humix-ui`

## Components

Current components:
- Button

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

<Button color="primary" cornerRadius="rounded" onClick={handleTheClicking}>Im red!</Button>
```

