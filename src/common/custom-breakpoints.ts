import keys from './keys';
import isObject from './isObject';
import isNull from './isNull';
import EMPTY_STRING from './empty-string';

/**
 * Stolen from Material UI.
 */
export const bps: Record<string, number> = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

type IBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export function from(key: IBreakpoint) {
  return `@media (min-width: ${bps[key]}px)`;
}

export type IResponsiveProp<TProp> =
  | TProp
  | Partial<{
      xs: TProp;
      sm: TProp;
      md: TProp;
      lg: TProp;
      xl: TProp;
    }>;

type IProp = Record<string, any>;

type ICustomStyleFunction = {
  prop: string;
  props: IProp;
  transform: (props: any) => string;
};

function customBreakpoints(opts: ICustomStyleFunction) {
  const { prop, props, transform } = opts;

  const propValue = props[prop];

  if (!isObject(propValue) && !isNull(propValue)) {
    return transform(props);
  } else if (isNull(propValue)) {
    return EMPTY_STRING;
  }

  // Force the order the responsive values are written
  const breakpointsForProp = keys({
    ...(propValue.xs ? { xs: propValue.xs } : {}),
    ...(propValue.sm ? { sm: propValue.sm } : {}),
    ...(propValue.md ? { md: propValue.md } : {}),
    ...(propValue.lg ? { lg: propValue.lg } : {}),
    ...(propValue.xl ? { xl: propValue.xl } : {}),
  });

  const responsiveStyles = breakpointsForProp.reduce((acc, breakpoint) => {
    const propValueForBreakpoint = (propValue as IProp)[breakpoint];

    const mediaQueryForBreakpoint = breakpoint !== 'xs' ? from(breakpoint as IBreakpoint) : undefined;

    const stylesForBreakpoint = transform({
      ...props,
      [prop]: propValueForBreakpoint,
    });

    if (!mediaQueryForBreakpoint) {
      return `
        ${stylesForBreakpoint}
        ${acc}
      `;
    }

    return `
      ${acc}

      ${mediaQueryForBreakpoint} {
        ${stylesForBreakpoint}
      }
    `;
  }, EMPTY_STRING);

  return responsiveStyles;
}

export default customBreakpoints;

export type ITransformResponsiveProps<TProps, TResponsivePropName extends string, TProp> = Omit<
  TProps,
  TResponsivePropName
> &
  TProp;
