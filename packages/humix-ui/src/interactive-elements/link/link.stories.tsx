import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Link } from './link';

export default {
  title: 'interactive-elements/link',
  component: Link,
} as Meta;

export const PrimaryLink = () => (
  <Link primary href="https://richardhaines.dev">
    Im a link, hover me!
  </Link>
);
export const SecondaryLink = () => <Link secondary>Im a link, hover me!</Link>;
