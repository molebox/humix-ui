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

Storybook: [humix-ui.netlify.app](https://humix-ui.netlify.app/)

Current components:
- Button

## Install

`yarn add humix-ui` || `npm install humix-ui`

## Components

### Button

A super duper simple, accessible button component.

#### Usage

The buttons default styles are a turquoise background with slightly rounded corners. Alternatively you can change the colour to red and the corner radiuses to either square or rounded.

**Props**
- color
  - red
  - turquoise
- cornerRadius
  - square
  - slight
  - rounded

```tsx
import { Button } from 'humix-ui'

<Button color="red" cornerRadius="rounded" >Im red!</Button>
```

