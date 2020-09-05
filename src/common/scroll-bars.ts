import EMPTY_STRING from './empty-string';
import { IWithResponsiveOrientation, IWithOrientation, VERTICAL, HORIZONTAL } from './orientation';
import { ITransformResponsiveProps } from './custom-breakpoints';

export type IWithScrollBars = {
  /**
   * Wheter or not the component should render the scrollbars.
   */
  noScrollBars?: boolean;
};

function noScrollBarsTransform<T extends unknown & IWithScrollBars>(props: T) {
  const { noScrollBars = false } = props;

  if (!noScrollBars) {
    return EMPTY_STRING;
  }

  return `
    ::-webkit-scrollbar {
      width: 0px;
    }
  `;
}

function overflowYTransform<T extends unknown & IWithResponsiveOrientation>(
  props: ITransformResponsiveProps<T, 'orientation', IWithOrientation>
) {
  if (props.orientation === HORIZONTAL) {
    return '';
  }

  const overflowY = 'scroll';

  return `overflow-y: ${overflowY};`;
}

function overflowXTransform<T extends unknown & IWithResponsiveOrientation>(
  props: ITransformResponsiveProps<T, 'orientation', IWithOrientation>
) {
  if (props.orientation === VERTICAL) {
    return '';
  }

  const overflowY = 'scroll';

  return `overflow-x: ${overflowY};`;
}

export default noScrollBarsTransform;

export { overflowYTransform, overflowXTransform };
