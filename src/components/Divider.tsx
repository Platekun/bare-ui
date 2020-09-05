import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PropsFor, breakpoints, compose, display, sizing, border } from '@material-ui/system';

import { IWithOrientation, IWithResponsiveOrientation, HORIZONTAL } from '../common/orientation';
import { IStylable } from '../common/styles';
import customBreakpoints, { ITransformResponsiveProps } from '../common/custom-breakpoints';

const DEFAULT_COLOR = '#ddd';

const stylesWithBreakpoints = breakpoints(compose(display, sizing, border));

type IDisplaySizingAndBorderProps = PropsFor<typeof stylesWithBreakpoints>;

type IDividerCSSProps = IStylable & IWithResponsiveOrientation & IDisplaySizingAndBorderProps;

type IDividerProps = IDividerCSSProps & React.HTMLAttributes<HTMLHRElement>;

const HorizontalRule = styled.hr<IDividerProps>`
  display: block;
  border-width: 0;
  border-style: solid;
  margin: 0;
  background-color: ${DEFAULT_COLOR};

  ${(props: IDividerProps) =>
    customBreakpoints({
      prop: 'orientation',
      props,
      transform: function orientationTransform(
        props: ITransformResponsiveProps<IDividerProps, 'orientation', IWithOrientation>
      ) {
        return {
          horizontal: `
            height: 1px;
            width: 100%;
          `,
          vertical: `
            height: 100%;
            width: 1px;
          `,
        }[props.orientation || HORIZONTAL];
      },
    })}
`;

/**
 * A React component that serves as a thin line that separates groups content in lists and layouts. It replaces the horizontal rule tag.
 *
 * Dividers bring clarity to a layout by grouping and dividing content in close proximity. They can also be used to establish rhythm and hierarchy.
 */
const Divider: React.FC<IDividerProps> = props => {
  const { children, orientation = HORIZONTAL, ...rest } = props;

  useEffect(() => {
    if (!!children) {
      console.warn('<Divider/> will ignore any children passed in');
    }
  }, [children]);

  return <HorizontalRule orientation={orientation} {...rest} />;
};

export default Divider;
