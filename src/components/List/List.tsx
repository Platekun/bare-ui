import React from 'react';
import styled from 'styled-components';
import cuid from 'cuid';

import customBreakpoints, { IResponsiveProp, ITransformResponsiveProps } from '../../common/custom-breakpoints';
import {
  stackListCSS,
  IMapCallbackFunction,
  IKeyExtractorFunction,
  DEFAULT_LIST_ELEMENT,
  DEFAULT_LIST_ITEM_ELEMENT,
} from './common';
import Stack, { IStackProps, orientationTransform } from '../Stack/Stack';
import { VERTICAL } from '../../common/orientation';

type IWithGap = { gap?: string };

type IListCSSProps = IStackProps & {
  /**
   * Value of the distance between each list element. You can use any valid CSS value.
   */
  gap?: IResponsiveProp<string>;
};

type IListProps<TDataListItemType> = {
  /**
   * For simplicity, data is a plain array.
   */
  data: Array<TDataListItemType>;
  /**
   * Takes an item from data and renders it into the list.
   */
  renderItem?: IMapCallbackFunction<TDataListItemType>;
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
} & IListCSSProps;

const StackList = styled(Stack)`
  ${stackListCSS};

  ${(props: IListCSSProps) =>
    customBreakpoints({
      prop: 'orientation',
      props,
      transform: orientationTransform,
    })}

  ${(props: IListCSSProps) =>
    customBreakpoints({
      prop: 'gap',
      props,
      transform: function containerGapTransform(props: ITransformResponsiveProps<IListCSSProps, 'gap', IWithGap>) {
        const { gap = '0px' } = props;

        return `
          --gap: ${gap};
      
          flex-wrap: wrap;
          margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
          width: calc(100% + var(--gap));
        `;
      },
    })}
`;

type IListItemCSSProps = IListCSSProps;

function childGapTransform(props: IListItemCSSProps) {
  const { gap = '0px' } = props;

  return `
    --gap: ${gap};

    margin: var(--gap) 0 0 var(--gap);
  `;
}

const StackListItem = styled(Stack)`
  ${stackListCSS};
  list-style-type: none;
  flex-direction: row;

  ${(props: IListItemCSSProps) =>
    customBreakpoints({
      prop: 'gap',
      props,
      transform: childGapTransform,
    })}
`;

/**
 * A React component for rendering a basic list of content. No optimizations, only defaults. It replaces the unordered list tag.
 */
const List = <TDataListItemType extends unknown>(props: IListProps<TDataListItemType>) => {
  const {
    orientation = VERTICAL,
    data,
    renderItem = x => x,
    listItemProps,
    keyExtractor = cuid,
    testIdExtractor,
    gap,
    ...rest
  } = props;

  const itemKey = (index: number) => keyExtractor(data[index], index, data);

  return (
    <StackList as={DEFAULT_LIST_ELEMENT} orientation={orientation} gap={gap} {...rest}>
      {data.map(function ListItem(item, index, collection) {
        const dataTestId = testIdExtractor ? testIdExtractor(item, index, data) : null;

        return (
          <StackListItem
            as={DEFAULT_LIST_ITEM_ELEMENT}
            key={itemKey(index)}
            data-testid={dataTestId}
            gap={gap}
            {...listItemProps}
          >
            {renderItem(item, index, collection)}
          </StackListItem>
        );
      })}
    </StackList>
  );
};

export default List;
