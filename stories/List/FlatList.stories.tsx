import React from 'react';

import FlatList from '../../src/components/List/FlatList';

const metadata = {
  title: 'FlatList',
  component: FlatList,
};

export default metadata;

const contacts = new Array(1000)
  .fill(true)
  .map((_, idx) => idx + 1)
  .map(x => ({
    key: `cellphone-contact-${x}`,
    name: `Contact ${x}`,
    profilePicture: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
  }));

export const Basic: React.FC = () => (
  <FlatList data={contacts} width="100%" height={500} itemSize={60} renderItem={item => <p>{item.name}</p>} />
);

export const Horizontal: React.FC = () => (
  <FlatList
    data={contacts}
    orientation="horizontal"
    width={500}
    height={400}
    itemSize={120}
    renderItem={item => <p>{item.name}</p>}
  />
);
