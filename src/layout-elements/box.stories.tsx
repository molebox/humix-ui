import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Box } from './box';

export default {
  title: 'layout-elements/box',
  component: Box,
} as Meta;

export const PrimaryBoxAsSection = () => (
  <Box
    as="section"
    primaryTopRight
    border
    stylz={{
      width: '300px',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    Im a primary section box
  </Box>
);
export const SecondaryBoxAsDiv = () => (
  <Box
    as="div"
    secondaryBottomRight
    border
    stylz={{
      width: '300px',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    Im a secondary div box
  </Box>
);
export const NoFrillsBoxAsAside = () => (
  <Box
    as="aside"
    stylz={{
      width: '300px',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    Im a no frills aside box
  </Box>
);
