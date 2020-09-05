import React from 'react';
import styled from 'styled-components';
import { ListChildComponentProps, VariableSizeList, VariableSizeListProps } from 'react-window';
import cuid from 'cuid';

import Stack from '../Stack/Stack';
import { stackListCSS, ICommonFlatListProps, DEFAULT_LIST_ITEM_ELEMENT } from './common';

type IVariableFlatListProps<TDataListItemType> = {
  /**
   * Function used to calculate the size of a list item.
   */
  itemSize: VariableSizeListProps['itemSize'];
} & ICommonFlatListProps<TDataListItemType, VariableSizeListProps>;

const VariableStackList = styled(VariableSizeList)`
  ${stackListCSS}
`;

/**
 * A React component for performant rendering for list of content (Flat lists). It replaces the unordered list tag.
 *
 * `VariableFlatList` expect every item to be of different size, that's why the an `itemSize` function must be provided. For items with the same size consider using the `FlatList` component.
 *
 * Depending on the value of the `orientation` prop, the required prop `size` will refer to either the `width` or `height` of the items.
 */
function VariableFlatList<TDataListItemType>(props: IVariableFlatListProps<TDataListItemType>) {
  const {
    orientation = 'vertical',
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
    <VariableStackList
      orientation={orientation}
      layout={orientation}
      itemSize={itemSize}
      itemKey={itemKey}
      itemCount={itemCount}
      {...rest}
    >
      {ListItem}
    </VariableStackList>
  );
}

export default VariableFlatList;
