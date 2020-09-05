import React from 'react';
import styled, { css } from 'styled-components';
import { PropsFor, breakpoints, compose, flexbox, sizing } from '@material-ui/system';

import { IWithOrientation, IWithResponsiveOrientation, HORIZONTAL, VERTICAL } from '../../common/orientation';
import { IStylable } from '../../common/styles';
import noScrollBarsTransform, { IWithScrollBars } from '../../common/scroll-bars';
import customBreakpoints, { ITransformResponsiveProps } from '../../common/custom-breakpoints';

const DEFAULT_HTML_ELEMENT = 'div';

const flexBoxAndSizingTransforms = breakpoints(compose(flexbox, sizing));

type IFlexboxAndSizingProps = PropsFor<typeof flexBoxAndSizingTransforms>;

type IStackCSSProps = IFlexboxAndSizingProps & IWithScrollBars;

export type IStackProps = IFlexboxAndSizingProps &
  IWithScrollBars &
  IWithResponsiveOrientation &
  IStylable & {
    /**
     * Component to be rendered.
     */
    as?: React.ElementType;
  };

const stackCSS = css<IStackCSSProps>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  ${noScrollBarsTransform}
  ${flexBoxAndSizingTransforms}
`;

export function orientationTransform(props: ITransformResponsiveProps<IStackProps, 'orientation', IWithOrientation>) {
  const flexDirection = {
    vertical: 'column',
    horizontal: 'row',
  }[props.orientation || VERTICAL];

  return `flex-direction: ${flexDirection};`;
}

const StackBox = styled.div<IStackProps>`
  ${stackCSS}

  ${(props: IStackProps) =>
    customBreakpoints({
      prop: 'orientation',
      props,
      transform: orientationTransform,
    })}
`;

/**
 * A React component that arranges its children in a vertical or horizontal line.
 *
 * A `Stack` can be passed any flexbox or sizing css property.
 */
const Stack: React.FC<IStackProps> = props => {
  const { as = DEFAULT_HTML_ELEMENT, orientation = VERTICAL, ...rest } = props;

  return <StackBox as={as} orientation={orientation} {...rest} />;
};

type IOrientationlessStack = Omit<IStackProps, 'orientation'>;

/**
 * A React component that arranges its children in a vertical line.
 *
 * A `VStack` can be passed any flexbox or sizing css property.
 */
const VStack: React.FC<IOrientationlessStack> = props => <Stack orientation={VERTICAL} {...props} />;

/**
 * A React component that arranges its children in an horizontal line.
 *
 * An `HStack` can be passed any flexbox or sizing css property.
 */
const HStack: React.FC<IOrientationlessStack> = props => <Stack orientation={HORIZONTAL} {...props} />;

export default Stack;

export { stackCSS, VStack, HStack };
