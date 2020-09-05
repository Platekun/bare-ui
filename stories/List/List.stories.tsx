import React from 'react';

import List from '../../src/components/List/List';

const metadata = {
  title: 'List',
  component: List,
};

export default metadata;

const people = ['Jonas', 'Martha', 'Charles', 'Fredrik'];

export const Basic: React.FC = () => <List data={people} renderItem={name => <p>{name}</p>} />;

export const Horizontal: React.FC = () => (
  <List data={people} orientation="horizontal" renderItem={name => <p>{name}</p>} />
);

export const VerticalWithGap: React.FC = () => (
  <List data={people} orientation="vertical" gap="16px" renderItem={name => <p>{name}</p>} />
);

export const HorizontalWithGap: React.FC = () => (
  <List data={people} orientation="horizontal" gap="16px" renderItem={name => <p>{name}</p>} />
);
