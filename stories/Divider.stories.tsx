import React from 'react';

import Divider from '../src/components/Divider';

const metadata = {
  component: Divider,
  title: 'Divider',
};

export default metadata;

export const Basic: React.FC = () => (
  <div>
    <p>Lorem ipsum</p>
    <Divider />
    <p>Lorem ipsum</p>
    <Divider />
    <p>Lorem ipsum</p>
  </div>
);

export const Horizontal: React.FC = () => (
  <div>
    <p>Lorem ipsum</p>
    <Divider orientation="horizontal" />
    <p>Lorem ipsum</p>
    <Divider orientation="horizontal" />
    <p>Lorem ipsum</p>
  </div>
);

export const Vertical: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: 300,
      height: '100px',
    }}
  >
    <p>Lorem ipsum</p>
    <Divider orientation="vertical" />
    <p>Lorem ipsum</p>
    <Divider orientation="vertical" />
    <p>Lorem ipsum</p>
  </div>
);

export const responsiveOrientation: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: 300,
      height: '100px',
    }}
  >
    <p>Lorem ipsum</p>
    <Divider
      orientation={{
        xs: 'horizontal',
        sm: 'vertical',
        md: 'horizontal',
        lg: 'vertical',
      }}
    />
    <p>Lorem ipsum</p>
    <Divider
      orientation={{
        xs: 'horizontal',
        sm: 'vertical',
        md: 'horizontal',
        lg: 'vertical',
      }}
    />
    <p>Lorem ipsum</p>
  </div>
);
