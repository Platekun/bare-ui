import React from 'react';
import styled from 'styled-components';
import { PropsFor, flexbox, breakpoints } from '@material-ui/system';

import { IWithResponsiveOrientation, VERTICAL } from '../common/orientation';
import isFunction from '../common/isFunction';
import { IStylable } from '../common/styles';
import noScrollBarsTransform, { IWithScrollBars, overflowXTransform, overflowYTransform } from '../common/scroll-bars';
import customBreakpoints from '../common/custom-breakpoints';

const flexboxTransforms = breakpoints(flexbox);

type IFlexboxProps = PropsFor<typeof flexboxTransforms>;

type IScrollViewCSSProps = IWithScrollBars & IWithResponsiveOrientation & IFlexboxProps;

type IScrollViewProps = {
  /**
   * Callback invoked once you reach the end of the scrollable content.
   */
  onBottomReached?: VoidFunction;
} & IScrollViewCSSProps &
  IStylable;

const StyledScrollView = styled.div<IScrollViewCSSProps>`
  height: 100%;
  
  ${flexboxTransforms}
  
  ${(props: IScrollViewCSSProps) =>
    customBreakpoints({
      prop: 'orientation',
      props,
      transform: overflowXTransform,
    })}

    ${(props: IScrollViewCSSProps) =>
      customBreakpoints({
        prop: 'orientation',
        props,
        transform: overflowYTransform,
      })}

  ${noScrollBarsTransform}
`;

/**
 * A React component that allows the view hierarchy placed within it to be scrolled.
 *
 * `ScrollView` renders all its react child components at once, but this has a performance downside.
 *
 * Keep in mind that `ScrollView` must have a bounded height in order to work. In order to bound the height of a `ScrollView`, either set the height of the view directly (discouraged) or make sure all parent views have bounded height.
 */
const ScrollView: React.FC<IScrollViewProps> = props => {
  const { orientation = VERTICAL, onBottomReached, ...rest } = props;

  function onScroll(e: React.UIEvent<HTMLElement, UIEvent>) {
    const bottomWasReached =
      (e.target as HTMLElement).scrollHeight - Math.floor((e.target as HTMLElement).scrollTop) ===
      (e.target as HTMLElement).clientHeight;

    if (bottomWasReached && isFunction(onBottomReached)) {
      (onBottomReached as VoidFunction)();
    }
  }

  return <StyledScrollView orientation={orientation} onScroll={onScroll} {...rest} />;
};

export default ScrollView;
