import React from 'react';

import Stack from '../../src/components/Stack/Stack';
import { getColorBlock } from './common';

const metadata = {
  title: 'Stack',
  component: Stack,
};

export default metadata;

export const Basic: React.FC = () => (
  <Stack>
    {getColorBlock('red')}
    {getColorBlock('wheat')}
    {getColorBlock('steelblue')}
  </Stack>
);

export const Horizontal: React.FC = () => (
  <Stack orientation="horizontal">
    {getColorBlock('red')}
    {getColorBlock('wheat')}
    {getColorBlock('steelblue')}
  </Stack>
);

export const Vertical: React.FC = () => (
  <Stack orientation="vertical">
    {getColorBlock('red')}
    {getColorBlock('wheat')}
    {getColorBlock('steelblue')}
  </Stack>
);

export const responsiveOrientation: React.FC = () => (
  <Stack
    orientation={{
      xs: 'horizontal',
      sm: 'vertical',
      md: 'horizontal',
      lg: 'vertical',
    }}
  >
    {getColorBlock('red')}
    {getColorBlock('wheat')}
    {getColorBlock('steelblue')}
  </Stack>
);
