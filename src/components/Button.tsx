import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { usePress } from '@react-aria/interactions';
import { PressEvent } from '@react-types/shared';
// @ts-ignore
import Colr from 'colr';

import EMPTY_STRING from '../common/empty-string';
import { IResponsiveProp, from } from '../common/custom-breakpoints';
import Text, { ITypographyScale, ITextProps } from './Text';
import { ITheme } from './theme';

type IButtonVariant = 'contained' | 'ghost' | 'text';

type IOptionalButtonVariant = IButtonVariant | 'none';

type IPressFunction = (e: PressEvent) => void;

type IButtonProps = {
  variant?: IButtonVariant;
  hoverVariant?: IOptionalButtonVariant;
  activeVariant?: IOptionalButtonVariant;
  /**
   * Background color of the button.
   */
  color: keyof ITheme['colors'];
  /**
   * Color of the Text.
   */
  textColor: keyof ITheme['colors'];
  /**
   * Typography scaled used.
   */
  scale: IResponsiveProp<ITypographyScale>;
  /**
   * Duration (in milliseconds) to perform the button state change.
   */
  interactionDelay?: number;
  /**
   * Props text element.
   */
  textProps?: Omit<ITextProps, 'scale'>;
  /**
   * Brief hint about what the button does. Appears when the button is hovered.
   */
  hint?: React.ButtonHTMLAttributes<HTMLButtonElement>['title'];
  /**
   * Called when the press is released over the target.
   */
  onPress?: IPressFunction;
  /**
   * Called when a press interaction starts.
   */
  onPressIn?: IPressFunction;
  /**
   * Called when a press interaction ends, either over the target or when the pointer leaves the target.
   */
  onPressOut?: IPressFunction;
  /**
   * Provided theme.
   */
  theme: ITheme;
} & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'title' | 'onClick' | 'onTouchStart' | 'onTouchEnd' | 'onMouseDown' | 'onMouseUp' | 'onMouseLeave'
> &
  React.RefAttributes<HTMLButtonElement>;

type IStyledButtonProps = Omit<
  IButtonProps,
  'title' | 'scale' | 'variant' | 'activeVariant' | 'onPress' | 'onPressIn' | 'onPressOut' | 'hint' | 'interactionDelay'
> & {
  variant: IButtonVariant;
  hoverVariant: IOptionalButtonVariant;
  activeVariant: IOptionalButtonVariant;
  interactionDelayInS: number;
};

const onHoverOrFocusStyles = (getStyles: () => string) => `
  ${from('md')} {
    &:hover:not(:disabled):not(:active), &:focus:not(:disabled):not(:active) {
      ${getStyles()}
    }
  }
`;

const onActiveStyles = (getStyles: () => string) => `
  &:active:not(:disabled) {
    ${getStyles()}
  }
`;

const getContainedButtonIdleStyle = () => `
  background-color: var(--contained-background-color);
  color: var(--contained-text-color);
  border-color: var(--contained-border-color);
`;

const getContainedButtonHoverStyle = () => `
  background-color: var(--contained-hover-background-color);
  color: var(--contained-hover-text-color);
  border-color: var(--contained-hover-border-color);
`;

const getContainedButtonActiveStyle = () => `
  background-color: var(--contained-active-mobile-background-color);
  color: var(--contained-active-mobile-text-color);

  ${from('md')} {
    background-color: var(--contained-active-background-color);
    color: var(--contained-active-text-color);
  }
`;

const getGhostButtonIdleStyle = () => `
  background-color: var(--ghost-background-color);
  color: var(--ghost-text-color);
  border-color: var(--ghost-border-color);
`;

const getGhostButtonHoverStyle = () => `
  background-color: var(--ghost-hover-background-color);
  color: var(--ghost-hover-text-color);
  border-color: var(--ghost-hover-border-color);
`;

const getGhostButtonActiveStyle = () => `
  background-color: var(--ghost-active-background-color);
  color: var(--ghost-active-text-color);
  border-color: var(--ghost-active-border-color);
`;

const getTextButtonIdleStyle = () => `
  background-color: var(--text-background-color);
  color: var(--text-text-color);
  border-color: var(--text-border-color);
`;

const getTextButtonHoverStyle = () => `
  background-color: var(--text-hover-background-color);
  color: var(--text-hover-color);
  border-color: var(--text-hover-border-color);
`;

const getTextButtonActiveStyle = () => `
  background-color: var(--text-active-background-color);
  color: var(--text-active-color);
  border-color: var(--text-active-border-color);
`;

type IGetButtonStyleOptions = {
  color: string;
  textColor: string;
  getVariantBaseStyles: () => string;
  hoverVariant: IOptionalButtonVariant;
  activeVariant: IOptionalButtonVariant;
};

const getButtonStyle = (opts: IGetButtonStyleOptions) => {
  const { color, textColor, hoverVariant, activeVariant, getVariantBaseStyles } = opts;

  const lighterColor = Colr.fromHex(color)
    .lighten(15)
    .toHex();
  const ligtherTextColor = Colr.fromHex(textColor)
    .lighten(15)
    .toHex();

  const darkColor = Colr.fromHex(color)
    .darken(10)
    .toHex();
  const darkestColor = Colr.fromHex(color)
    .darken(20)
    .toHex();

  const customProperties = `
    /* Base */
    --background-color: ${color};
    --text-color: ${textColor};

    /* Contained */
    --contained-background-color: var(--background-color);
    --contained-text-color: var(--text-color);
    --contained-border-color: transparent;

    /* Contained:hover */
    --contained-hover-background-color: ${darkColor};
    --contained-hover-text-color: var(--contained-text-color);
    --contained-hover-border-color: var(--contained-border-color);
    
    /* Contained:active */
    --contained-active-mobile-text-color: ${ligtherTextColor};
    --contained-active-mobile-background-color: ${lighterColor};
    --contained-active-background-color: ${darkestColor};
    --contained-active-text-color: var(--contained-text-color);
    --contained-active-border-color: var(--contained-border-color);

    /* Ghost */
    --ghost-background-color: transparent;
    --ghost-text-color: var(--background-color);
    --ghost-border-color: var(--ghost-text-color);

    /* Ghost:hover */
    --ghost-hover-background-color: var(--ghost-background-color);
    --ghost-hover-text-color: ${darkColor};
    --ghost-hover-border-color: var(--ghost-hover-text-color);

    /* Ghost:active */
    --ghost-active-mobile-background-color: var(--ghost-background-color);
    --ghost-active-mobile-text-color: ${ligtherTextColor};
    --ghost-active-background-color: var(--ghost-background-color);
    --ghost-active-text-color: ${darkestColor};
    --ghost-active-border-color: var(--ghost-active-text-color);
    
    /* Text */
    --text-background-color: transparent;
    --text-text-color: var(--ghost-text-color);
    --text-border-color: var(--text-background-color);

    /* Text:hover */
    --text-hover-background-color: var(--text-background-color);
    --text-hover-color: var(--ghost-hover-text-color);
    --text-hover-border-color: var(--text-border-color);

    /* Text:active */
    --text-active-background-color: var(--text-background-color);
    --text-active-color: var(--ghost-active-text-color);
    --text-active-border-color: var(--text-border-color);
  `;

  return `
    ${customProperties}
    ${getVariantBaseStyles()}
    ${
      {
        contained: onHoverOrFocusStyles(getContainedButtonHoverStyle),
        ghost: onHoverOrFocusStyles(getGhostButtonHoverStyle),
        text: onHoverOrFocusStyles(getTextButtonHoverStyle),
        none: EMPTY_STRING,
      }[hoverVariant]
    }
    ${
      {
        contained: onActiveStyles(getContainedButtonActiveStyle),
        ghost: onActiveStyles(getGhostButtonActiveStyle),
        text: onActiveStyles(getTextButtonActiveStyle),
        none: EMPTY_STRING,
      }[activeVariant]
    }
  `;
};

const StyledButton = styled.button<IStyledButtonProps>`
  --transition-time: ${props => props.interactionDelayInS}s;

  box-sizing: border-box;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: inherit;
  height: inherit;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  transition: ease background-color var(--transition-time), ease border-color var(--transition-time),
    ease color var(--transition-time);

  &::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  &:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  border-width: 2px;
  border-style: solid;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  ${function variantTransform(props) {
    const { variant, hoverVariant, activeVariant, color, textColor, theme } = props;

    const common = {
      color: theme.colors[color],
      textColor: theme.colors[textColor],
      hoverVariant,
      activeVariant,
    };

    return {
      contained: getButtonStyle({
        ...common,
        getVariantBaseStyles: getContainedButtonIdleStyle,
      }),
      ghost: getButtonStyle({
        ...common,
        getVariantBaseStyles: getGhostButtonIdleStyle,
      }),
      text: getButtonStyle({
        ...common,
        getVariantBaseStyles: getTextButtonIdleStyle,
      }),
    }[variant];
  }}
`;

/**
 * A React component to create basic buttons.
 */
const Button: React.FC<IButtonProps> = props => {
  const noop = () => {};

  const {
    theme,
    variant = 'contained',
    hoverVariant = variant,
    activeVariant = variant,
    children,
    scale,
    textProps = {},
    hint,
    ref,
    onPress = noop,
    onPressIn = noop,
    onPressOut = noop,
    interactionDelay = 300,
    disabled,
    ...rest
  } = props;

  const interactionDelayInS = interactionDelay / 1000;

  const { pressProps } = usePress({
    onPressStart: !disabled ? onPressIn : undefined,
    onPressEnd: !disabled ? onPressOut : undefined,
    onPress: !disabled ? onPress : undefined,
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledButton
        type="button"
        variant={variant}
        hoverVariant={hoverVariant}
        activeVariant={activeVariant}
        title={hint}
        disabled={disabled}
        ref={ref as React.MutableRefObject<HTMLButtonElement>}
        interactionDelayInS={interactionDelayInS}
        {...pressProps}
        {...rest}
      >
        <Text size={7} scale={scale} as="span" theme={theme} {...textProps}>
          {children}
        </Text>
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button as React.FC<IButtonProps>;
