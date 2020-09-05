import React from 'react';
import { css } from 'styled-components';

import { stackCSS, IStackProps } from '../Stack/Stack';
import { IWithResponsiveOrientation } from '../../common/orientation';

type Key = string;

export type IWithKey = { key: string };

export type IUnknownWithKey = unknown & IWithKey;

export type IMapCallbackFunction<TDataListItemType> = (
  item: TDataListItemType,
  index: number,
  data: Array<TDataListItemType>
) => React.ReactElement;

export type IKeyExtractorFunction<TDataListItemType> = (
  item: TDataListItemType,
  index: number,
  data: Array<TDataListItemType>
) => Key;

export type ICommonFlatListProps<TDataListItemType, TListType> = {
  /**
   * For simplicity, data is a plain array.
   */
  data: Array<TDataListItemType>;
  /**
   * Takes an item from data and renders it into the list.
   */
  renderItem: IMapCallbackFunction<TDataListItemType>;
  /**
   * Props of the list item container
   */
  listItemProps?: React.HTMLAttributes<HTMLLIElement> & IStackProps;
  /**
   * Used to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks item.key, then falls back to using an uuid.
   */
  keyExtractor?: IKeyExtractorFunction<TDataListItemType>;
  /**
   * Used to extract a unique test id for a given item at the specified index. The test id is used for identifying an item during a UI test.
   */
  testIdExtractor?: IKeyExtractorFunction<TDataListItemType>;
} & IWithResponsiveOrientation &
  Omit<TListType, 'children' | 'itemCount' | 'layout'> &
  IStackProps;

export const stackListCSS = css`
  ${stackCSS};
  list-style-type: none;
  padding-left: 0;
  margin: 0;
`;

export const DEFAULT_LIST_ITEM_ELEMENT = 'li';

export const DEFAULT_LIST_ELEMENT = 'ul';
