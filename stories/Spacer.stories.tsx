import React from 'react';

import Spacer from '../src/components/Spacer';

const metadata = {
  title: 'Spacer',
  component: Spacer,
};

export default metadata;

export const Horizontal: React.FC = () => (
  <div style={{ display: 'flex' }}>
    <p>First Element</p>
    <Spacer width="200px" maxWidth="500px" />
    <p>Second Element</p>
    <Spacer width="150px" maxWidth="300px" />
    <p>Third Element</p>
  </div>
);

export const Vertical: React.FC = () => (
  <div>
    <p>First Element</p>
    <Spacer height="50" maxHeight="100px" />
    <p>Second Element</p>
    <Spacer height="70px" maxHeight="120px" />
    <p>Third Element</p>
  </div>
);

export const UsingFlexbox: React.FC = () => (
  <div style={{ display: 'flex' }}>
    <p>First Element</p>
    <Spacer flex="1" />
    <p>Second Element</p>
    <Spacer flex="1" />
    <p>Third Element</p>
  </div>
);
