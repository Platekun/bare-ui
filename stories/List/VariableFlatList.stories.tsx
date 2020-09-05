import React from 'react';

import VariableFlatList from '../../src/components/List/VariableFlatList';

const metadata = {
  title: 'VariableFlatList',
  component: VariableFlatList,
};

export default metadata;

const rowHeights = new Array(1000).fill(true).map(() => 25 + Math.round(Math.random() * 150));

const getItemSize = (index: number) => rowHeights[index];

const contacts = new Array(1000)
  .fill(true)
  .map((_, idx) => idx + 1)
  .map(x => ({
    key: `cellphone-contact-${x}`,
    name: `Contact ${x}`,
    profilePicture: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
  }));

export const Basic: React.FC = () => (
  <VariableFlatList
    data={contacts}
    width="100%"
    height={500}
    itemSize={getItemSize}
    renderItem={item => <p>{item.name}</p>}
  />
);

export const Horizontal: React.FC = () => (
  <VariableFlatList
    data={contacts}
    orientation="horizontal"
    width={500}
    height={400}
    itemSize={getItemSize}
    renderItem={item => <p>{item.name}</p>}
  />
);
