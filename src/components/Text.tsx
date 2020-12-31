import React from 'react';
import { breakpoints, style, compose } from '@material-ui/system';
import styled, { ThemeProvider } from 'styled-components';
// @ts-ignore
import Colr from 'colr';

import customBreakpoints, { IResponsiveProp, ITransformResponsiveProps } from '../common/custom-breakpoints';
import EMPTY_STRING from '../common/empty-string';
import joinStrings from '../common/join-strings';
import { IStylable } from '../common/styles';
import { ITheme, IFontWeight, ICommonFontWeight } from './theme';

type IAlignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';

type IDisplay = 'initial' | 'block' | 'inline';

type IHTMLTextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'span';

type ITypeSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type ITypographyScale =
  | 'minor-second'
  | 'major-second'
  | 'minor-third'
  | 'major-third'
  | 'perfect-fourth'
  | 'augmented-fourth'
  | 'perfect-fifth'
  | 'golden-ratio';

export type ITextProps = {
  /**
   * Typography scaled used.
   */
  scale?: IResponsiveProp<ITypographyScale>;
  /**
   * Text hierarchy. It supports from 1 to 9.
   *
   * If no `as` property is provided, this prop is used to calculate a default tag.
   */
  size: ITypeSize;
  /**
   * Component to be rendered.
   *
   * If not provided, a tag will be inferred from the `size` prop.
   */
  as?: IHTMLTextTag;
  /**
   * Set the text-align on the component.
   */
  align?: IAlignment;
  /**
   * Controls the display type.
   */
  display?: IDisplay;
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: string;
  /**
   *Font family of the text.
   */
  fontFamily?: IResponsiveProp<string>;
  /**
   *Font weight of the text.
   */
  fontWeight?: IResponsiveProp<IFontWeight>;
  /**
   * Line height  of the text.
   */
  lineHeight?: IResponsiveProp<number>;
  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean;
  /**
   * Styles applied if text is going to be read by screan readers.
   */
  srOnly?: boolean;
  /**
   * Provided theme.
   */
  theme: ITheme;
} & IStylable;

const colorDisplayAndAlignmentTransforms = breakpoints(
  compose(
    style({
      prop: 'color',
      themeKey: 'colors',
    }),
    style({
      prop: 'display',
      transform: value => `display: ${value || 'block'}`,
    }),
    style({
      prop: 'align',
      transform: value => `text-align: ${value || 'inherit'}`,
    })
  )
);

type IWithFontFamily = { fontFamily?: string };

type IWithFontWeight = { fontWeight?: IFontWeight };

type IWithScale = { scale: ITypographyScale };

const StyledText = styled.span<ITextProps>`
  margin: 0;

  ${colorDisplayAndAlignmentTransforms};

  ${(props: ITextProps) =>
    customBreakpoints({
      prop: 'scale',
      props,
      transform: function fontSizeTransform(props: ITransformResponsiveProps<ITextProps, 'scale', IWithScale>) {
        const {
          size,
          scale,
          theme: { fontSizeInPx = 16 },
        } = props;
        debugger;
        const factor: number = {
          1: 7,
          2: 6,
          3: 5,
          4: 4,
          5: 3,
          6: 2,
          7: 1,
          8: 1,
          9: 0.5,
        }[size];

        return {
          'minor-second': `font-size: ${(fontSizeInPx * 1.0607 ** factor) / 16}em;`,
          'major-second': `font-size: ${(fontSizeInPx * 1.125 ** factor) / 16}em;`,
          'minor-third': `font-size: ${(fontSizeInPx * 1.2 ** factor) / 16}em;`,
          'major-third': `font-size: ${(fontSizeInPx * 1.25 ** factor) / 16}em;`,
          'perfect-fourth': `font-size: ${(fontSizeInPx * 1.333 ** factor) / 16}em;`,
          'augmented-fourth': `font-size: ${(fontSizeInPx * 1.414 ** factor) / 16}em;`,
          'perfect-fifth': `font-size: ${(fontSizeInPx * 1.5 ** factor) / 16}em;`,
          'golden-ratio': `font-size: ${(fontSizeInPx * 1.618 ** factor) / 16}em;`,
        }[scale];
      },
    })}

  ${(props: ITextProps) =>
    customBreakpoints({
      prop: 'fontFamily',
      props,
      transform: function fontFamilyTransform(
        props: ITransformResponsiveProps<ITextProps, 'fontFamily', IWithFontFamily>
      ) {
        const {
          as = 'span',
          fontFamily,
          theme: { headingFontFamily = [], bodyFontFamily = headingFontFamily },
        } = props;

        return {
          h1: `font-family: ${fontFamily || joinStrings(headingFontFamily)};`,
          h2: `font-family: ${fontFamily || joinStrings(headingFontFamily)};`,
          h3: `font-family: ${fontFamily || joinStrings(headingFontFamily)};`,
          h4: `font-family: ${fontFamily || joinStrings(headingFontFamily)};`,
          h5: `font-family: ${fontFamily || joinStrings(headingFontFamily)};`,
          h6: `font-family: ${fontFamily || joinStrings(headingFontFamily)};`,
          p: `font-family: ${fontFamily || joinStrings(bodyFontFamily)};`,
          span: `font-family: ${fontFamily || joinStrings(bodyFontFamily)};`,
          small: `font-family: ${fontFamily || joinStrings(bodyFontFamily)};`,
        }[as];
      },
    })};

  ${(props: ITextProps) =>
    customBreakpoints({
      prop: 'fontWeight',
      props,
      transform: function fontWeightTransform(
        props: ITransformResponsiveProps<ITextProps, 'fontWeight', IWithFontWeight>
      ) {
        const { as = 'span', fontWeight } = props;

        if (typeof fontWeight === 'undefined') {
          const isHeading = as === 'h1' || as === 'h2' || as === 'h3' || as === 'h4' || as === 'h5' || as === 'h6';

          const defaultFontWeight = isHeading ? 'bold' : 'normal';
          return `font-weight: ${fontWeight || defaultFontWeight}`;
        }

        const isUsingAVariableFontWeight = typeof fontWeight === 'number';

        if (isUsingAVariableFontWeight) {
          return `font-weight: ${fontWeight}`;
        }

        const isUsingRelativeOrGlobalFontWeight =
          fontWeight === 'lighter' ||
          fontWeight === 'bolder' ||
          fontWeight === 'inherit' ||
          fontWeight === 'initial' ||
          fontWeight === 'unset';

        if (isUsingRelativeOrGlobalFontWeight) {
          return `font-weight: ${fontWeight}`;
        }

        const fontWeightToBeUsed: number = {
          thin: 100,
          'extra-light': 200,
          light: 300,
          normal: 400,
          medium: 500,
          'semi-bold': 600,
          bold: 700,
          'extra-bold': 800,
          black: 900,
          'extra-black': 950,
        }[fontWeight as ICommonFontWeight];

        return `font-weight: ${fontWeightToBeUsed}`;
      },
    })};

  ${function lineHeightTransform(props: ITextProps) {
    const {
      as = 'span',
      lineHeight,
      theme: { lineHeight: themeLineHeight = 1.65 },
    } = props;

    if (as !== 'p') {
      return EMPTY_STRING;
    }

    return `line-height: ${lineHeight || themeLineHeight};`;
  }}

  ${function noWrapTransform(props: ITextProps) {
    const { noWrap = false } = props;

    if (!noWrap) {
      return EMPTY_STRING;
    }

    return `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;
  }};

  ${function srOnlyTransform(props: ITextProps) {
    const { srOnly = false } = props;

    if (!srOnly) {
      return EMPTY_STRING;
    }

    return `
      position: absolute;
      height: 1;
      width: 1;
      overflow: hidden;
    `;
  }}
`;

/**
 * A React component for displaying text.
 */
const Text: React.FC<ITextProps> = props => {
  const { theme, scale = 'major-third', size, as, ...rest } = props;

  const asGivenSize =
    as ||
    ({
      1: 'h1',
      2: 'h2',
      3: 'h3',
      4: 'h4',
      5: 'h5',
      6: 'h6',
      7: 'p',
      8: 'span',
      9: 'small',
    }[size] as IHTMLTextTag);

  return (
    <ThemeProvider theme={theme}>
      <StyledText scale={scale} as={asGivenSize} size={size} {...rest} />
    </ThemeProvider>
  );
};

export default Text as React.FC<ITextProps>;
