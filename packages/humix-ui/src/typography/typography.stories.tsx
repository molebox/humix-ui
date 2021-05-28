import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Typography } from './typography';

export default {
  title: 'typography/typography',
  component: Typography,
} as Meta;

export const Paragraph = () => (
  <Typography size="m">
    Im a paragraph!
  </Typography>
);
export const H1 = () => (
    <Typography as="h1" size="jumbo">
    Im an h1!
  </Typography>
);
export const H2 = () => (
    <Typography as="h2" size="huge">
    Im an h2!
  </Typography>
);
export const H3 = () => (
    <Typography as="h3" size="xxl">
    Im an h3!
  </Typography>
);
export const H4 = () => (
    <Typography as="h4" size="xl">
    Im an h4!
  </Typography>
);
export const H5 = () => (
    <Typography as="h5" size="l">
    Im an h5!
  </Typography>
);
export const H6 = () => (
    <Typography as="h6" size="l">
    Im an h6!
  </Typography>
);