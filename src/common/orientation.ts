import { IResponsiveProp } from './custom-breakpoints';

export const HORIZONTAL = 'horizontal';

export const VERTICAL = 'vertical';

export type IOrientation = 'horizontal' | 'vertical';

export type IWithOrientation = {
  /**
   * Orientation of the component. Either "vertical" or "horizontal". Components are vertical by default.
   */
  orientation?: IOrientation;
};

export type IWithResponsiveOrientation = {
  orientation?: IResponsiveProp<IOrientation>;
};
