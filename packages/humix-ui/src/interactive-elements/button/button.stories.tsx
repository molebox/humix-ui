import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from './button';
import { media } from '../../../stitches.config'

export default {
  title: 'interactive-elements/button',
  component: Button,
} as Meta;

export const PrimaryButton = () => (
  <Button color="primary" cornerRadius={{'@sm': 'rounded', '@md': 'square'}}>
    Im a button!
  </Button>
);
export const SecondaryButton = () => (
  <Button color="secondary" cornerRadius="square">
    Im a button!
  </Button>
);
