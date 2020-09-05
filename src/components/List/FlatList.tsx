import React from 'react';
import styled from 'styled-components';
import { ListChildComponentProps, FixedSizeList, FixedSizeListProps } from 'react-window';
import cuid from 'cuid';

import Stack from '../Stack/Stack';
import { stackListCSS, ICommonFlatListProps, DEFAULT_LIST_ITEM_ELEMENT } from './common';
import { VERTICAL } from '../../common/orientation';

type IFixedFlatListProps<TDataListItemType> = {
  /**
   * Size of a list item.
   */
  itemSize: FixedSizeListProps['itemSize'];
} & ICommonFlatListProps<TDataListItemType, FixedSizeListProps>;

const FixedStackList = styled(FixedSizeList)`
  ${stackListCSS}
`;

/**
 * A React component for performant rendering for list of content (Flat lists). It replaces the unordered list tag.
 *
 * `FlatList` expect every item to be of the same size. For items with different sizes consider using the `VariableFlatList` component.
 *
 * Depending on the value of the `orientation` prop, the required prop `size` will refer to either the `width` or `height` of the items.
 */
function FlatList<TDataListItemType>(props: IFixedFlatListProps<TDataListItemType>) {
  const {
    orientation = VERTICAL,
    data,
    renderItem,
    itemSize,
    listItemProps,
    keyExtractor = cuid,
    testIdExtractor,
    ...rest
  } = props;

  const itemKey = (index: number) => keyExtractor(data[index], index, data);

  const itemCount = data.length;

  const ListItem: React.FC<ListChildComponentProps> = childProps => {
    const { index, style } = childProps;

    const item = data[index];

    const dataTestId = testIdExtractor ? testIdExtractor(item, index, data) : null;

    return (
      <Stack as={DEFAULT_LIST_ITEM_ELEMENT} style={style} data-testid={dataTestId} {...listItemProps}>
        {renderItem(item, index, data)}
      </Stack>
    );
  };

  return (
    <FixedStackList
      direction={orientation}
      layout={orientation}
      itemSize={itemSize}
      itemKey={itemKey}
      itemCount={itemCount}
      {...rest}
    >
      {ListItem}
    </FixedStackList>
  );
}

export default FlatList;
