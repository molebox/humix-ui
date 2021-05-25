import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from './button';

export default {
  title: 'interactive-elements/button',
  component: Button,
} as Meta;

export const PrimaryButton = () => (
  <Button color="primary" cornerRadius="rounded">
    Im a button!
  </Button>
);
export const SecondaryButton: React.FC<ButtonProps> = () => (
  <Button color="secondary" cornerRadius="square">
    Im a button!
  </Button>
);
