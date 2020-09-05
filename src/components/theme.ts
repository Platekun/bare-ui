type IKeywordFontWeight = 'normal' | 'bold';

type IRelativeFontWeight = 'lighter' | 'bolder';

type IGlobalFontWeight = 'inherit' | 'initial' | 'unset';

type IVariableFontWeight = number;

export type ICommonFontWeight =
  | 'thin'
  | 'extra-light'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold'
  | 'black'
  | 'extra-black';

export type IFontWeight =
  | IKeywordFontWeight
  | IRelativeFontWeight
  | IGlobalFontWeight
  | IVariableFontWeight
  | ICommonFontWeight;

export type ITheme = {
  colors: Record<string, string>;
  fontWeight?: IFontWeight;
  fontSizeInPx?: number;
  lineHeight?: number;
  headingFontFamily?: Array<string>;
  bodyFontFamily?: Array<string>;
};
