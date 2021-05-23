import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Button } from './button';

export default {
  title: 'interactive-elements/button',
  component: Button,
} as Meta;

// const Template: Story<ButtonProps> = (args) => <Button {...args} />

// export const Turquoise = Template.bind({})

// Turquoise.args = { color: 'turquoise', children: 'Im a button' }
export const RedButton = () => <Button color="red">Im red</Button>;
export const TurquoiseButton = () => (
  <Button color="turquoise">Im turquoise</Button>
);
