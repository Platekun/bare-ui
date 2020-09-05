import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PropsFor, compose, flexbox, breakpoints, sizing } from '@material-ui/system';

import { IStylable } from '../common/styles';

const stylesWithBreakpoints = breakpoints(compose(flexbox, sizing));

type ISpacerProps = IStylable & Omit<PropsFor<typeof stylesWithBreakpoints>, 'children'>;

const StyledSpacer = styled.div<ISpacerProps>`
  display: flex;
  height: inherit;
  ${stylesWithBreakpoints}
`;

/**
 * A React component that represents a flexible space that expands vertically or horizontally.
 *
 * A spacer accepts all sizing props / flexbox props and does not accept children.
 */
const Spacer: React.FC<ISpacerProps> = props => {
  const { children, ...rest } = props;

  useEffect(() => {
    if (children) {
      console.warn('Children are ignored on a <Spacer/>');
    }
  }, [children]);

  return <StyledSpacer {...rest} />;
};

export default Spacer;
